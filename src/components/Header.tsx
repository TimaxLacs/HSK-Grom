import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Главная', path: '/' },
    { name: 'Команда', path: '/team' },
    { name: 'Рекрутинг', path: '/join' },
    { name: 'Галерея', path: '/gallery' },
    { name: 'Устав', path: '/charter' },
    { name: 'Методичка', path: '/training' },
    { name: 'Статьи', path: '/articles' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    // Changed bg-zinc-900 to bg-grom-bg for deeper black
    <header className="fixed w-full z-50 bg-grom-bg/90 backdrop-blur-md border-b border-stone-800/50 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            {/* Logo Container with circular mask */}
            <div className="relative w-12 h-12 flex items-center justify-center rounded-full overflow-hidden border-2 border-stone-700 group-hover:border-grom-olive transition-colors shadow-md bg-stone-900">
              <img 
                src={logo} 
                alt="ЧСК Гром Шеврон" 
                className="w-[140%] h-[140%] object-cover"
              />
            </div>
            <span className="text-xl font-bold tracking-wider text-stone-100 uppercase font-stencil group-hover:text-grom-olive-light transition-colors">
              ЧСК Гром
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-grom-olive-light ${
                  isActive(link.path) ? 'text-grom-olive-light' : 'text-stone-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-400 hover:text-white p-2 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-grom-bg border-b border-stone-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    isActive(link.path)
                      ? 'bg-stone-900 text-grom-olive-light'
                      : 'text-stone-300 hover:bg-stone-900 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
