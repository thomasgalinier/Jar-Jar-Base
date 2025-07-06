export const format = (value: string) => {
  if (value === 'unknown') return '-';
  return value;
};
export const formatPopulation = (population: string) => {
  if (population === 'unknown') return '-';
  const num = parseInt(population);
  if (num >= 1000000000) {
    return `${(num / 1000000000).toFixed(1)}B`;
  } else if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return population;
};
export const formatDiameter = (diameter: string) => {
  if (diameter === 'unknown') return '-';
  return `${parseInt(diameter).toLocaleString()} km`;
};
