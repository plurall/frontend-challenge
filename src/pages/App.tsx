// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Topbar from '@components/Topbar/Topbar';
import Footer from '@components/Footer/Footer';
import Search from './Search/Search';
import SpotifyContextProvider from '@context/Spotify/SpotifyContextProvider';
import Artist from './Artist/Artist';
import NotFound from './NotFound/NotFound';
import LayoutContextProvider from '@/context/Layout/LayoutContextProvider';
import ModalAlert from '@/components/ModalAlert/ModalAlert';

function App() {
  return (
      <SpotifyContextProvider>
        <LayoutContextProvider>

          <ModalAlert />

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

        </LayoutContextProvider>
      </SpotifyContextProvider>
  );
}

export default App;
