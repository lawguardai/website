import { checkCompliance as dbCheckCompliance, getComplianceRequirements } from '../../lib/db.js';
import { BusinessProfileSchema } from '../../types/compliance.js';
import type { Request, Response } from 'express';

export async function checkCompliance(req: Request, res: Response) {
  try {
    const profile = BusinessProfileSchema.parse(req.body);
    const result = await dbCheckCompliance(profile);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: 'Invalid request data' });
  }
}

export async function getRequirements(req: Request, res: Response) {
  try {
    const { regulationId } = req.params;
    const requirements = await getComplianceRequirements(regulationId);
    res.json(requirements);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch requirements' });
  }
}