import React from 'react';
import { LandingHeader } from '../components/LandingHeader';
import { TrialBanner } from '../components/TrialBanner';
import { ApiHeader } from '../components/api/ApiHeader';
import { ApiAuthentication } from '../components/api/ApiAuthentication';
import { ApiEndpoint } from '../components/api/ApiEndpoint';
import { apiEndpoints } from '../data/api-endpoints';

export function ApiDocs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-800">
      <TrialBanner />
      <LandingHeader />
      
      <main className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <ApiHeader />
          <ApiAuthentication />
          
          <div className="space-y-8">
            {apiEndpoints.map((endpoint) => (
              <ApiEndpoint
                key={`${endpoint.method}-${endpoint.path}`}
                {...endpoint}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}