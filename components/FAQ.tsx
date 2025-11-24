import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const allFAQs = [
  {
    question: "What's the difference between a tax adviser and an accountant?",
    answer: "Accountants typically focus on recording historical transactions and preparing tax returns—they're great with numbers and compliance. Tax advisers focus on forward-looking strategy and planning. We identify opportunities to reduce your tax burden legally, structure your affairs efficiently, and plan ahead for life changes. Many clients benefit from both: their accountant handles compliance, and we work alongside them on strategy.",
  },
  {
    question: 'How do I know if I need a tax adviser?',
    answer: "If you're self-employed, own a business, have investment income, family wealth to pass on, or are planning a major life change (retiring, moving abroad, etc.), a tax adviser can save you far more than you spend on fees. If your situation is straightforward, your accountant alone might suffice. That said, a free 30-minute consultation is the perfect way to find out. We'll review your situation and let you know honestly whether our services would benefit you.",
  },
  {
    question: 'Are your fees tax-deductible?',
    answer: "For business owners and the self-employed: yes, professional fees for business tax advice are generally deductible against business income. For individuals: advice relating to your business or investments is deductible, but advice on purely personal matters (like some inheritance tax planning) may not be. This varies case by case, so we can discuss the treatment of your fees when you engage us.",
  },
  {
    question: 'What does the initial consultation include?',
    answer: 'Your free 30-minute consultation is a chance for us to listen. You will outline your situation, goals, and concerns. Natalie will ask questions to understand your circumstances, explain what tax planning opportunities or risks might apply to you, and give you a sense of how we would approach your situation. There is no obligation, and you will walk away with clearer thinking on your tax position.',
  },
  {
    question: 'Where do you provide services?',
    answer: 'We are based in London and primarily serve clients across England and Wales. We also advise international clients on cross-border planning, residency, and structuring questions. If you are unsure whether your situation falls within our scope, do get in touch. We may be able to help or refer you to a colleague who can.',
  },
  {
    question: 'Do you liaise with my accountant?',
    answer: 'Absolutely. We work best as part of a team. We will collaborate with your existing accountant to ensure our strategies are implemented correctly and that there is no duplication of effort. Many of our clients appreciate having a tax adviser and accountant working together. Each brings valuable expertise.',
  },
  {
    question: 'What if my situation is complex or international?',
    answer: 'This is our bread and butter. Complex personal situations (family structures, multiple properties, cross-border income) and international tax matters (residency planning, permanent establishment, transfer pricing) are areas where tailored advice really shines. The more complex your situation, the more valuable a good strategy becomes.',
  },
  {
    question: 'How do I get started?',
    answer: "The easiest next step is to book a free 30-minute consultation. Simply fill out the contact form on this website or get in touch by email, and Natalie will be in touch to arrange a time that suits you. You can discuss your situation, ask questions, and we will outline next steps if you would like to work together.",
  },
];

interface FAQProps {
  limit?: number;
  showViewAll?: boolean;
}

export function FAQ({ limit, showViewAll = false }: FAQProps) {
  const displayedFAQs = limit ? allFAQs.slice(0, limit) : allFAQs;

  return (
    <div className="w-full">
      <Accordion type="single" collapsible className="w-full">
        {displayedFAQs.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-slate-200">
            <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-teal-600 py-4">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 pb-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {showViewAll && limit && limit < allFAQs.length && (
        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link href="/faq">View all FAQs</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
