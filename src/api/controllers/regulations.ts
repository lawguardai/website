import { sql } from '@vercel/postgres';
import { RegulationSchema } from '../../types/compliance.js';
import type { Request, Response } from 'express';

export async function getRegulations(req: Request, res: Response) {
  try {
    const { rows } = await sql`
      SELECT * FROM regulations 
      WHERE status = 'active'
      ORDER BY effective_date DESC
    `;
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch regulations' });
  }
}

export async function getRegulationById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { rows } = await sql`
      SELECT * FROM regulations 
      WHERE id = ${id}
    `;
    
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Regulation not found' });
    }
    
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch regulation' });
  }
}