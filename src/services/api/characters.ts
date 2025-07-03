export const searchCharacters = async (search: string, url?: string | null) => {
  const response = await fetch(url ?? `https://swapi.dev/api/people/?search=${encodeURI(search)}`);
  return await response.json();
};
