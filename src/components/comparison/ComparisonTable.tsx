import React from 'react';
import { Check, X } from 'lucide-react';

export function ComparisonTable() {
  const competitors = [
    'Lawguard AI',
    'CompliantPro',
    'RegTech360',
    'ComplianceHub',
    'SafeGuard',
    'LegalEase'
  ];

  const features = [
    {
      category: 'Core Features',
      items: [
        {
          name: 'Automated Compliance Checks',
          support: [true, true, true, true, true, false]
        },
        {
          name: 'Real-time Regulatory Updates',
          support: [true, true, false, true, false, true]
        },
        {
          name: 'Multi-jurisdiction Support',
          support: [true, true, true, false, true, false]
        },
        {
          name: 'Custom Compliance Playbooks',
          support: [true, false, false, false, true, false]
        }
      ]
    },
    {
      category: 'Document Management',
      items: [
        {
          name: 'AI-Powered Document Generation',
          support: [true, false, true, false, false, false]
        },
        {
          name: 'Template Library',
          support: [true, true, true, true, true, true]
        },
        {
          name: 'Version Control',
          support: [true, true, false, true, false, true]
        }
      ]
    },
    {
      category: 'Integration & API',
      items: [
        {
          name: 'Stripe Integration',
          support: [true, false, false, true, false, false]
        },
        {
          name: 'REST API Access',
          support: [true, true, true, false, true, false]
        },
        {
          name: 'Webhook Support',
          support: [true, false, true, false, false, false]
        }
      ]
    }
  ];

  return (
    <section className="px-6 mb-20">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-4 px-6 text-left text-gray-600 font-medium">Features</th>
                {competitors.map((competitor, index) => (
                  <th
                    key={competitor}
                    className={`py-4 px-6 text-left font-medium ${
                      index === 0 ? 'text-blue-600' : 'text-gray-600'
                    }`}
                  >
                    {competitor}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((category) => (
                <React.Fragment key={category.category}>
                  <tr className="border-t">
                    <td
                      colSpan={competitors.length + 1}
                      className="py-4 px-6 bg-gray-50 font-semibold text-gray-800"
                    >
                      {category.category}
                    </td>
                  </tr>
                  {category.items.map((feature) => (
                    <tr key={feature.name} className="border-t">
                      <td className="py-4 px-6 text-gray-800">{feature.name}</td>
                      {feature.support.map((supported, index) => (
                        <td
                          key={index}
                          className={`py-4 px-6 ${
                            index === 0 ? 'text-blue-600' : 'text-gray-600'
                          }`}
                        >
                          {supported ? (
                            <Check className="w-5 h-5" />
                          ) : (
                            <X className="w-5 h-5 text-gray-400" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}