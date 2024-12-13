import { ApiEndpoint } from '../components/api/types';

export const apiEndpoints: ApiEndpoint[] = [
  {
    method: 'GET',
    path: '/api/regulations',
    description: 'Retrieve a list of all active regulations',
    response: {
      status: 200,
      body: {
        regulations: [
          {
            id: 'gdpr',
            title: 'General Data Protection Regulation',
            description: 'EU data protection law',
            effectiveDate: '2018-05-25',
            status: 'active'
          }
        ]
      }
    }
  },
  {
    method: 'POST',
    path: '/api/compliance/check',
    description: 'Check compliance status for a business profile',
    request: {
      profile: {
        locations: ['US', 'EU'],
        customerBase: ['global'],
        transactionTypes: ['digital'],
        dataHandling: ['personal']
      }
    },
    response: {
      status: 200,
      body: {
        status: 'attention',
        requirements: [
          {
            id: 'gdpr_001',
            description: 'Implement GDPR compliance measures',
            priority: 'high',
            deadline: '2024-03-31'
          }
        ]
      }
    }
  },
  {
    method: 'GET',
    path: '/api/documents/templates',
    description: 'Retrieve available document templates',
    response: {
      status: 200,
      body: {
        templates: [
          {
            id: 'privacy_policy',
            name: 'Privacy Policy',
            version: '1.0',
            lastUpdated: '2024-02-20'
          }
        ]
      }
    }
  },
  {
    method: 'POST',
    path: '/api/documents/generate',
    description: 'Generate a compliance document from a template',
    request: {
      templateId: 'privacy_policy',
      data: {
        companyName: 'Example Corp',
        contactEmail: 'privacy@example.com',
        effectiveDate: '2024-03-01'
      }
    },
    response: {
      status: 200,
      body: {
        documentId: 'doc_123',
        url: 'https://api.lawguard.ai/documents/doc_123',
        status: 'generated'
      }
    }
  }
];