import type { Regulation } from '../types';

export const usPrivacyRegulations: Regulation[] = [
  {
    id: 'ccpa',
    title: 'California Consumer Privacy Act (CCPA)',
    description: 'Comprehensive consumer privacy law for California residents',
    type: 'data_privacy',
    jurisdiction: 'us',
    effectiveDate: '2020-01-01',
    lastUpdated: '2024-01-15',
    status: 'active',
    requirements: [
      'Notice at collection',
      'Right to know',
      'Right to delete',
      'Right to opt-out of sale',
      'Right to non-discrimination',
      'Privacy policy requirements',
      'Data inventory and mapping'
    ],
    penalties: [
      '$7,500 per intentional violation',
      '$2,500 per unintentional violation',
      'Private right of action for data breaches'
    ],
    relatedRegulations: ['cpra', 'gdpr'],
    categories: ['privacy', 'consumer_rights'],
    keywords: ['privacy', 'California', 'CCPA', 'consumer rights']
  },
  {
    id: 'cpra',
    title: 'California Privacy Rights Act (CPRA)',
    description: 'Expansion of CCPA with additional privacy protections',
    type: 'data_privacy',
    jurisdiction: 'us',
    effectiveDate: '2023-01-01',
    lastUpdated: '2024-01-15',
    status: 'active',
    requirements: [
      'Right to correct',
      'Right to limit use of sensitive data',
      'Automated decision-making rights',
      'Enhanced notice requirements',
      'Data minimization',
      'Storage limitation',
      'Annual cybersecurity audits'
    ],
    penalties: [
      'Up to $7,500 per intentional violation',
      'Up to $2,500 per unintentional violation',
      'Triple damages for violations involving minors'
    ],
    relatedRegulations: ['ccpa', 'gdpr'],
    categories: ['privacy', 'consumer_rights'],
    keywords: ['privacy', 'California', 'CPRA', 'consumer rights']
  }
];