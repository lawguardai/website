import React from 'react';
import { LandingHeader } from '../components/LandingHeader';
import { TrialBanner } from '../components/TrialBanner';
import { Building2, Globe, ShieldCheck, Briefcase } from 'lucide-react';

export function UseCases() {
  const cases = [
    {
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      title: 'Small Business',
      description: 'Perfect for startups and small businesses navigating initial compliance requirements',
      examples: [
        'E-commerce stores starting international sales',
        'Tech startups handling user data',
        'Local businesses expanding online'
      ]
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: 'International Business',
      description: 'Comprehensive solutions for businesses operating across multiple jurisdictions',
      examples: [
        'Multi-national corporations',
        'Global e-commerce platforms',
        'International service providers'
      ]
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: 'Regulated Industries',
      description: 'Specialized compliance solutions for heavily regulated sectors',
      examples: [
        'Financial services',
        'Healthcare providers',
        'Insurance companies'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-800">
      <TrialBanner />
      <LandingHeader />
      
      <main className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">
              Compliance Solutions for Every Business
            </h1>
            <p className="text-xl text-blue-100">
              See how Lawguard AI helps businesses across different sectors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((case_) => (
              <div key={case_.title} className="bg-white rounded-lg shadow-xl p-8">
                <div className="mb-6">{case_.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {case_.title}
                </h2>
                <p className="text-gray-600 mb-6">{case_.description}</p>
                <ul className="space-y-3">
                  {case_.examples.map((example) => (
                    <li key={example} className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}