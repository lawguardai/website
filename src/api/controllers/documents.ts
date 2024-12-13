import { sql } from '@vercel/postgres';
import type { Request, Response } from 'express';

export async function getDocumentTemplates(req: Request, res: Response) {
  try {
    const { rows } = await sql`
      SELECT * FROM document_templates
      WHERE status = 'active'
    `;
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch templates' });
  }
}

export async function generateDocument(req: Request, res: Response) {
  try {
    const { templateId, data } = req.body;
    // Document generation logic would go here
    res.json({ message: 'Document generated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate document' });
  }
}