import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'About Natalie Hill',
  description: 'Meet Natalie Hill, Founder & Tax Adviser at Flour Fleet Advisory. Specialising in UK and international tax strategy with experience from major financial institutions.',
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Flour Fleet Advisory</h1>
          <p className="text-xl text-slate-200">
            Specialist tax advice from a tax adviser who believes in clarity, strategy, and putting you in control
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Bio Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Meet Natalie Hill</h2>
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="flex-1">
                <p className="text-slate-600 text-lg mb-4">
                  Natalie is the Founder of Flour Fleet Advisory. She specialises in UK and international tax planning for individuals, families, and businesses—helping self-employed professionals, entrepreneurs, and high-net-worth families navigate the complexities of tax law and find strategies that work in the real world.
                </p>
                <p className="text-slate-600 text-lg mb-4">
                  Drawing on experience at a major North American financial institution, Natalie brings a global perspective to UK tax challenges. She has spent years advising self-employed individuals, families with cross-border interests, and growing businesses on everything from income tax planning and inheritance tax strategy to international structuring and permanent establishment risk.
                </p>
                <p className="text-slate-600 text-lg mb-4">
                  Her philosophy is straightforward: tax advice should be clear, proactive, and tailored to your circumstances. She takes time to understand your situation deeply, explains your options in plain English, and helps you make informed decisions about your financial future. Great tax advice doesn't have to be complicated or jargon-heavy.
                </p>
                <p className="text-slate-600 text-lg">
                  Outside of work, Natalie loves exploring new neighbourhoods in London, sailing, and discovering independent bookshops. She's committed to building an advisory practice that feels collaborative and human, not transactional.
                </p>
              </div>
              <div className="md:w-64 flex-shrink-0">
                <div className="bg-gradient-to-br from-slate-100 to-slate-50 p-8 rounded-2xl border border-slate-200 text-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-slate-300 to-slate-400 rounded-xl mx-auto mb-6"></div>
                  <h3 className="text-2xl font-bold text-slate-900">Natalie Hill</h3>
                  <p className="text-teal-600 font-semibold">Founder & Tax Adviser</p>
                </div>
              </div>
            </div>
          </div>

          {/* Credentials Section */}
          <div className="mb-16 bg-slate-50 p-12 rounded-2xl border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Education & Credentials</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">LLM in International Tax Law</h3>
                  <p className="text-slate-600">King's College London</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">LLB (Bachelor of Laws)</h3>
                  <p className="text-slate-600">King's College London</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">BCom (Bachelor of Commerce)</h3>
                  <p className="text-slate-600">McGill University, Canada</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Experience</h2>
            <div className="space-y-6">
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-900">Major Financial Institution</CardTitle>
                  <p className="text-sm text-slate-600 mt-2">North American-focused international finance and tax</p>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Gained experience in cross-border tax structuring, regulatory compliance, and international wealth management. This experience informs how we approach complex, multi-jurisdictional situations for our clients today.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-900">Self-Employed & SME Advisory</CardTitle>
                  <p className="text-sm text-slate-600 mt-2">Years of client-facing tax advice</p>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Natalie has worked closely with self-employed professionals, small-to-medium enterprises, and high-net-worth individuals, understanding the real-world pressures and priorities they face. This direct experience shapes every piece of advice she gives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-900">Clarity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    We explain complex tax concepts in plain English. No unnecessary jargon. You should always understand the "why" behind our advice.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-900">Proactivity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Great tax planning is forward-looking. We identify opportunities and risks before they become crises, and we help you plan for life changes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-900">Personalisation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Your situation is unique. We don't believe in one-size-fits-all advice. We take time to understand your goals and constraints.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Approach Section */}
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-12 rounded-2xl border border-teal-200 mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">How We Work</h2>
            <div className="space-y-4 text-slate-600">
              <p>
                <strong>Listen first.</strong> We start by understanding your situation, goals, and concerns. No assumptions.
              </p>
              <p>
                <strong>Explain thoroughly.</strong> Once we've assessed your position, we explain the tax landscape, your options, and the trade-offs. You'll know exactly what we recommend and why.
              </p>
              <p>
                <strong>Plan strategically.</strong> We craft tailored strategies grounded in UK tax law, case law, and double tax treaties (where relevant). Our recommendations should actually work in practice, not just on paper.
              </p>
              <p>
                <strong>Support implementation.</strong> We work with your accountant and other advisers to make sure our strategies are implemented correctly.
              </p>
              <p>
                <strong>Stay proactive.</strong> Tax law changes, and so do your circumstances. We monitor changes and your situation, flagging opportunities and risks as they arise.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to explore tax strategies tailored to you?</h2>
            <p className="text-slate-600 text-lg mb-8">
              Book a free 30-minute consultation with Natalie to discuss your situation.
            </p>
            <Button
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white"
              asChild
            >
              <Link href="/contact">Book a free consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
