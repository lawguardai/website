import type { Regulation } from '../types';

export const euPrivacyRegulations: Regulation[] = [
  {
    id: 'gdpr',
    title: 'General Data Protection Regulation (GDPR)',
    description: 'Comprehensive data protection law for EU residents',
    type: 'data_privacy',
    jurisdiction: 'eu',
    effectiveDate: '2018-05-25',
    lastUpdated: '2024-01-15',
    status: 'active',
    requirements: [
      'Lawful basis for processing',
      'Data minimization',
      'Purpose limitation',
      'Storage limitation',
      'Accuracy',
      'Integrity and confidentiality',
      'Accountability',
      'Data protection by design and default',
      'Records of processing activities',
      'Data protection impact assessments',
      'Data breach notification',
      'Data subject rights',
      'International data transfers'
    ],
    penalties: [
      'Up to €20 million or 4% of global annual revenue',
      'Up to €10 million or 2% of global annual revenue for lesser violations'
    ],
    relatedRegulations: ['eprivacy', 'uk_gdpr'],
    categories: ['privacy', 'data_protection', 'consumer_rights'],
    keywords: ['privacy', 'data protection', 'GDPR', 'EU']
  },
  {
    id: 'eprivacy',
    title: 'ePrivacy Directive',
    description: 'Specific rules on electronic communications and tracking',
    type: 'data_privacy',
    jurisdiction: 'eu',
    effectiveDate: '2002-07-31',
    lastUpdated: '2024-01-15',
    status: 'active',
    requirements: [
      'Cookie consent',
      'Electronic communications privacy',
      'Marketing communications consent'
    ],
    penalties: [
      'Varies by member state',
      'Can include fines and criminal penalties'
    ],
    relatedRegulations: ['gdpr'],
    categories: ['privacy', 'electronic_communications'],
    keywords: ['cookies', 'tracking', 'marketing', 'communications']
  }
];