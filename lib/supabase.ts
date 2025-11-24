import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function submitContactForm(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  serviceType: string;
  message: string;
}) {
  try {
    const { data: submission, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone,
          service_type: data.serviceType,
          message: data.message,
          created_at: new Date().toISOString(),
          status: 'pending',
        },
      ])
      .select();

    if (error) throw error;
    return { success: true, data: submission };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
}
