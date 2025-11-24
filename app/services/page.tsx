import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive UK tax advisory services including personal tax, business tax, and international tax planning.',
};

const services = [
  {
    id: 'personal-tax',
    title: 'Personal Tax',
    icon: '👤',
    description: 'Strategic tax planning for individuals, helping you optimise your tax position and build long-term wealth.',
    topics: [
      'Income tax planning and tax-efficient investment strategies',
      'Capital gains tax on property, investments, and other assets',
      'Inheritance tax planning and estate structuring',
      'Trusts and estate planning for family wealth protection',
      'Tax-efficient investment portfolios',
      'Retirement planning and pension tax strategies',
      'High-net-worth tax optimisation',
      'Executive tax planning',
    ],
  },
  {
    id: 'business-tax',
    title: 'Business Tax',
    icon: '📊',
    description: 'Comprehensive tax strategy for businesses of all sizes, from start-ups to established companies.',
    topics: [
      'Corporation tax planning and structuring',
      'Sole trader and partnership tax strategies',
      'Limited company establishment and tax efficiency',
      'VAT planning and compliance optimisation',
      'Start-up tax advice and pre-trading strategies',
      'Business succession planning',
      'R&D tax credits and innovation reliefs',
      'Dividing profits efficiently between director and company',
    ],
  },
  {
    id: 'international-tax',
    title: 'International Tax',
    icon: '🌍',
    description: 'Specialist guidance on cross-border tax issues, from residency planning to permanent establishment risk.',
    topics: [
      'Pre-arrival tax planning for UK newcomers',
      'Pre-departure planning for UK leavers',
      'UK residency and domicile determination',
      'Non-resident tax planning and compliance',
      'Permanent establishment risk assessment and mitigation',
      'Transfer pricing strategies',
      'Double tax treaty utilisation',
      'EU and international structuring',
      'Expatriate tax planning',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="w-full">
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-slate-200">
            Specialist tax advisory tailored to your unique circumstances. Whether you are an individual, self-employed professional, or business owner, we have the expertise to help.
          </p>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-slate-200 sticky top-16 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="px-6 py-2 rounded-full bg-slate-100 text-slate-900 font-medium hover:bg-teal-100 hover:text-teal-900 transition-colors"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, idx) => (
              <div key={service.id} id={service.id} className="scroll-mt-32">
                <div className="flex items-start gap-6 mb-8">
                  <div className="text-6xl flex-shrink-0">{service.icon}</div>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">{service.title}</h2>
                    <p className="text-lg text-slate-600">{service.description}</p>
                  </div>
                </div>

                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 mb-8">
                  <h3 className="font-semibold text-slate-900 mb-6 text-lg">What we cover:</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.topics.map((topic, topicIdx) => (
                      <div key={topicIdx} className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <p className="text-slate-600">{topic}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-teal-600 hover:bg-teal-700 text-white"
                    asChild
                  >
                    <Link href="/contact">Discuss your situation</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                  >
                    <Link href="/faq">View FAQs</Link>
                  </Button>
                </div>

                {idx !== services.length - 1 && (
                  <div className="mt-16 border-t border-slate-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">How We Work</h2>

          <div className="space-y-8">
            {[
              {
                number: '1',
                title: 'Free 30-minute Consultation',
                description: 'We listen to your situation, goals, and concerns. No fees, no pressure. This is how we get to know you and identify where we can help.',
              },
              {
                number: '2',
                title: 'Assessment & Strategy',
                description: 'After our initial discussion, we assess your tax position and identify opportunities and risks. We outline a tailored strategy for your circumstances.',
              },
              {
                number: '3',
                title: 'Clear Recommendations',
                description: 'We explain our recommendations in plain English, with clear explanations of the why and the trade-offs. You always understand what we are proposing and why.',
              },
              {
                number: '4',
                title: 'Implementation Support',
                description: 'We work with your accountant and other advisers to implement strategies correctly. We coordinate to ensure everything runs smoothly.',
              },
              {
                number: '5',
                title: 'Ongoing Monitoring',
                description: 'Tax law changes, and so do your circumstances. We stay alert to changes that affect you and flag new opportunities and risks as they emerge.',
              },
            ].map((step) => (
              <div key={step.number} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-teal-600 text-white font-bold">
                    {step.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Ready to explore tailored tax strategies?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Start with a free 30-minute consultation. We will review your situation and outline how we can help.
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
