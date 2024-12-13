import express from 'express';
import { getRegulations, getRegulationById } from '../controllers/regulations.js';

export const regulationsRouter = express.Router();

regulationsRouter.get('/', getRegulations);
regulationsRouter.get('/:id', getRegulationById);