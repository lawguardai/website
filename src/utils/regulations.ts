import { regulatoryDatabase } from '../data/regulations';
import type { Regulation } from '../data/regulations';

export function searchRegulations(query: string): Regulation[] {
  const normalizedQuery = query.toLowerCase();
  
  return regulatoryDatabase.regulations.filter(regulation => {
    return (
      regulation.title.toLowerCase().includes(normalizedQuery) ||
      regulation.description.toLowerCase().includes(normalizedQuery) ||
      regulation.keywords.some(keyword => 
        keyword.toLowerCase().includes(normalizedQuery)
      )
    );
  });
}

export function getRegulationsByJurisdiction(jurisdictionCode: string): Regulation[] {
  return regulatoryDatabase.regulations.filter(
    regulation => regulation.jurisdiction === jurisdictionCode
  );
}

export function getRegulationsByType(type: string): Regulation[] {
  return regulatoryDatabase.regulations.filter(
    regulation => regulation.type === type
  );
}

export function getActiveRegulations(): Regulation[] {
  return regulatoryDatabase.regulations.filter(
    regulation => regulation.status === 'active'
  );
}

export function getRelatedRegulations(regulationId: string): Regulation[] {
  const regulation = regulatoryDatabase.regulations.find(
    r => r.id === regulationId
  );
  
  if (!regulation) return [];
  
  return regulatoryDatabase.regulations.filter(r =>
    regulation.relatedRegulations.includes(r.id)
  );
}