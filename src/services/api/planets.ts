export const searchPlanets = async (search: string) => {
  const response = await fetch(`https://swapi.dev/api/planets/?search=${encodeURI(search)}`);
  return await response.json();
};
