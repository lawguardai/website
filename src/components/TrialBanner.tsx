import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';

export function TrialBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-blue-900 py-3">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-4 text-white">
        <Clock className="w-5 h-5" />
        <p className="text-sm md:text-base">
          Try Lawguard AI free for 7 days. No credit card required.
        </p>
        <Link
          to="/pricing"
          className="inline-flex items-center gap-1 text-sm md:text-base font-semibold hover:text-blue-200 transition-colors"
        >
          Start free trial
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}