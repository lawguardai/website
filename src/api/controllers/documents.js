import { sql } from '@vercel/postgres';

export async function getDocumentTemplates(req, res) {
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

export async function generateDocument(req, res) {
  try {
    const { templateId, data } = req.body;
    // Document generation logic would go here
    res.json({ message: 'Document generated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate document' });
  }
}