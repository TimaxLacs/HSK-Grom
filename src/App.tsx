import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Team from './pages/Team';
import Recruiting from './pages/Recruiting';
import Gallery from './pages/Gallery';
import Charter from './pages/Charter';
import Training from './pages/Training';
import Articles from './pages/Articles';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="team" element={<Team />} />
        <Route path="join" element={<Recruiting />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="charter" element={<Charter />} />
        <Route path="training" element={<Training />} />
        <Route path="articles" element={<Articles />} />
      </Route>
    </Routes>
  );
}

export default App;
