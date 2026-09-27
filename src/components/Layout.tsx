import React, { useLayoutEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Snow from './Snow';
import { motion, AnimatePresence } from 'framer-motion';
import { resolveSeason, seasonAssets, type Season } from '../utils/season';

const Layout = () => {
  const { search } = useLocation();
  const [season, setSeason] = useState<Season>('demi');

  useLayoutEffect(() => {
    const next = resolveSeason(new Date(), search);
    const { background } = seasonAssets(next);
    const root = document.documentElement;
    root.dataset.season = next;
    root.style.setProperty('--season-bg', `url("${background}")`);
    setSeason(next);
  }, [search]);

  return (
    <div className="season-shell flex flex-col min-h-screen bg-grom-bg/80 text-white font-sans antialiased overflow-hidden">
      <Header />
      
      <main className="flex-grow pt-20"> {/* pt-20 to offset fixed header */}
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      {season === 'winter' && <Snow />}
    </div>
  );
};

export default Layout;
