import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, ArrowRight } from 'lucide-react';
import ContactModal from '../components/ContactModal';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // Замедляем видео до 70% скорости
    }
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background Placeholder */}
        <div className="absolute inset-0 z-0 bg-grom-bg">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-grom-bg z-10" />
          <video 
            ref={videoRef}
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-40"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-stencil tracking-tighter text-white mb-6 drop-shadow-2xl">
              ЧСК <span className="text-grom-olive">ГРОМ</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 mb-4 font-light tracking-wide max-w-2xl mx-auto">
              Непоколебимость во тьме, свет победы впереди
            </p>
            <p className="text-base text-stone-400 mb-10 block">
              Военно-патриотическая страйкбольная команда
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="bg-grom-olive hover:bg-grom-olive-dark text-white font-bold py-4 px-10 rounded-none uppercase tracking-widest text-lg transition-all shadow-lg hover:shadow-grom-olive/20 border border-grom-olive hover:border-grom-olive-light"
            >
              Вступить в команду
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-stone-400"
        >
          <div className="w-6 h-10 border-2 border-stone-400 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-stone-400 rounded-full animate-scroll"></div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-grom-bg px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold font-stencil mb-6 text-white border-l-4 border-grom-olive pl-4">
                О КОМАНДЕ
              </h2>
              <p className="text-stone-300 text-lg leading-relaxed mb-6">
                ЧСК (Частная страйкбольная команда) "Гром" — это военно-патриотическая группа, 
                которая была создана с целью объединения людей для игр на разных локациях и с разными сценариями.
              </p>
              <p className="text-stone-300 text-lg leading-relaxed mb-6">
                Помимо участия в играх, в команде размещаются учебные материалы по топографии, картографии, 
                разведке, полевой медицине, тактике и стратегии. Всё это применяется в игровом процессе 
                и, при необходимости, вне его.
              </p>
              <p className="text-stone-300 text-lg leading-relaxed mb-8">
                Для укрепления дисциплины и сплочённости, члены ЧСК "Гром" носят снаряжение и экипировку 
                в расцветке "мультикам", а также занимают определённые должности и специальности в команде.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center p-4 bg-stone-900/50 rounded-lg border border-white/5">
                  <Shield className="w-10 h-10 text-grom-olive-light mb-3" />
                  <h3 className="font-bold text-white mb-1">Честность</h3>
                  <p className="text-xs text-stone-400">Основа страйкбола</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-stone-900/50 rounded-lg border border-white/5">
                  <Target className="w-10 h-10 text-grom-olive-light mb-3" />
                  <h3 className="font-bold text-white mb-1">Тактика</h3>
                  <p className="text-xs text-stone-400">Грамотные действия</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-stone-900/50 rounded-lg border border-white/5">
                  <Users className="w-10 h-10 text-grom-olive-light mb-3" />
                  <h3 className="font-bold text-white mb-1">Братство</h3>
                  <p className="text-xs text-stone-400">Единство команды</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src="/team-cqb.jpg" 
                  alt="Team Action" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-grom-olive/20 z-0 rounded-tr-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-stone-900 z-0 rounded-bl-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-900 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-stencil text-white mb-6">
            ГОТОВ ПРОВЕРИТЬ СЕБЯ?
          </h2>
          <p className="text-stone-300 mb-10 text-lg">
            Мы ищем тех, кто готов учиться и работать над собой. Заполни анкету или свяжись с нами.
          </p>
          <button
             onClick={() => setIsModalOpen(true)}
             className="inline-flex items-center space-x-2 bg-stone-100 text-grom-bg font-bold py-3 px-8 rounded hover:bg-stone-200 transition-colors"
          >
            <span>Связаться с командиром</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Home;
