import React from 'react';
import { motion } from 'framer-motion';
import SoldierCard from '../components/SoldierCard';
import { asset } from '../utils/asset';
import {
  mortarman,
  radioman,
  teamRecruitSlots,
  teamSquad1Slots,
  teamSquad2Slots,
} from '../data/teamRoster';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold font-stencil text-white uppercase tracking-widest mb-3">{children}</h2>
    <div className="w-16 h-1 bg-grom-olive mx-auto" />
  </div>
);

const squadPanelTitleClass =
  'text-2xl font-bold font-stencil text-center text-grom-olive-light mb-8 uppercase tracking-[0.2em]';

const squadPanelBoxClass =
  'rounded-xl border border-stone-800/80 bg-stone-900/30 p-6 sm:p-8';

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 space-y-14">
        <section>
          <SectionTitle>Основной состав</SectionTitle>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
            <div className={squadPanelBoxClass}>
              <h3 className={squadPanelTitleClass}>1-е отделение</h3>
              <div className="flex flex-wrap justify-center gap-8">
                {teamSquad1Slots.map(({ member, specialty }) => (
                  <div key={member.callsign} className="w-full max-w-[280px]">
                    <SoldierCard {...member} duty={specialty} />
                  </div>
                ))}
              </div>
            </div>

            <div className={squadPanelBoxClass}>
              <h3 className={squadPanelTitleClass}>2-е отделение</h3>
              <div className="flex flex-wrap justify-center gap-8">
                {teamSquad2Slots.map(({ member, specialty }) => (
                  <div key={member.callsign} className="w-full max-w-[280px]">
                    <SoldierCard {...member} duty={specialty} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
            <div className={squadPanelBoxClass}>
              <h3 className={squadPanelTitleClass}>Связист</h3>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="w-full max-w-[280px]">
                  <SoldierCard {...radioman} duty="Связист" />
                </div>
              </div>
            </div>

            <div className={squadPanelBoxClass}>
              <h3 className={squadPanelTitleClass}>Миномётчик</h3>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="w-full max-w-[280px]">
                  <SoldierCard {...mortarman} duty="Миномётчик" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className={`${squadPanelBoxClass} max-w-6xl mx-auto`}>
            <h3 className={squadPanelTitleClass}>Новобранцы</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {teamRecruitSlots.map(({ member, specialty }) => (
                <div key={member.callsign} className="w-full max-w-[280px]">
                  <SoldierCard {...member} duty={specialty} />
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
