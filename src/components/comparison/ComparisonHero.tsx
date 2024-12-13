import React from 'react';
import { Shield } from 'lucide-react';

export function ComparisonHero() {
  return (
    <section className="px-6 mb-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Lawguard AI vs Other Solutions
        </h1>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          See how Lawguard AI stands out as the most comprehensive, user-friendly, and 
          cost-effective compliance management solution in the market
        </p>
        <div className="flex justify-center gap-4">
          <Shield className="w-12 h-12 text-white" />
        </div>
      </div>
    </section>
  );
}