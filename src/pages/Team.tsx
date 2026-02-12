import React from 'react';
import { motion } from 'framer-motion';
import SoldierCard from '../components/SoldierCard';

// Real Team Data
const commander = {
  name: 'Максим Горм',
  callsign: 'Лихо',
  role: 'Командир',
  image: '/avatars/likho.png',
};

const deputy = {
  name: 'Тимур Шакиров',
  callsign: 'Горизонт',
  role: 'Заместитель командира',
  image: '/avatars/gorizont.png',
};

const sergeants = [
  {
    name: 'Денис Горбунов',
    callsign: 'Ганза',
    role: 'Старшина',
    image: '/avatars/ganza.png',
  },
  {
    name: 'Илья Грабовский',
    callsign: 'Афган',
    role: 'Старшина',
    image: '/avatars/afgan.png',
  },
];

const specialists = [
  {
    role: 'Снайпер',
    soldiers: [
      { name: 'Ярослав Цветков', callsign: 'Шершень', role: 'Снайпер', image: '/avatars/shershen.png' },
    ]
  },
  {
    role: 'Пулеметчик',
    soldiers: [
      { name: 'Даниил Баботин', callsign: 'Гоблин', role: 'Пулеметчик', image: '/avatars/goblin.png' },
    ]
  },
  {
    role: 'Связист',
    soldiers: [
      { name: 'Алексей Петухов', callsign: 'Молчун', role: 'Связист', image: '/avatars/molchun.png' },
    ]
  },
  {
    role: 'Медик',
    soldiers: [
      { name: 'Екатерина Федорова', callsign: 'Валка', role: 'Медик', image: '/avatars/valka.png' },
    ]
  }
];

const stormtroopers = [
  { name: 'Денис Боровков', callsign: 'Муравей', role: 'Штурмовик', image: '/avatars/muravey.png' },
  { name: 'Никита Туманов', callsign: 'Туман', role: 'Штурмовик', image: '/avatars/tuman.png' }, // Added Tuman, assuming name based on callsign or just placeholder
  { name: 'Максим Поликов', callsign: 'Польша', role: 'Штурмовик', image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
  { name: 'Алексей Борисов', callsign: '', role: 'Штурмовик', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
];

const Team = () => {
  return (
    <div className="bg-grom-bg pb-20">
      {/* Hero Header */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-[url('/team-forest.jpg')] bg-cover bg-center opacity-70 animate-kenburns" />
        
        <div className="relative z-20 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold font-stencil tracking-wider text-white mb-4 drop-shadow-2xl"
          >
            НАШ СОСТАВ
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-24 h-1 bg-grom-olive mx-auto"
          />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-30 space-y-20">
        
        {/* Level 1: Commander */}
        <section>
          <div className="flex justify-center">
             <div className="w-full max-w-sm transform hover:scale-105 transition-transform duration-300">
               <SoldierCard {...commander} />
             </div>
          </div>
        </section>

        {/* Level 2: Deputy */}
        <section>
          <h2 className="text-2xl font-bold font-stencil text-center text-stone-400 mb-8 uppercase tracking-widest">Заместители</h2>
          <div className="flex justify-center">
             <div className="w-full max-w-sm">
               <SoldierCard {...deputy} />
             </div>
          </div>
        </section>

        {/* Level 3: Sergeants */}
        <section>
          <h2 className="text-2xl font-bold font-stencil text-center text-stone-400 mb-8 uppercase tracking-widest">Старшины</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {sergeants.map((soldier, idx) => (
              <SoldierCard key={idx} {...soldier} />
            ))}
          </div>
        </section>

        {/* Level 4: Specialists */}
        <section>
          <h2 className="text-2xl font-bold font-stencil text-center text-stone-400 mb-12 uppercase tracking-widest">Специалисты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialists.map((group, idx) => (
              <div key={idx} className="space-y-6">
                <h3 className="text-xl font-bold text-grom-olive-light border-b border-stone-800 pb-2 mb-4">{group.role}</h3>
                <div className="grid gap-6">
                  {group.soldiers.map((soldier, sIdx) => (
                    <SoldierCard key={sIdx} {...soldier} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Level 5: Stormtroopers */}
        <section>
          <h2 className="text-2xl font-bold font-stencil text-center text-stone-400 mb-12 uppercase tracking-widest">Штурмовики</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {stormtroopers.map((soldier, idx) => (
              <SoldierCard key={idx} {...soldier} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Team;
