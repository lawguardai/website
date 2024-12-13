import React from 'react';
import { BookOpen, CheckCircle } from 'lucide-react';

export function CompliancePlaybook() {
  return (
    <section className="bg-white rounded-lg p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <BookOpen className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-800">Custom Compliance Playbook</h2>
      </div>

      <div className="space-y-6">
        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-medium text-gray-800">Data Privacy Compliance</h3>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm">Update privacy policy</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm">Implement cookie consent</span>
            </li>
          </ul>
        </div>

        <div className="border-l-4 border-yellow-500 pl-4">
          <h3 className="font-medium text-gray-800">Tax Compliance</h3>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-yellow-500" />
              <span className="text-sm">Register for VAT in EU countries</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-yellow-500" />
              <span className="text-sm">Set up tax calculation system</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}