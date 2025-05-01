// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Topbar from '../components/Topbar/Topbar';
import Footer from '../components/Footer/Footer';

function App() {
  return (
      <>
      <Topbar />

      {/* Dynamic routes */}
      <main className="mainApp">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      <Footer />
      </>
  );
}

export default App;
