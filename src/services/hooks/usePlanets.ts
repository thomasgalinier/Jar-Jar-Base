import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { searchPlanets } from '../api/planets.ts';
import type { IResponse } from '../types';
import type { TPlanet } from '../types/planets.ts';
export const usePlanets = (searchTerm: string) => {
  const getSearchPlanets: UseQueryResult<IResponse<TPlanet>> = useQuery({
    queryKey: ['planets', searchTerm],
    queryFn: () => searchPlanets(searchTerm),
  });
  return { getSearchPlanets };
};
