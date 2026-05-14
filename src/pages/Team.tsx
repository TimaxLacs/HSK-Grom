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
  teamZvenoRowSpecialtyOrder,
  type TeamSlot,
} from '../data/teamRoster';

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold font-stencil text-white uppercase tracking-widest mb-3">{children}</h2>
    <div className="w-16 h-1 bg-grom-olive mx-auto" />
  </div>
);

const squadPanelTitleClass =
  'text-xl sm:text-2xl font-bold font-stencil text-center text-grom-olive-light uppercase tracking-[0.2em]';

const squadPanelBoxClass =
  'rounded-xl border border-stone-800/80 bg-stone-900/30 p-4 sm:p-6 md:p-8';

const specialtySubClass =
  'text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-stone-400 text-center';

const slotsForSpecialty = (slots: TeamSlot[], specialty: string) =>
  slots.filter((s) => s.specialty === specialty);

const EmptyRolePlaceholder = () => (
  <div
    className="w-full max-w-[280px] mx-auto rounded-lg overflow-hidden border border-dashed border-stone-600 bg-stone-900/50 aspect-[3/4] flex items-center justify-center"
    aria-hidden
  >
    <span className="text-stone-600 text-6xl font-stencil leading-none select-none">?</span>
  </div>
);

const ZvenoColumn = ({ slots }: { slots: TeamSlot[] }) => (
  <div className="flex flex-col items-center justify-start gap-6 min-h-[1rem]">
    {slots.length === 0 ? (
      <EmptyRolePlaceholder />
    ) : (
      slots.map((slot) => (
        <div key={`${slot.member.callsign}-${slot.duty ?? ''}`} className="w-full max-w-[280px] shrink-0">
          <SoldierCard {...slot.member} duty={slot.duty} />
        </div>
      ))
    )}
  </div>
);

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

          <div className={`${squadPanelBoxClass} max-w-6xl mx-auto`}>
            <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-x-10 lg:gap-x-14 mb-10 sm:mb-12">
              <h3 className={`${squadPanelTitleClass} mb-0`}>1 звено</h3>
              <h3 className={`${squadPanelTitleClass} mb-0`}>2 звено</h3>
            </div>

            <div className="flex flex-col gap-12 sm:gap-14 md:gap-16">
              {teamZvenoRowSpecialtyOrder.map((specialty) => {
                const s1 = slotsForSpecialty(teamSquad1Slots, specialty);
                const s2 = slotsForSpecialty(teamSquad2Slots, specialty);
                return (
                  <div key={specialty} className="grid grid-cols-1 gap-4">
                    <h4 className={`${specialtySubClass} mb-2 sm:mb-3`}>{specialty}</h4>
                    <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-x-10 lg:gap-x-14 items-start">
                      <ZvenoColumn slots={s1} />
                      <ZvenoColumn slots={s2} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section>
          <div className="text-center mb-10 max-w-5xl mx-auto">
            <h3 className="text-lg sm:text-xl font-bold font-stencil text-stone-400 uppercase tracking-[0.25em] mb-3">
              Вспомогательное подразделение
            </h3>
            <div className="w-16 h-0.5 bg-grom-olive/70 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto items-stretch">
            <div className={`${squadPanelBoxClass} flex flex-col h-full`}>
              <h3 className={`${squadPanelTitleClass} mb-8`}>Связист</h3>
              <div className="flex flex-1 flex-wrap justify-center items-center gap-8">
                <div className="w-full max-w-[280px]">
                  <SoldierCard {...radioman} duty="Связист" />
                </div>
              </div>
            </div>

            <div className={`${squadPanelBoxClass} flex flex-col h-full`}>
              <h3 className={`${squadPanelTitleClass} mb-8`}>Миномётчик</h3>
              <div className="flex flex-1 flex-wrap justify-center items-center gap-8">
                <div className="w-full max-w-[280px]">
                  <SoldierCard {...mortarman} duty="Миномётчик" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className={`${squadPanelBoxClass} max-w-6xl mx-auto`}>
            <h3 className={`${squadPanelTitleClass} mb-8`}>Новобранцы</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {teamRecruitSlots.map(({ member, duty }) => (
                <div key={member.callsign} className="w-full max-w-[280px]">
                  <SoldierCard {...member} duty={duty} />
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
