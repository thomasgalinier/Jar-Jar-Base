import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { searchCharacters } from '../api/characters.ts';
import type { TCharacter } from '../types/characters.ts';
import type { IResponse } from '../types';

export function useCharacters(searchTerm: string, url?: string | null) {
  const searchCharcters: UseQueryResult<IResponse<TCharacter>, Error> = useQuery({
    queryKey: ['characters', searchTerm, url],
    queryFn: () => searchCharacters(searchTerm, url),
  });
  return { searchCharcters };
}
