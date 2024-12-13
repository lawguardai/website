-- Seed regions
INSERT INTO regions (name, code) VALUES
('European Union', 'EU'),
('United States', 'US'),
('United Kingdom', 'UK'),
('Australia', 'AU'),
('Canada', 'CA');

-- Seed regulation categories
INSERT INTO regulation_categories (name, description) VALUES
('Data Privacy', 'Regulations governing the collection, processing, and storage of personal data'),
('E-commerce', 'Regulations for online business operations and consumer protection'),
('Payment Processing', 'Regulations for handling financial transactions and payment data'),
('Anti-Money Laundering', 'Regulations to prevent money laundering and financial crime'),
('Consumer Protection', 'Regulations protecting consumer rights and interests');

-- Seed regulations
INSERT INTO regulations (
  title,
  description,
  category_id,
  region_id,
  effective_date,
  status,
  requirements,
  penalties,
  compliance_steps
) VALUES
(
  'GDPR',
  'General Data Protection Regulation for processing personal data',
  (SELECT id FROM regulation_categories WHERE name = 'Data Privacy'),
  (SELECT id FROM regions WHERE code = 'EU'),
  '2018-05-25',
  'active',
  ARRAY[
    'Obtain explicit consent for data processing',
    'Implement data protection measures',
    'Appoint Data Protection Officer if required'
  ],
  ARRAY[
    'Up to €20 million or 4% of global revenue',
    'Suspension of data processing activities'
  ],
  ARRAY[
    'Conduct data audit',
    'Update privacy policies',
    'Implement consent mechanisms',
    'Set up data breach procedures'
  ]
),
(
  'CCPA',
  'California Consumer Privacy Act for protecting consumer data rights',
  (SELECT id FROM regulation_categories WHERE name = 'Data Privacy'),
  (SELECT id FROM regions WHERE code = 'US'),
  '2020-01-01',
  'active',
  ARRAY[
    'Provide notice of data collection',
    'Allow opt-out of data sale',
    'Implement data access mechanisms'
  ],
  ARRAY[
    'Up to $7,500 per intentional violation',
    'Up to $2,500 per unintentional violation'
  ],
  ARRAY[
    'Update privacy notices',
    'Implement opt-out mechanisms',
    'Create data inventory',
    'Train staff on compliance'
  ]
);