import React, { useState } from 'react';
import { FileText, Download } from 'lucide-react';
import type { Document } from '../types/compliance';

export function DocumentGenerator() {
  const [selectedDoc, setSelectedDoc] = useState<string>('');

  const documents: Document[] = [
    {
      id: '1',
      title: 'Privacy Policy',
      type: 'privacy-policy',
      lastUpdated: '2024-02-20',
      status: 'draft'
    },
    {
      id: '2',
      title: 'Terms of Service',
      type: 'terms-of-service',
      lastUpdated: '2024-02-20',
      status: 'published'
    }
  ];

  return (
    <section className="bg-white rounded-lg p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <FileText className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-800">Document Generator</h2>
      </div>

      <div className="space-y-6">
        <div className="grid gap-4">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
              onClick={() => setSelectedDoc(doc.id)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-800">{doc.title}</h3>
                  <p className="text-sm text-gray-600">Last updated: {doc.lastUpdated}</p>
                </div>
                <Download className="w-5 h-5 text-blue-600" />
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                doc.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {doc.status}
              </span>
            </div>
          ))}
        </div>

        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
          Generate New Document
        </button>
      </div>
    </section>
  );
}