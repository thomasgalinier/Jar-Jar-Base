import type { TPlanet } from '../services/types/planets.ts';
import { Globe, Mountain, Users } from 'lucide-react';
import { format, formatDiameter, formatPopulation } from '../services/tools.ts';
import { useNavigate } from 'react-router';

export default function CardPlanets({ searchResult }: { searchResult: TPlanet }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-gray-900 text-amber-50 border border-gray-600 p-4 rounded-sm shadow-md p-6 max-w-sm w-full shadow-md  text-sm hover:border-amber-400 cursor-pointer transition:all duration-200 hover:scale-110"
      onClick={() => navigate(`/planet/${searchResult.url.split('/').slice(-2, -1)[0]}`)}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Globe size={30} />
          <h2 className="text-xl font-bold">{searchResult.name}</h2>
        </div>
        <div className="py-4 flex flex-row justify-between gap-2">
          <div className="flex gap-2">
            <Mountain size={20} />
            <p>{format(searchResult.terrain)}</p>
          </div>
          <div className="flex items-center gap-2">
            <Users className="text-cyan-400" size={20} />
            <p>{formatPopulation(searchResult.population)}</p>
          </div>
        </div>
        <p>diameter: {formatDiameter(searchResult.diameter)}</p>
        <p>climate: {format(searchResult.climate)}</p>
        <p>rotation period: {format(searchResult.rotation_period)} h</p>
        <hr className="border border-gray-600" />
        <p>appears in {searchResult.films.length} movie/s</p>
      </div>
    </div>
  );
}
