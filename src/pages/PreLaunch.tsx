import React from 'react';
import { PreLaunchHero } from '../components/pre-launch/PreLaunchHero';
import { PreLaunchFeatures } from '../components/pre-launch/PreLaunchFeatures';
import { PreLaunchSocialProof } from '../components/pre-launch/PreLaunchSocialProof';
import { PreLaunchProgress } from '../components/pre-launch/PreLaunchProgress';

export function PreLaunch() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-800">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <PreLaunchHero />
        <PreLaunchFeatures />
        <PreLaunchProgress />
        <PreLaunchSocialProof />
      </main>
    </div>
  );
}