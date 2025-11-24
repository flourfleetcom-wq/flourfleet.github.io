import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Instagram } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Flour Fleet Advisory. Book a free 30-minute consultation or send an enquiry about our tax services.',
};

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Get in touch</h1>
          <p className="text-xl text-slate-200">
            Trust your taxes to an adviser who cares. Reach out for a free tax evaluation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Form */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Send us an enquiry</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold text-slate-900 mb-4">Direct contact</h3>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start space-x-3 group"
                >
                  <Mail className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-600 group-hover:text-slate-900 transition-colors">
                      {siteConfig.contact.email}
                    </p>
                    <p className="text-sm text-slate-500">Monday to Friday, 9am–5pm</p>
                  </div>
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900 mb-4">Follow us</h3>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 group"
                >
                  <Instagram className="h-5 w-5 text-teal-600 flex-shrink-0" />
                  <p className="text-slate-600 group-hover:text-slate-900 transition-colors">
                    @flourfleetadvisory
                  </p>
                </a>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-3">Response time</h3>
                <p className="text-slate-600 text-sm">
                  We aim to respond to all enquiries within 24-48 hours.
                </p>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
                <h3 className="font-semibold text-slate-900 mb-3">Free consultation</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Your initial 30-minute consultation is completely free. No fees, no pressure.
                </p>
                <p className="text-xs text-slate-500">
                  This is a chance for us to understand your situation and for you to learn about how we work.
                </p>
              </div>

              <div className="bg-slate-100 p-6 rounded-lg border border-slate-300">
                <h3 className="font-semibold text-slate-900 mb-3">Based in London</h3>
                <p className="text-slate-600 text-sm">
                  We serve clients across England and Wales, plus international clients with cross-border tax questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Quick Links */}
      <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Want to learn more first?</h2>
          <p className="text-slate-600 mb-8">
            Explore our services and FAQs to get a better understanding of what we offer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="px-6 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 hover:bg-slate-100 transition-colors font-medium"
            >
              View Services
            </Link>
            <Link
              href="/faq"
              className="px-6 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 hover:bg-slate-100 transition-colors font-medium"
            >
              Read FAQs
            </Link>
            <Link
              href="/about"
              className="px-6 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 hover:bg-slate-100 transition-colors font-medium"
            >
              Meet Natalie
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
