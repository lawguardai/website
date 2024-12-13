import React from 'react';
import { LandingHeader } from '../components/LandingHeader';
import { Footer } from '../components/layout/Footer';
import { Container } from '../components/layout/Container';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQ() {
  const [openQuestion, setOpenQuestion] = React.useState<number | null>(null);

  const faqs = [
    {
      question: 'What is Lawguard AI?',
      answer: 'Lawguard AI is an AI-powered compliance management platform that helps businesses navigate complex regulatory requirements across multiple jurisdictions.'
    },
    {
      question: 'How does the free trial work?',
      answer: 'Our 7-day free trial gives you full access to all features. No credit card is required, and you can cancel anytime.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we use enterprise-grade encryption and security measures to protect your data. Our systems comply with GDPR, HIPAA, and other major regulations.'
    },
    {
      question: 'Can I use Lawguard AI internationally?',
      answer: 'Yes, Lawguard AI supports compliance requirements for over 100 jurisdictions worldwide.'
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We offer 24/7 email support for all customers, with additional phone and priority support for Professional and Enterprise plans.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <LandingHeader />
      
      <main className="flex-grow py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
              Frequently Asked Questions
            </h1>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between"
                    onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                  >
                    <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                    {openQuestion === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {openQuestion === index && (
                    <div className="px-6 py-4 bg-gray-50">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}