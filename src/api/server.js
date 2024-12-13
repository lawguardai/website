import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { regulationsRouter } from './routes/regulations.js';
import { complianceRouter } from './routes/compliance.js';
import { documentsRouter } from './routes/documents.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Security middleware
app.use(helmet());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Load Swagger document
const swaggerDocument = YAML.load(join(__dirname, 'swagger.yaml'));

// API routes
app.use('/api/regulations', regulationsRouter);
app.use('/api/compliance', complianceRouter);
app.use('/api/documents', documentsRouter);

// API documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

app.listen(port, () => {
  console.log(`API server running on port ${port}`);
  console.log(`API documentation available at http://localhost:${port}/api-docs`);
});