// src/App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import Layout      from './components/Layout';
import Home        from './pages/Home';
import AnimeList   from './pages/AnimeList';
import AnimeDetail from './pages/AnimeDetail';
import AboutAPI    from './pages/AboutAPI';
import AboutTeam   from './pages/AboutTeam';

function App() {
  return (
    <Router>
      <Routes>
        {/* Todas las rutas con el mismo layout */}
        <Route path="/" element={<Layout />}>
          
          {/* "/" renderiza Home */}
          <Route index element={<Home />} />

          {/* "/animes" tu buscador/lista */}
          <Route path="animes" element={<AnimeList />} />
          
          {/* detalle de cada anime */}
          <Route path="anime/:id" element={<AnimeDetail />} />
          
          {/* otras páginas */}
          <Route path="api-info" element={<AboutAPI />} />
          <Route path="equipo" element={<AboutTeam />} />

          {/* cualquier ruta inválida vuelve a "/" */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;