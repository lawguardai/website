import React from 'react';
import { Shield } from 'lucide-react';
import { EmailCaptureForm } from './EmailCaptureForm';

export function PreLaunchHero() {
  return (
    <div className="text-center mb-20">
      <div className="flex justify-center mb-8">
        <Shield className="w-16 h-16 text-white" />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
        The Future of Compliance Management
      </h1>
      <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
        Harness the power of AI to simplify regulatory compliance. 
        Join the waitlist for early access and exclusive benefits.
      </p>
      <EmailCaptureForm />
    </div>
  );
}