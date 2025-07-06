import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { searchPlanets, searchPlanetsById } from '../api/planets.ts';
import type { IResponse } from '../types';
import type { TPlanet } from '../types/planets.ts';

export const usePlanets = (
  searchTerm: string,
  url?: string | null
): UseQueryResult<IResponse<TPlanet>, Error> => {
  return useQuery({
    queryKey: ['planets', searchTerm, url],
    queryFn: () => searchPlanets(searchTerm, url),
  });
};
export const usePlanetById = (id?: string): UseQueryResult<TPlanet, Error> => {
  return useQuery({
    queryKey: ['planet', id],
    queryFn: () => searchPlanetsById(id),
  });
};
