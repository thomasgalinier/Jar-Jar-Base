import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function Header() {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate('/');
  };
  return (
    <header className="w-full px-4 bg-gray-900 h-1/12 text-gray-300 border-b border-b-gray-600 flex items-center mb-4">
      <button
        className="flex bg-amber-500 p-2 rounded-sm hover:text-white cursor-pointer"
        onClick={handleBackClick}
      >
        <ArrowLeft />
        Back to home
      </button>
    </header>
  );
}
