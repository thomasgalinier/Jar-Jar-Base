import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/home.tsx';
import CharacterDetails from './pages/characterDetails.tsx';
import PlanetDetails from './pages/planetDetails.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
        <Route path="/planet/:id" element={<PlanetDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
