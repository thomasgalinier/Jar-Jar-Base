import {
  Clock,
  Droplet,
  Film,
  Globe,
  Heart,
  Info,
  Mountain,
  Orbit,
  RotateCcw,
  Thermometer,
  Users,
  Zap,
} from 'lucide-react';
import { format, formatDiameter, formatPopulation } from '../services/tools.ts';
import { DetailsPhysical } from '../components/detailsPhysical.tsx';
import { useParams } from 'react-router';
import { usePlanetById } from '../services/hooks/usePlanets.ts';
import Header from '../components/header.tsx';
import CardDetails from '../components/cardDetails.tsx';
import DetailsPresence from '../components/detailsPresence.tsx';
import DetailsMetadata from '../components/detailsMetadata.tsx';
import { DetailsEnvironement } from '../components/detailsEnvironement.tsx';

export default function PlanetDetails() {
  const { id } = useParams();
  const { data: planet } = usePlanetById(id);
  return (
    <main className="w-full h-screen bg-[url('./assets/img.png')]">
      <Header />
      <div className="flex flex-col items-center justify-center gap-6 px-4">
        <h1 className="text-amber-500 text-7xl py-4 flex">{planet?.name}</h1>
      <div className="px-4 flex justify-around w-full flex-wrap">
        <div className="flex flex-col gap-4">
          <CardDetails icon={<Heart />} title="Physical Characteristics">
            <div className="flex flex-col gap-4">
              <DetailsPhysical
                icon={<Globe className="text-blue-600" />}
                title="Diameter"
                info={formatDiameter(planet?.diameter || 'unknown')}
              />
              <DetailsPhysical
                icon={<Users className="text-green-600" />}
                title="Population"
                info={formatPopulation(planet?.population || 'unknown')}
              />
              <DetailsPhysical
                icon={<Zap className="text-violet-600" />}
                title="Gravity"
                info={format(planet?.gravity || 'unknown')}
              />
              <DetailsPhysical
                icon={<Droplet className="text-blue-300" />}
                title="Surface water"
                info={`${format(planet?.surface_water || 'unknown')}%`}
              />
            </div>
          </CardDetails>
          <div className="border border-gray-600 p-4 rounded-sm shadow-md p-6 min-w-sm w-full bg-gray-900 justify-between">
            <div className="flex gap-2 text-amber-500 mb-5">
              <Thermometer />
              <h2>Environment</h2>
            </div>
            <div className="flex flex-col gap-4">
              <DetailsEnvironement
                icon={<Thermometer size={15} />}
                title="Climat"
                info={format(planet?.climate || 'unknown')}
              />
              <DetailsEnvironement
                icon={<Mountain size={15} />}
                title="Terrain"
                info={format(planet?.terrain || 'unknown')}
              />
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-4">
          <CardDetails icon={<Clock />} title="Cycles">
            <div className="flex flex-col gap-4">
              <DetailsPhysical
                icon={<RotateCcw className="text-blue-300" />}
                title="Rotation period"
                info={`${format(planet?.rotation_period || 'unknown')} h`}
              />
              <DetailsPhysical
                icon={<Orbit />}
                title="Orbital period"
                info={`${format(planet?.orbital_period || 'unknown')} days`}
              />
            </div>
          </CardDetails>
          <CardDetails icon={<Film />} title="Galactic presence">
            <div className="flex gap-4 items-center justify-center flex-wrap">
              <DetailsPresence
                icon={<Film size={40} className="text-amber-500" />}
                info={planet?.films.length || 0}
                title="Movies"
                color="amber"
              />
              <DetailsPresence
                icon={<Users size={40} className="text-green-500" />}
                info={planet?.residents.length || 0}
                title="Residents"
                color="green"
              />
            </div>
          </CardDetails>
        </div>
        <div className="flex flex-col gap-4">
          <CardDetails icon={<Info />} title="Metadata">
            <div className="flex flex-col gap-4">
              <DetailsMetadata
                icon={<Clock className="text-blue-600" size={17} />}
                title="Create at"
                info={planet?.created || '-'}
              />
              <DetailsMetadata
                icon={<Clock className="text-orange-600" size={17} />}
                title="Modified on"
                info={planet?.edited || '-'}
              />
              <DetailsMetadata
                icon={<Globe className="text-amber-600" size={17} />}
                title="SWAPI reference"
                info={planet?.url || '-'}
              />
            </div>
          </CardDetails>
        </div>
      </div>
      </div>
    </main>
  );
}
