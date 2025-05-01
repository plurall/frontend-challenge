// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Topbar from '../components/Topbar/Topbar';
import Footer from '../components/Footer/Footer';
import Search from './Search/Search';
import SpotifyContextProvider from '../context/Spotify/SpotifyContextProvider';
import Artist from './Artist/Artist';
import NotFound from './NotFound/NotFound';

function App() {
  return (
      <SpotifyContextProvider>
        <Topbar />

        {/* Dynamic routes */}
        <main className="mainApp">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/busca" element={<Search />} />
            <Route path="/artista/:id" element={<Artist />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </SpotifyContextProvider>
  );
}

export default App;
