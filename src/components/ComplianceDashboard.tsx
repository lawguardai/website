import React from 'react';
import { PieChart, Bell, Clock } from 'lucide-react';

export function ComplianceDashboard() {
  const alerts = [
    { id: 1, message: 'New GDPR update requires action', severity: 'high' },
    { id: 2, message: 'Tax filing deadline approaching', severity: 'medium' }
  ];

  const complianceStatus = {
    gdpr: 85,
    ccpa: 90,
    psd2: 75
  };

  return (
    <section className="bg-white rounded-lg p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <PieChart className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-800">Compliance Dashboard</h2>
      </div>

      <div className="grid gap-6">
        <div className="border rounded-lg p-4">
          <h3 className="font-medium text-gray-800 mb-4">Compliance Status</h3>
          <div className="space-y-4">
            {Object.entries(complianceStatus).map(([key, value]) => (
              <div key={key} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{key.toUpperCase()}</span>
                  <span className="font-medium">{value}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-blue-600 rounded-full"
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border rounded-lg p-4">
          <div className="flex items-center gap-2 mb-4">
            <Bell className="w-5 h-5 text-blue-600" />
            <h3 className="font-medium text-gray-800">Recent Alerts</h3>
          </div>
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={`p-3 rounded-lg ${
                  alert.severity === 'high' ? 'bg-red-50' : 'bg-yellow-50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-600" />
                  <p className="text-sm text-gray-800">{alert.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}