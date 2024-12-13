import React from 'react';
import { LandingHeader } from '../components/LandingHeader';
import { TrialBanner } from '../components/TrialBanner';
import { Shield, Check } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 99,
      billing: 'monthly',
      features: [
        'Basic compliance checks',
        'Document templates',
        'Email support',
        'Regular updates'
      ]
    },
    {
      name: 'Professional',
      price: 299,
      billing: 'monthly',
      features: [
        'Advanced compliance monitoring',
        'Custom document generation',
        'Priority support',
        'Compliance alerts',
        'API access',
        'Team collaboration'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      billing: 'annual',
      features: [
        'Full compliance suite',
        'Dedicated support team',
        'Custom integration',
        'Advanced analytics',
        'Multi-region support',
        'Compliance training'
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
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-blue-100">
              Choose the plan that best fits your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div key={plan.name} className="bg-white rounded-lg shadow-xl p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h2>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                  </div>
                  <p className="text-gray-600">per {plan.billing}</p>
                  <p className="text-sm text-blue-600 mt-2">Includes 7-day free trial</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Start Free Trial
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}