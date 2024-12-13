import { regions } from './regions';
import { regulationTypes } from './types';
import { euPrivacyRegulations } from './data-privacy/eu';
import { usPrivacyRegulations } from './data-privacy/us';
import { apacPrivacyRegulations } from './data-privacy/apac';
import type { Region, RegulationType, Regulation } from './types';

export const regulatoryDatabase = {
  regions,
  types: regulationTypes,
  regulations: [
    ...euPrivacyRegulations,
    ...usPrivacyRegulations,
    ...apacPrivacyRegulations
  ]
};

export type { Region, RegulationType, Regulation };
export * from './types';