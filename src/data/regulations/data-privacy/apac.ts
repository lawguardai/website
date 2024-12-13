import type { Regulation } from '../types';

export const apacPrivacyRegulations: Regulation[] = [
  {
    id: 'pdpa_sg',
    title: 'Personal Data Protection Act (Singapore)',
    description: 'Singapore\'s comprehensive data protection law',
    type: 'data_privacy',
    jurisdiction: 'sg',
    effectiveDate: '2012-10-15',
    lastUpdated: '2024-01-15',
    status: 'active',
    requirements: [
      'Consent obligation',
      'Purpose limitation obligation',
      'Notification obligation',
      'Access and correction rights',
      'Accuracy obligation',
      'Protection obligation',
      'Retention limitation obligation',
      'Transfer limitation obligation',
      'Data breach notification'
    ],
    penalties: [
      'Up to SGD 1 million',
      'Financial penalties based on annual turnover'
    ],
    relatedRegulations: ['gdpr', 'apec_cbpr'],
    categories: ['privacy', 'data_protection'],
    keywords: ['privacy', 'Singapore', 'PDPA', 'data protection']
  },
  {
    id: 'pipl',
    title: 'Personal Information Protection Law (China)',
    description: 'China\'s comprehensive data protection law',
    type: 'data_privacy',
    jurisdiction: 'cn',
    effectiveDate: '2021-11-01',
    lastUpdated: '2024-01-15',
    status: 'active',
    requirements: [
      'Legal basis for processing',
      'Data localization requirements',
      'Cross-border transfer restrictions',
      'Individual rights',
      'Security assessments',
      'Data protection impact assessments',
      'Appointment of DPO',
      'Data breach notification'
    ],
    penalties: [
      'Up to CNY 50 million or 5% of annual revenue',
      'Business suspension or termination',
      'Personal liability for executives'
    ],
    relatedRegulations: ['gdpr', 'dsl_cn', 'csl_cn'],
    categories: ['privacy', 'data_protection', 'national_security'],
    keywords: ['privacy', 'China', 'PIPL', 'data protection']
  }
];