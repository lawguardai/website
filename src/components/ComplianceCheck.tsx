import React, { useState } from 'react';
import { ClipboardCheck, AlertCircle } from 'lucide-react';
import type { BusinessProfile, ComplianceCheck } from '../types/compliance';

export function ComplianceCheckTool() {
  const [profile, setProfile] = useState<BusinessProfile>({
    locations: [],
    customerBase: [],
    transactionTypes: [],
    dataHandling: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would make an API call to check compliance
  };

  return (
    <section className="bg-white rounded-lg p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <ClipboardCheck className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-800">Compliance Check Tool</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business Locations
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., United States, European Union"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Customer Base Regions
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Global, North America"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Transaction Types
          </label>
          <select className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500">
            <option value="">Select transaction types</option>
            <option value="digital">Digital Goods</option>
            <option value="physical">Physical Goods</option>
            <option value="services">Services</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Check Compliance Status
        </button>
      </form>
    </section>
  );
}