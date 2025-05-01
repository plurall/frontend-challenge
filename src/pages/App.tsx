// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Topbar from '../components/Topbar/Topbar';
import Footer from '../components/Footer/Footer';
import Search from './Search/Search';
import SpotifyContextProvider from '../context/Spotify/SpotifyContextProvider';

function App() {
  return (
      <SpotifyContextProvider>
        <Topbar />

        {/* Dynamic routes */}
        <main className="mainApp">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </main>

        <Footer />
      </SpotifyContextProvider>
  );
}

export default App;
