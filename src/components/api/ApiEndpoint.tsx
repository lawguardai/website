import React, { useState } from 'react';
import { Code, Copy, CheckCircle } from 'lucide-react';

interface ApiEndpointProps {
  method: string;
  path: string;
  description: string;
  request?: object;
  response: {
    status: number;
    body: object;
  };
}

export function ApiEndpoint({ method, path, description, request, response }: ApiEndpointProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const methodColors = {
    GET: 'bg-green-400/20 text-green-400',
    POST: 'bg-blue-400/20 text-blue-400',
    PUT: 'bg-yellow-400/20 text-yellow-400',
    DELETE: 'bg-red-400/20 text-red-400'
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-xl p-6 mb-8">
      <div className="flex items-start gap-4 mb-6">
        <Code className="w-6 h-6 text-white flex-shrink-0 mt-1" />
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className={`px-2 py-1 rounded-md text-sm font-medium ${methodColors[method as keyof typeof methodColors]}`}>
              {method}
            </span>
            <code className="text-white font-mono">{path}</code>
          </div>
          <p className="text-blue-100">{description}</p>
        </div>
      </div>

      {request && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-white mb-2">Request Body</h4>
          <div className="relative bg-black/20 rounded-lg p-4">
            <pre className="text-sm overflow-x-auto text-blue-100">
              <code>{JSON.stringify(request, null, 2)}</code>
            </pre>
            <button
              onClick={() => handleCopy(JSON.stringify(request, null, 2))}
              className="absolute top-3 right-3 text-blue-200 hover:text-white"
            >
              {copied ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>
        </div>
      )}

      <div>
        <div className="flex items-center gap-2 mb-2">
          <div className="px-2 py-1 bg-green-400/20 text-green-400 text-sm font-medium rounded-md">
            {response.status} OK
          </div>
        </div>
        <div className="relative bg-black/20 rounded-lg p-4">
          <pre className="text-sm overflow-x-auto text-blue-100">
            <code>{JSON.stringify(response.body, null, 2)}</code>
          </pre>
          <button
            onClick={() => handleCopy(JSON.stringify(response.body, null, 2))}
            className="absolute top-3 right-3 text-blue-200 hover:text-white"
          >
            {copied ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  );
}