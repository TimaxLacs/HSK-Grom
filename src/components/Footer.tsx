import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-grom-bg border-t border-stone-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-stencil tracking-wider text-white">
              ЧСК ГРОМ
            </h2>
            <p className="text-stone-400 text-sm max-w-xs">
              Страйкбольная команда. Дисциплина, братство, тактика. Присоединяйся к лучшим.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-400 hover:text-grom-olive-light transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-stone-400 hover:text-grom-olive-light transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-stone-400 hover:text-grom-olive-light transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-bold uppercase tracking-wider text-sm">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/team" className="text-stone-400 hover:text-grom-olive-light text-sm transition-colors">Команда</Link></li>
              <li><Link to="/join" className="text-stone-400 hover:text-grom-olive-light text-sm transition-colors">Рекрутинг</Link></li>
              <li><Link to="/gallery" className="text-stone-400 hover:text-grom-olive-light text-sm transition-colors">Галерея</Link></li>
              <li><Link to="/charter" className="text-stone-400 hover:text-grom-olive-light text-sm transition-colors">Устав</Link></li>
            </ul>
          </div>

          {/* Contacts & QR */}
          <div className="space-y-4">
            <h3 className="text-white font-bold uppercase tracking-wider text-sm">Контакты</h3>
            <div className="flex flex-col space-y-2 text-sm text-stone-400">
              <span className="flex items-center space-x-2">
                <Mail size={16} className="text-grom-olive-light" />
                <span>contact@hsk-grom.ru</span>
              </span>
              <span className="flex items-center space-x-2">
                <Phone size={16} className="text-grom-olive-light" />
                <span>+7 (999) 123-45-67</span>
              </span>
              <span className="flex items-center space-x-2">
                <MapPin size={16} className="text-grom-olive-light" />
                <span>г. Санкт-Петербург</span>
              </span>
            </div>
            {/* QR Code Placeholder */}
            <div className="mt-4 p-2 bg-white rounded-lg w-24 h-24 flex items-center justify-center">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" alt="QR Code" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} ЧСК Гром. Все права защищены.</p>
          <p>Designed by AI & Cursor</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
