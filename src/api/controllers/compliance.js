import { checkCompliance as dbCheckCompliance } from '../../lib/db';
import { BusinessProfileSchema } from '../../types/compliance';

export async function checkCompliance(req, res) {
  try {
    const profile = BusinessProfileSchema.parse(req.body);
    const result = await dbCheckCompliance(profile);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: 'Invalid request data' });
  }
}

export async function getRequirements(req, res) {
  try {
    const { regulationId } = req.params;
    const requirements = await getComplianceRequirements(regulationId);
    res.json(requirements);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch requirements' });
  }
}