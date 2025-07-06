import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { searchCharacters, searchCharactersById } from '../api/characters.ts';
import type { TCharacter } from '../types/characters.ts';
import type { IResponse } from '../types';

export function useCharacters(
  searchTerm: string,
  url?: string | null
): UseQueryResult<IResponse<TCharacter>> {
  return useQuery({
    queryKey: ['characters', searchTerm, url],
    queryFn: () => searchCharacters(searchTerm, url),
  });
}
export function useCharacterById(id?: string): UseQueryResult<TCharacter> {
  return useQuery({
    queryKey: ['character', id],
    queryFn: () => searchCharactersById(id),
  });
}
