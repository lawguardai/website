import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function ComparisonCTA() {
  return (
    <section className="px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Simplify Your Compliance Journey?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Join thousands of businesses that trust Lawguard AI for their regulatory compliance needs.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View Pricing
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
}