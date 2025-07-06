import { useState } from 'react';
import { useDebounce } from '../services/hooks/useDebounce.ts';
import { useCharacters } from '../services/hooks/useCharacters.ts';
import CardCharacter from '../components/cardCharacter.tsx';
import { usePlanets } from '../services/hooks/usePlanets.ts';
import CardPlanets from '../components/cardPlanets.tsx';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'characters' | 'planets'>('characters');
  const [urlCharacters, setUrlCharacters] = useState<string | null | undefined>(undefined);
  const [urlPlanets, setUrlPlanets] = useState<string | null | undefined>(undefined);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { data: charcters } = useCharacters(debouncedSearchTerm, urlCharacters);
  const { data: planets } = usePlanets(debouncedSearchTerm, urlPlanets);

  const handlePreviousPage = () => {
    if (activeTab === 'characters') {
      setUrlCharacters(charcters?.previous);
    }
    if (activeTab === 'planets') {
      setUrlPlanets(planets?.previous);
    }
  };
  const handleNextPage = () => {
    if (activeTab === 'characters') {
      setUrlCharacters(charcters?.next);
    }
    if (activeTab === 'planets') {
      setUrlPlanets(planets?.next);
    }
  };
  return (
    <main className="w-full h-full flex gap-2 items-center justify-between min-h-screen bg-[url('./assets/img.png')] flex flex-col p-2 ">
      <h1 className="title text-amber-400 text-9xl pb-10">JAR JAR BASE</h1>
      <div className="flex flex-col items-center gap-2">
        <input
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setUrlCharacters(undefined);
            setUrlPlanets(undefined);
          }}
          type="text"
          placeholder="Search for a character or a planet"
          className="min-w-sm bg-white h-8 rounded-sm p-2 border-2 focus:outline-amber-400"
        />
        <div className="bg-gray-900 rounded-sm p-2 flex gap-2 w-fit">
          <button
            onClick={() => setActiveTab('characters')}
            className={`text-gray-300 p-2 rounded-sm hover:text-white cursor-pointer flex gap-2 items-center transition-all duration-300 ${activeTab === 'characters' ? 'bg-amber-500' : ''}`}
          >
            Characters
            {charcters?.count && charcters.count > 0 ? (
              <div className="text-gray-950 bg-white p-1 rounded-sm">{charcters.count}</div>
            ) : null}
          </button>
          <button
            onClick={() => setActiveTab('planets')}
            className={` text-gray-300 p-2 rounded-sm hover:text-white cursor-pointer flex gap-2 items-center transition-all duration-300 ${activeTab === 'planets' ? 'bg-amber-500' : ''}`}
          >
            Planets
            {planets?.count && planets.count > 0 ? (
              <div className="text-gray-950 bg-white p-1 rounded-sm">{planets.count}</div>
            ) : null}
          </button>
        </div>
      </div>
      <div className="flex justify-center w-10/12 items-start  gap-8 pt-6 flex-wrap">
        {activeTab === 'characters' && (
          <>
            {charcters?.results.map((character) => (
              <CardCharacter searchResult={character} />
            ))}
          </>
        )}
        {activeTab === 'planets' && (
          <>
            {planets?.results.map((planet) => (
              <CardPlanets searchResult={planet} />
            ))}
          </>
        )}
      </div>
      <footer className="w-full flex justify-between items-center">
        <button
          onClick={charcters?.previous ? handlePreviousPage : undefined}
          className={`p-4 text-gray-300 bg-gray-900 rounded-sm hover:text-white cursor-pointer  min-w-24 ${!charcters?.previous ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Previous
        </button>
        <button
          onClick={charcters?.next ? handleNextPage : undefined}
          className={`p-4 bg-gray-900 rounded-sm text-gray-300 hover:text-white cursor-pointer min-w-24 ${!charcters?.next ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Next
        </button>
      </footer>
    </main>
  );
}
