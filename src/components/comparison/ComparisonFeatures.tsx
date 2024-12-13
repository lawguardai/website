import React from 'react';
import { Shield, Zap, Globe, Lock } from 'lucide-react';

export function ComparisonFeatures() {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Comprehensive Protection',
      description:
        'Our all-in-one platform covers every aspect of compliance, from data privacy to financial regulations.'
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: 'Lightning Fast Updates',
      description:
        'Get real-time updates on regulatory changes affecting your business across all jurisdictions.'
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: 'Global Coverage',
      description:
        'Support for regulations in over 100 countries, making international expansion seamless.'
    },
    {
      icon: <Lock className="w-8 h-8 text-blue-600" />,
      title: 'Enterprise-Grade Security',
      description:
        'Bank-level encryption and security measures to protect your sensitive compliance data.'
    }
  ];

  return (
    <section className="px-6 mb-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Why Companies Choose Lawguard AI
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-lg p-6 shadow-xl hover:transform hover:-translate-y-1 transition-transform"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}