import { z } from 'zod';

export const RegionSchema = z.object({
  id: z.string(),
  code: z.string(),
  name: z.string(),
  subRegions: z.array(z.string()).optional(),
  parentRegion: z.string().optional(),
});

export const RegulationTypeSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
});

export const RegulationStatusSchema = z.enum([
  'active',
  'pending',
  'superseded',
  'repealed'
]);

export const RegulationSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  type: z.string(),
  jurisdiction: z.string(),
  effectiveDate: z.string(),
  lastUpdated: z.string(),
  status: RegulationStatusSchema,
  requirements: z.array(z.string()),
  penalties: z.array(z.string()),
  relatedRegulations: z.array(z.string()),
  categories: z.array(z.string()),
  keywords: z.array(z.string()),
});

export type Region = z.infer<typeof RegionSchema>;
export type RegulationType = z.infer<typeof RegulationTypeSchema>;
export type RegulationStatus = z.infer<typeof RegulationStatusSchema>;
export type Regulation = z.infer<typeof RegulationSchema>;