import { useMemo } from 'react';
import { getSeasonTheme } from '../utils/seasons';

export const useSeasonTheme = () => {
  return useMemo(() => getSeasonTheme(), []);
};