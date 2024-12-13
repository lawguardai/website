import { z } from 'zod';

export const RegulationSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  effectiveDate: z.string(),
  status: z.enum(['active', 'pending', 'archived'])
});

export const BusinessProfileSchema = z.object({
  locations: z.array(z.string()),
  customerBase: z.array(z.string()),
  transactionTypes: z.array(z.string()),
  dataHandling: z.array(z.string())
});

export const ComplianceRequirementSchema = z.object({
  id: z.string(),
  description: z.string(),
  priority: z.enum(['low', 'medium', 'high', 'critical']),
  deadline: z.string().optional()
});

export type Regulation = z.infer<typeof RegulationSchema>;
export type BusinessProfile = z.infer<typeof BusinessProfileSchema>;
export type ComplianceRequirement = z.infer<typeof ComplianceRequirementSchema>;

export interface ComplianceCheck {
  status: 'compliant' | 'attention' | 'critical';
  requirements: ComplianceRequirement[];
}

export interface ConsultationPlan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
}

export interface Document {
  id: string;
  title: string;
  type: 'privacy-policy' | 'terms-of-service' | 'refund-policy';
  lastUpdated: string;
  status: 'draft' | 'published';
}