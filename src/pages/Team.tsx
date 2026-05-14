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

const specialtySubClass =
  'text-sm font-semibold uppercase tracking-[0.2em] text-stone-400 mb-4 text-center';

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

          {/* Десктоп: две колонки, строки синхронны по высоте */}
          <div
            className={`hidden md:block ${squadPanelBoxClass} max-w-6xl mx-auto`}
          >
            <div className="grid grid-cols-2 gap-x-10 lg:gap-x-14 gap-y-12">
              <h3 className={`${squadPanelTitleClass} col-start-1 mb-0`}>1-е отделение</h3>
              <h3 className={`${squadPanelTitleClass} col-start-2 mb-0`}>2-е отделение</h3>

              {teamSquad1Slots.map((slot1, index) => {
                const slot2 = teamSquad2Slots[index];
                return (
                  <React.Fragment key={`row-${slot1.member.callsign}-${slot2.member.callsign}`}>
                    <div className="flex flex-col items-stretch">
                      <h4 className={specialtySubClass}>{slot1.specialty}</h4>
                      <div className="flex justify-center flex-1 min-h-0">
                        <div className="w-full max-w-[280px]">
                          <SoldierCard {...slot1.member} />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch">
                      <h4 className={specialtySubClass}>{slot2.specialty}</h4>
                      <div className="flex justify-center flex-1 min-h-0">
                        <div className="w-full max-w-[280px]">
                          <SoldierCard {...slot2.member} />
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Мобильные: отделения столбиком, подзаголовки специальностей */}
          <div className="md:hidden space-y-10 max-w-lg mx-auto">
            <div className={squadPanelBoxClass}>
              <h3 className={squadPanelTitleClass}>1-е отделение</h3>
              <div className="space-y-10">
                {teamSquad1Slots.map((slot) => (
                  <div key={slot.member.callsign}>
                    <h4 className={specialtySubClass}>{slot.specialty}</h4>
                    <div className="flex justify-center">
                      <div className="w-full max-w-[280px]">
                        <SoldierCard {...slot.member} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={squadPanelBoxClass}>
              <h3 className={squadPanelTitleClass}>2-е отделение</h3>
              <div className="space-y-10">
                {teamSquad2Slots.map((slot) => (
                  <div key={slot.member.callsign}>
                    <h4 className={specialtySubClass}>{slot.specialty}</h4>
                    <div className="flex justify-center">
                      <div className="w-full max-w-[280px]">
                        <SoldierCard {...slot.member} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto items-stretch">
            <div className={`${squadPanelBoxClass} flex flex-col h-full`}>
              <h3 className={squadPanelTitleClass}>Связист</h3>
              <div className="flex flex-1 flex-wrap justify-center items-center gap-8">
                <div className="w-full max-w-[280px]">
                  <SoldierCard {...radioman} />
                </div>
              </div>
            </div>

            <div className={`${squadPanelBoxClass} flex flex-col h-full`}>
              <h3 className={squadPanelTitleClass}>Миномётчик</h3>
              <div className="flex flex-1 flex-wrap justify-center items-center gap-8">
                <div className="w-full max-w-[280px]">
                  <SoldierCard {...mortarman} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className={`${squadPanelBoxClass} max-w-6xl mx-auto`}>
            <h3 className={squadPanelTitleClass}>Новобранцы</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {teamRecruitSlots.map(({ member }) => (
                <div key={member.callsign} className="w-full max-w-[280px]">
                  <SoldierCard {...member} />
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
