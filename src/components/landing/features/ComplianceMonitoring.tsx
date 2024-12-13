import React from 'react';
import { Shield, Bell, CheckCircle } from 'lucide-react';

export function ComplianceMonitoring() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-blue-600 font-semibold">Real-time Monitoring</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Stay Compliant with Automated Monitoring
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Never miss a regulatory update or compliance deadline. Our intelligent system monitors your business operations 24/7 and alerts you to potential compliance issues before they become problems.
            </p>
            <ul className="space-y-4">
              {[
                'Real-time compliance status monitoring',
                'Automated risk assessment',
                'Instant alerts for regulatory changes',
                'Compliance deadline tracking'
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-gray-900">Compliance Alerts</h3>
                <Bell className="w-5 h-5 text-blue-600" />
              </div>
              <div className="space-y-4">
                {[
                  { text: 'GDPR compliance update required', priority: 'high' },
                  { text: 'New data protection regulation in effect', priority: 'medium' },
                  { text: 'Quarterly compliance report due', priority: 'low' }
                ].map((alert, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border ${
                      alert.priority === 'high'
                        ? 'bg-red-50 border-red-100'
                        : alert.priority === 'medium'
                        ? 'bg-yellow-50 border-yellow-100'
                        : 'bg-green-50 border-green-100'
                    }`}
                  >
                    <p className="text-sm text-gray-800">{alert.text}</p>
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