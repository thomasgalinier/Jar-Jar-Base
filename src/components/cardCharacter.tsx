import type { TCharacter } from '../services/types/characters.ts';
import { Calendar, Ruler, User } from 'lucide-react';
import { useNavigate } from 'react-router';
export default function CardCharacter({ searchResult }: { searchResult: TCharacter }) {
  const navigate = useNavigate();
  const format = (value: string) => {
    if (value === 'unknown') return '-';
    return value;
  };
  return (
    <div
      className="bg-gray-900 text-amber-50 border border-gray-600 p-4 rounded-sm shadow-md p-6 max-w-sm w-full shadow-md  text-sm hover:border-amber-400 cursor-pointer transition:all duration-200 hover:scale-110"
      onClick={() => navigate(`/characters/${searchResult.url.split('/').slice(-2, -1)[0]}`)}
    >
      <div className="flex flex-col gap-2">
        <div className="flex justify-between gap-6">
          <div className="flex flex-row gap-2 items-center">
            <User size={30} />
            <h2 className="text-xl font-bold">{searchResult.name}</h2>
          </div>
          <div
            className={`${searchResult.gender === 'male' ? 'bg-blue-500' : 'bg-pink-500'} px-2 rounded-sm flex items-center text-xs font-bold`}
          >
            {format(searchResult.gender)}
          </div>
        </div>
        <div className="flex flex-wrap justify-between py-4">
          <div className="flex items-center gap-2">
            <Calendar className="text-green-400" size={20} />
            <p>Born in {format(searchResult.birth_year)}</p>
          </div>
          <div className="flex gap-2 items-center">
            <Ruler size={20} className="text-amber-400" />
            <p> {format(searchResult.height)} cm</p>
          </div>
        </div>
        <p>Eyes: {format(searchResult.eye_color)}</p>
        <p>Hair: {format(searchResult.hair_color)}</p>
        <p>Skin: {format(searchResult.skin_color)}</p>
        <hr className="border border-gray-600" />
        <p>appears in {searchResult.films.length} movie/s</p>
      </div>
    </div>
  );
}
