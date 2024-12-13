import React from 'react';

export function PreLaunchSocialProof() {
  const stats = [
    { label: 'Waitlist Members', value: '1,000+' },
    { label: 'Beta Users', value: '50+' },
    { label: 'Countries', value: '25+' }
  ];

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-white mb-8">Join Our Growing Community</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
            <div className="text-blue-100">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}