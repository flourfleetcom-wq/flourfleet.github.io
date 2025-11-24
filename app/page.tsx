import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Compass, TrendingUp, Globe } from 'lucide-react';
import { FAQ } from '@/components/FAQ';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Approachable UK tax advisory specialising in personal, business, and international tax strategy. Get tailored advice from Natalie Hill.',
};

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Tax advice that puts you in control
          </h1>
          <p className="text-xl sm:text-2xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Clear, engaging strategies for personal, business, and international tax challenges. You're the captain of your financial journey—not lost in jargon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-teal-500 hover:bg-teal-600 text-white"
              asChild
            >
              <Link href="/contact">Book a free 30-minute consultation</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <Link href="/services">Explore our services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Tax advice should be clear and personal
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                Too often, tax advice feels overwhelming and detached from your actual situation. At Flour Fleet Advisory, we believe in a different approach.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                We take time to understand your unique circumstances, explain the options clearly, and craft strategies that work for you—not just on paper, but in practice.
              </p>
              <p className="text-lg text-slate-600">
                When you work with us, you're in the driver's seat. We provide the expertise and guidance, but you stay in control of your financial journey.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-12 rounded-2xl border border-slate-200">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <Compass className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Clear Navigation</h3>
                    <p className="text-slate-600">We explain complex tax concepts in plain English so you truly understand your options.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <TrendingUp className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Proactive Planning</h3>
                    <p className="text-slate-600">We look ahead to identify opportunities and risks, not just react to what's already happened.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Globe className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Tailored Solutions</h3>
                    <p className="text-slate-600">Every situation is different. We create strategies that fit your specific goals and constraints.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our services</h2>
            <p className="text-xl text-slate-600">Expert guidance across all areas of UK tax strategy</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Personal Tax',
                description: 'Income tax planning, capital gains, inheritance tax, and estate planning strategies tailored to your circumstances.',
                icon: '👤',
              },
              {
                title: 'Business Tax',
                description: 'Corporation tax planning, VAT strategy, business structuring, and support for start-ups and growing companies.',
                icon: '📊',
              },
              {
                title: 'International Tax',
                description: 'Cross-border planning, residency issues, permanent establishment risk, and international structuring.',
                icon: '🌍',
              },
            ].map((service, idx) => (
              <Card key={idx} className="border-slate-200 hover:border-teal-300 transition-colors">
                <CardHeader>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/services#${service.title.toLowerCase().replace(' ', '-')}`}>
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Meet Natalie Hill
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                <strong>Founder & Tax Adviser</strong>
              </p>
              <p className="text-slate-600 mb-4">
                Natalie specialises in UK and international tax planning for individuals, families, and businesses. She draws on experience with a major North American financial institution and years of advising self-employed professionals, high-net-worth individuals, and growing companies.
              </p>
              <p className="text-slate-600 mb-6">
                Her approach focuses on understanding your situation deeply, then crafting tax strategies backed by UK legislation, case law, and double tax treaties. She believes great tax advice should be clear, proactive, and tailored—never one-size-fits-all.
              </p>
              <Button asChild>
                <Link href="/about">Learn more about Natalie</Link>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-slate-100 to-slate-50 p-12 rounded-2xl border border-slate-200 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-bold text-slate-900">Natalie Hill</h3>
              <p className="text-teal-600 font-semibold">Founder & Tax Adviser</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Common questions</h2>
            <p className="text-xl text-slate-600">Quick answers to help you understand our services</p>
          </div>

          <FAQ
            limit={3}
            showViewAll={true}
          />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to take control of your tax strategy?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Book a free 30-minute consultation with Natalie to discuss your situation and explore tailored strategies for your circumstances.
          </p>
          <Button
            size="lg"
            className="bg-teal-500 hover:bg-teal-600 text-white"
            asChild
          >
            <Link href="/contact">Book your free consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
