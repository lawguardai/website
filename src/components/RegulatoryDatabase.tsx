import React from 'react';
import { Database, Search } from 'lucide-react';

export function RegulatoryDatabase() {
  return (
    <section className="bg-white rounded-lg p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <Database className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-800">Regulatory Database</h2>
      </div>

      <div className="relative mb-6">
        <input
          type="search"
          placeholder="Search regulations..."
          className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
        />
        <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
      </div>

      <div className="space-y-4">
        {['GDPR', 'CCPA', 'PSD2'].map((regulation) => (
          <div key={regulation} className="p-4 border rounded-md hover:bg-gray-50">
            <h3 className="font-medium text-gray-800">{regulation}</h3>
            <p className="text-sm text-gray-600 mt-1">
              Latest updates and compliance requirements for {regulation}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}