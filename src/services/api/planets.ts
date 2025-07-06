export const searchPlanets = async (search: string, url?: string | null) => {
  const response = await fetch(url ?? `https://swapi.dev/api/planets/?search=${encodeURI(search)}`);
  return await response.json();
};
export const searchPlanetsById = async (id?: string) => {
  const response = await fetch(`https://swapi.dev/api/planets/${id}/`);
  return await response.json();
};
