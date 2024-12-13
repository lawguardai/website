import React from 'react';
import { Database, Search, Globe } from 'lucide-react';

export function RegulatoryDatabase() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Database className="w-8 h-8" />
              <span className="font-semibold">Global Coverage</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Comprehensive Regulatory Database
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Access up-to-date regulations from over 100 jurisdictions worldwide. Our database is continuously updated to ensure you have the latest regulatory information at your fingertips.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: 'Jurisdictions', value: '100+' },
                { title: 'Regulations', value: '1000+' },
                { title: 'Daily Updates', value: '50+' },
                { title: 'Success Rate', value: '99.9%' }
              ].map((stat) => (
                <div key={stat.title} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="text-blue-200">{stat.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="relative mb-6">
                <Search className="w-5 h-5 absolute left-3 top-3 text-blue-200" />
                <input
                  type="search"
                  placeholder="Search regulations..."
                  className="w-full bg-white/5 border border-white/20 rounded-lg pl-10 pr-4 py-2 text-white placeholder-blue-200"
                />
              </div>
              <div className="space-y-4">
                {[
                  { name: 'GDPR', region: 'European Union', icon: <Globe className="w-5 h-5" /> },
                  { name: 'CCPA', region: 'United States', icon: <Globe className="w-5 h-5" /> },
                  { name: 'PIPEDA', region: 'Canada', icon: <Globe className="w-5 h-5" /> }
                ].map((regulation) => (
                  <div key={regulation.name} className="flex items-center gap-4 p-4 rounded-lg border border-white/20 hover:bg-white/5">
                    {regulation.icon}
                    <div>
                      <h4 className="font-medium">{regulation.name}</h4>
                      <p className="text-sm text-blue-200">{regulation.region}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}