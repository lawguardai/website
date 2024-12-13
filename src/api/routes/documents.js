import express from 'express';
import { generateDocument, getDocumentTemplates } from '../controllers/documents.js';

export const documentsRouter = express.Router();

documentsRouter.get('/templates', getDocumentTemplates);
documentsRouter.post('/generate', generateDocument);