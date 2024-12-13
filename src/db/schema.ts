import { z } from 'zod';

export const RegionSchema = z.object({
  id: z.string(),
  name: z.string(),
  code: z.string(),
  parentRegionId: z.string().nullable(),
});

export const RegulationCategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
});

export const RegulationSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  categoryId: z.string(),
  regionId: z.string(),
  effectiveDate: z.date(),
  lastUpdated: z.date(),
  status: z.enum(['active', 'pending', 'archived']),
  requirements: z.array(z.string()),
  penalties: z.array(z.string()),
  complianceSteps: z.array(z.string()),
});

export const ComplianceRequirementSchema = z.object({
  id: z.string(),
  regulationId: z.string(),
  description: z.string(),
  type: z.enum(['documentation', 'process', 'technical', 'reporting']),
  deadline: z.date().nullable(),
  priority: z.enum(['low', 'medium', 'high', 'critical']),
});

export const BusinessProfileSchema = z.object({
  id: z.string(),
  name: z.string(),
  regions: z.array(z.string()),
  businessType: z.array(z.string()),
  dataTypes: z.array(z.string()),
  transactionTypes: z.array(z.string()),
  annualRevenue: z.number().nullable(),
  employeeCount: z.number().nullable(),
});

export type Region = z.infer<typeof RegionSchema>;
export type RegulationCategory = z.infer<typeof RegulationCategorySchema>;
export type Regulation = z.infer<typeof RegulationSchema>;
export type ComplianceRequirement = z.infer<typeof ComplianceRequirementSchema>;
export type BusinessProfile = z.infer<typeof BusinessProfileSchema>;