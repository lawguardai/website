-- Regions table
CREATE TABLE regions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  code VARCHAR(50) NOT NULL UNIQUE,
  parent_region_id UUID REFERENCES regions(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Regulation categories table
CREATE TABLE regulation_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Regulations table
CREATE TABLE regulations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  category_id UUID REFERENCES regulation_categories(id),
  region_id UUID REFERENCES regions(id),
  effective_date DATE NOT NULL,
  last_updated TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(50) NOT NULL CHECK (status IN ('active', 'pending', 'archived')),
  requirements TEXT[] NOT NULL DEFAULT '{}',
  penalties TEXT[] NOT NULL DEFAULT '{}',
  compliance_steps TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Compliance requirements table
CREATE TABLE compliance_requirements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  regulation_id UUID REFERENCES regulations(id),
  description TEXT NOT NULL,
  type VARCHAR(50) NOT NULL CHECK (type IN ('documentation', 'process', 'technical', 'reporting')),
  deadline DATE,
  priority VARCHAR(50) NOT NULL CHECK (priority IN ('low', 'medium', 'high', 'critical')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Business profiles table
CREATE TABLE business_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  regions TEXT[] NOT NULL DEFAULT '{}',
  business_type TEXT[] NOT NULL DEFAULT '{}',
  data_types TEXT[] NOT NULL DEFAULT '{}',
  transaction_types TEXT[] NOT NULL DEFAULT '{}',
  annual_revenue DECIMAL,
  employee_count INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes
CREATE INDEX idx_regulations_category ON regulations(category_id);
CREATE INDEX idx_regulations_region ON regulations(region_id);
CREATE INDEX idx_regulations_status ON regulations(status);
CREATE INDEX idx_compliance_requirements_regulation ON compliance_requirements(regulation_id);
CREATE INDEX idx_compliance_requirements_priority ON compliance_requirements(priority);