import React from 'react';
import { FileText, CheckCircle, ArrowRight } from 'lucide-react';

export function DocumentManagement() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="space-y-6">
                {[
                  { name: 'Privacy Policy', status: 'Updated', date: '2024-02-20' },
                  { name: 'Terms of Service', status: 'Review Required', date: '2024-02-15' },
                  { name: 'Data Processing Agreement', status: 'Current', date: '2024-02-10' }
                ].map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div>
                      <h4 className="font-medium text-gray-900">{doc.name}</h4>
                      <p className="text-sm text-gray-500">Last modified: {doc.date}</p>
                    </div>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      doc.status === 'Updated' ? 'bg-green-100 text-green-800' :
                      doc.status === 'Review Required' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {doc.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-6">
              <FileText className="w-8 h-8 text-blue-600" />
              <span className="text-blue-600 font-semibold">Smart Documents</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Intelligent Document Management
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Generate, manage, and update all your compliance documents automatically. Our AI-powered system ensures your documentation stays current with the latest regulatory requirements.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'AI-powered document generation',
                'Automatic updates based on regulations',
                'Version control and audit trail',
                'Multi-language support'
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
              Learn more about document management
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}