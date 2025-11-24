import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FAQ } from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Flour Fleet Advisory tax services and how we work.',
};

export default function FAQPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-slate-200">
            Got questions? We've answered the most common ones below.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FAQ />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Still have questions?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Didn't find what you were looking for? Book a free 30-minute consultation with Natalie. We'll discuss your specific situation and answer any questions you have.
          </p>
          <Button
            size="lg"
            className="bg-teal-600 hover:bg-teal-700 text-white"
            asChild
          >
            <Link href="/contact">Book a free consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
