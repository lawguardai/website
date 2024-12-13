import React from 'react';
import { Users, Check } from 'lucide-react';
import type { ConsultationPlan } from '../types/compliance';

export function ConsultationServices() {
  const plans: ConsultationPlan[] = [
    {
      id: 'basic',
      name: 'Basic Q&A',
      price: 99,
      description: 'Essential compliance support for small businesses',
      features: [
        'Email support',
        'Basic compliance checks',
        '24/7 documentation access'
      ]
    },
    {
      id: 'pro',
      name: 'Professional Audit',
      price: 299,
      description: 'Comprehensive compliance solutions for growing businesses',
      features: [
        'Priority email & phone support',
        'Full compliance audit',
        'Custom action plan',
        'Monthly review calls'
      ]
    }
  ];

  const handlePurchase = async (planId: string) => {
    // In a real app, this would integrate with Stripe
    console.log('Processing purchase for plan:', planId);
  };

  return (
    <section className="bg-white rounded-lg p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <Users className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-800">Consultation Services</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {plans.map((plan) => (
          <div key={plan.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800">{plan.name}</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">${plan.price}</p>
            <p className="text-gray-600 mt-2">{plan.description}</p>
            
            <ul className="mt-4 space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handlePurchase(plan.id)}
              className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Purchase Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}