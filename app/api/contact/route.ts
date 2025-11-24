import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { supabase } from '@/lib/supabase';
import { siteConfig } from '@/config/site';

const contactFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional().nullable(),
  serviceType: z.enum(['personal', 'business', 'international', 'unsure']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validatedData = contactFormSchema.parse(body);

    const { data: submission, error: dbError } = await supabase
      .from('contact_submissions')
      .insert([
        {
          first_name: validatedData.firstName,
          last_name: validatedData.lastName,
          email: validatedData.email,
          phone: validatedData.phone || null,
          service_type: validatedData.serviceType,
          message: validatedData.message,
          created_at: new Date().toISOString(),
          status: 'pending',
        },
      ])
      .select();

    if (dbError) {
      console.error('Database error:', dbError);
      return NextResponse.json(
        { success: false, error: 'Failed to submit form' },
        { status: 500 }
      );
    }

    const emailBody = `
New contact form submission from Flour Fleet Advisory website

Name: ${validatedData.firstName} ${validatedData.lastName}
Email: ${validatedData.email}
Phone: ${validatedData.phone || 'Not provided'}
Service Type: ${validatedData.serviceType}

Message:
${validatedData.message}

---
Submitted at: ${new Date().toISOString()}
    `.trim();

    try {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'Flour Fleet Advisory <onboarding@resend.dev>',
          to: siteConfig.contact.submissionEmail,
          subject: `New Contact Form Submission from ${validatedData.firstName} ${validatedData.lastName}`,
          text: emailBody,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px;">
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
              <p><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
              <p><strong>Phone:</strong> ${validatedData.phone || 'Not provided'}</p>
              <p><strong>Service Type:</strong> ${validatedData.serviceType}</p>
              <hr>
              <h3>Message:</h3>
              <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
              <hr>
              <p style="color: #666; font-size: 12px;">Submitted at: ${new Date().toISOString()}</p>
            </div>
          `,
        }),
      });

      if (!resendResponse.ok) {
        const emailError = await resendResponse.text();
        console.error('Resend API error:', emailError);
      }
    } catch (emailError) {
      console.error('Error sending email via Resend:', emailError);
    }

    return NextResponse.json(
      {
        success: true,
        data: submission,
        message: 'Thank you for your inquiry. We will be in touch shortly.',
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation error',
          details: error.errors,
        },
        { status: 400 }
      );
    }

    console.error('Unexpected error in contact route:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
