import React from 'react';
import { LandingHeader } from '../components/LandingHeader';
import { TrialBanner } from '../components/TrialBanner';
import { ComparisonTable } from '../components/comparison/ComparisonTable';
import { ComparisonHero } from '../components/comparison/ComparisonHero';
import { ComparisonFeatures } from '../components/comparison/ComparisonFeatures';
import { ComparisonTestimonials } from '../components/comparison/ComparisonTestimonials';
import { ComparisonCTA } from '../components/comparison/ComparisonCTA';

export function Compare() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-800">
      <TrialBanner />
      <LandingHeader />
      <main className="py-20">
        <ComparisonHero />
        <ComparisonTable />
        <ComparisonFeatures />
        <ComparisonTestimonials />
        <ComparisonCTA />
      </main>
    </div>
  );
}