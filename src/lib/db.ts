import { sql } from '@vercel/postgres';
import { z } from 'zod';
import {
  RegulationSchema,
  ComplianceRequirementSchema,
  BusinessProfileSchema,
  type Regulation,
  type ComplianceRequirement,
  type BusinessProfile
} from '../db/schema';

export async function getRegulationsForBusiness(profile: BusinessProfile): Promise<Regulation[]> {
  const { rows } = await sql`
    SELECT DISTINCT r.*
    FROM regulations r
    JOIN regions reg ON r.region_id = reg.id
    WHERE reg.code = ANY(${profile.regions})
    AND r.status = 'active'
    ORDER BY r.effective_date DESC
  `;

  return z.array(RegulationSchema).parse(rows);
}

export async function getComplianceRequirements(regulationId: string): Promise<ComplianceRequirement[]> {
  const { rows } = await sql`
    SELECT *
    FROM compliance_requirements
    WHERE regulation_id = ${regulationId}
    ORDER BY priority DESC, deadline ASC NULLS LAST
  `;

  return z.array(ComplianceRequirementSchema).parse(rows);
}

export async function checkCompliance(profile: BusinessProfile): Promise<{
  status: 'compliant' | 'attention' | 'critical';
  requirements: ComplianceRequirement[];
}> {
  const regulations = await getRegulationsForBusiness(profile);
  const allRequirements: ComplianceRequirement[] = [];

  for (const regulation of regulations) {
    const requirements = await getComplianceRequirements(regulation.id);
    allRequirements.push(...requirements);
  }

  // Determine overall compliance status based on highest priority requirement
  const criticalRequirements = allRequirements.filter(req => req.priority === 'critical');
  const highRequirements = allRequirements.filter(req => req.priority === 'high');

  const status = criticalRequirements.length > 0 ? 'critical' :
                 highRequirements.length > 0 ? 'attention' :
                 'compliant';

  return {
    status,
    requirements: allRequirements
  };
}

export async function saveBusinessProfile(profile: BusinessProfile): Promise<BusinessProfile> {
  const { rows } = await sql`
    INSERT INTO business_profiles (
      name,
      regions,
      business_type,
      data_types,
      transaction_types,
      annual_revenue,
      employee_count
    ) VALUES (
      ${profile.name},
      ${profile.regions},
      ${profile.businessType},
      ${profile.dataTypes},
      ${profile.transactionTypes},
      ${profile.annualRevenue},
      ${profile.employeeCount}
    )
    RETURNING *
  `;

  return BusinessProfileSchema.parse(rows[0]);
}