import { sql } from '@vercel/postgres';
import { readFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function runMigrations() {
  try {
    const initialSchema = readFileSync(join(__dirname, '001_initial_schema.sql'), 'utf8');
    const seedData = readFileSync(join(__dirname, '002_seed_data.sql'), 'utf8');

    console.log('Running initial schema migration...');
    await sql.query(initialSchema);
    
    console.log('Running seed data migration...');
    await sql.query(seedData);

    console.log('Migrations completed successfully');
  } catch (error) {
    console.error('Error running migrations:', error);
    process.exit(1);
  }
}

runMigrations();