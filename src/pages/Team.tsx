import React from 'react';
import { motion } from 'framer-motion';
import SoldierCard from '../components/SoldierCard';
import { asset } from '../utils/asset';
import {
  mortarman,
  radioman,
  teamRecruits,
  teamSquad1,
  teamSquad2,
} from '../data/teamRoster';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold font-stencil text-white uppercase tracking-widest mb-3">{children}</h2>
    <div className="w-16 h-1 bg-grom-olive mx-auto" />
  </div>
);

const SubTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-xl font-bold text-grom-olive-light border-b border-stone-800 pb-2 max-w-4xl mx-auto mb-6 text-center">
    {children}
  </h3>
);

const cardGridClass =
  'flex flex-wrap justify-center gap-6 max-w-6xl mx-auto';

const Team = () => {
  return (
    <div className="bg-grom-bg pb-20">
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70 animate-kenburns"
          style={{ backgroundImage: `url(${asset('/team-forest.jpg')})` }}
        />

        <div className="relative z-20 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold font-stencil tracking-wider text-white mb-4 drop-shadow-2xl"
          >
            ЛИЧНЫЙ СОСТАВ КОМАНДЫ «ГРОМ»
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-24 h-1 bg-grom-olive mx-auto"
          />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <section className="space-y-14">
          <SectionTitle>Основной состав</SectionTitle>

          <div>
            <SubTitle>1-е отделение</SubTitle>
            <div className={cardGridClass}>
              {teamSquad1.map((soldier, sIdx) => (
                <div key={`s1-${soldier.callsign}-${sIdx}`} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33%-12px)] max-w-xs">
                  <SoldierCard {...soldier} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <SubTitle>2-е отделение</SubTitle>
            <div className={cardGridClass}>
              {teamSquad2.map((soldier, sIdx) => (
                <div key={`s2-${soldier.callsign}-${sIdx}`} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33%-12px)] max-w-xs">
                  <SoldierCard {...soldier} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <SubTitle>Связист и миномётчик</SubTitle>
            <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
              <div className="w-full sm:w-[calc(50%-12px)] max-w-xs">
                <SoldierCard {...radioman} duty="Связист" />
              </div>
              <div className="w-full sm:w-[calc(50%-12px)] max-w-xs">
                <SoldierCard {...mortarman} duty="Миномётчик" />
              </div>
            </div>
          </div>

          <div>
            <SubTitle>Новобранцы</SubTitle>
            <div className={cardGridClass}>
              {teamRecruits.map((soldier, sIdx) => (
                <div key={`r-${soldier.callsign}-${sIdx}`} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33%-12px)] max-w-xs">
                  <SoldierCard {...soldier} duty="Новобранец" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
