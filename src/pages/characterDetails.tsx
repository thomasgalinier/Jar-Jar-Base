import { useParams } from 'react-router';
import { useCharacterById } from '../services/hooks/useCharacters.ts';
import {
  Calendar,
  Car,
  Clock,
  Dna,
  Eye,
  Film,
  Globe,
  Heart,
  Info,
  Palette,
  Rocket,
  Ruler,
  Weight,
} from 'lucide-react';
import Header from '../components/header.tsx';
import { format } from '../services/tools.ts';
import { DetailsPhysical } from '../components/detailsPhysical.tsx';
import CardDetails from '../components/cardDetails.tsx';
import DetailsMetadata from '../components/detailsMetadata.tsx';
import DetailsPresence from '../components/detailsPresence.tsx';
import { DetailsEnvironement } from '../components/detailsEnvironement.tsx';

export default function CharacterDetails() {
  const { id } = useParams();

  const { data: character } = useCharacterById(id);
  if (!id) {
    return <div className="text-red-500">Character ID is missing.</div>;
  }

  return (
    <main className="w-full h-screen bg-[url('./assets/img.png')]">
      <Header />
      <div className="px-4">
        <div className="flex items-center justify-center gap-6">
          <h1 className="text-amber-500 text-7xl py-4 flex">{character?.name}</h1>
          <div
            className={`${character?.gender === 'male' ? 'bg-blue-400' : character?.gender === 'female' ? 'bg-pink-400' : 'bg-gray-500'} text-amber-50 px-4 rounded-sm text-xl`}
          >
            {character?.gender}
          </div>
        </div>
        <div className="flex justify-around flex-wrap ">
          <div className="flex flex-col gap-4 w-1/4">
            <CardDetails icon={<Heart />} title="Physical Characteristics">
              <div className="flex flex-col gap-4">
                <DetailsPhysical
                  icon={<Ruler className="text-blue-600" />}
                  title="size"
                  info={`${format(character?.height || 'unknown')} cm`}
                />
                <DetailsPhysical
                  icon={<Weight className="text-pink-600" />}
                  title="weight"
                  info={`${format(character?.mass || 'unknown')} kg`}
                />
                <DetailsPhysical
                  icon={<Calendar className="text-green-600" />}
                  title={'Born in'}
                  info={format(character?.birth_year || 'unknown')}
                />
              </div>
            </CardDetails>
            <CardDetails icon={<Palette />} title="Appearance">
              <div className="flex flex-col gap-2">
                <DetailsEnvironement
                  icon={<Palette size={15} />}
                  info={format(character?.hair_color || 'unknown')}
                  title="Hair color"
                />
                <DetailsEnvironement
                  icon={<Eye size={15} />}
                  info={format(character?.eye_color || 'unknown')}
                  title="Eye color"
                />
                <DetailsEnvironement
                  icon={<Palette size={15} />}
                  info={format(character?.skin_color || 'unknown')}
                  title="Skin color"
                />
              </div>
            </CardDetails>
          </div>
          <div className="flex w-1/4">
            <CardDetails icon={<Film />} title="Galactic presence">
              <div className="flex gap-4 flex-wrap">
                <DetailsPresence
                  icon={<Film size={40} className="text-amber-500" />}
                  info={character?.films.length || 0}
                  title="Movies"
                  color="amber"
                />
                <DetailsPresence
                  icon={<Dna size={40} className="text-blue-500" />}
                  info={character?.species.length || 0}
                  title="Species"
                  color="blue"
                />
                <DetailsPresence
                  icon={<Car size={40} className={`text-green-500`} />}
                  info={character?.vehicles.length || 0}
                  title="Vehicles"
                  color="green"
                />
                <DetailsPresence
                  icon={<Rocket size={40} className={`text-violet-500`} />}
                  info={character?.starships.length || 0}
                  title="Starships"
                  color="violet"
                />
              </div>
            </CardDetails>
          </div>
          <div className=" w-1/4">
            <CardDetails icon={<Info />} title="Metadata">
              <div className="flex gap-4 flex-col">
                <DetailsMetadata
                  icon={<Clock className="text-blue-600" size={17} />}
                  title="Create at"
                  info={character?.created || '-'}
                />
                <DetailsMetadata
                  icon={<Clock className="text-orange-600" size={17} />}
                  title="Modified on"
                  info={character?.edited || '-'}
                />
                <DetailsMetadata
                  icon={<Globe className="text-amber-600" size={17} />}
                  title="SWAPI reference"
                  info={character?.url || '-'}
                />
              </div>
            </CardDetails>
          </div>
        </div>
      </div>
    </main>
  );
}
