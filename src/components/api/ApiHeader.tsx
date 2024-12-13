import React from 'react';
import { Code } from 'lucide-react';

export function ApiHeader() {
  return (
    <div className="text-center mb-16">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Code className="w-12 h-12 text-white" />
      </div>
      <h1 className="text-4xl font-bold text-white mb-4">
        API Documentation
      </h1>
      <p className="text-xl text-blue-100 max-w-2xl mx-auto">
        Integrate Lawguard AI's powerful compliance features directly into your applications
      </p>
    </div>
  );
}