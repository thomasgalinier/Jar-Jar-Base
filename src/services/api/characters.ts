export const searchCharacters = async (search: string, url?: string | null) => {
  const response = await fetch(url ?? `https://swapi.dev/api/people/?search=${encodeURI(search)}`);
  return await response.json();
};
export const searchCharactersById = async (id?: string) => {
  const response = await fetch(`https://swapi.dev/api/people/${id}/`);
  return await response.json();
};
