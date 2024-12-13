import express from 'express';
import { checkCompliance, getRequirements } from '../controllers/compliance.js';

export const complianceRouter = express.Router();

complianceRouter.post('/check', checkCompliance);
complianceRouter.get('/requirements/:regulationId', getRequirements);