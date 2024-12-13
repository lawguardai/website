import React from 'react';
import { Shield, Zap, Globe } from 'lucide-react';

export function PreLaunchFeatures() {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'AI-Powered Compliance',
      description: 'Automated compliance monitoring and real-time updates across jurisdictions'
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: 'Smart Document Generation',
      description: 'Generate compliant legal documents in minutes with AI assistance'
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: 'Global Coverage',
      description: 'Stay compliant across 100+ jurisdictions with automatic updates'
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 mb-20">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-4">
            {feature.icon}
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            {feature.title}
          </h3>
          <p className="text-blue-100">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}