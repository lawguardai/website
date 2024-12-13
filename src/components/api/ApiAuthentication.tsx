import React, { useState } from 'react';
import { Key, Copy, CheckCircle } from 'lucide-react';

export function ApiAuthentication() {
  const [copied, setCopied] = useState(false);
  const apiKey = 'YOUR_API_KEY';

  const handleCopy = () => {
    navigator.clipboard.writeText(`Authorization: Bearer ${apiKey}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-xl p-6 mb-8">
      <div className="flex items-center gap-3 mb-4">
        <Key className="w-6 h-6 text-white" />
        <h2 className="text-xl font-bold text-white">Authentication</h2>
      </div>
      <p className="text-blue-100 mb-4">
        All API requests require authentication using an API key. Include your API key in the request headers:
      </p>
      <div className="bg-white/5 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <code className="text-sm text-blue-100">Authorization: Bearer {apiKey}</code>
          <button
            onClick={handleCopy}
            className="text-blue-100 hover:text-white transition-colors"
            aria-label="Copy to clipboard"
          >
            {copied ? (
              <CheckCircle className="w-5 h-5 text-green-400" />
            ) : (
              <Copy className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}