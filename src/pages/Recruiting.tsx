import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, AlertTriangle } from 'lucide-react';
import ContactModal from '../components/ContactModal';

const Recruiting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const requirements = [
    'Возраст строго от 18 лет.',
    'Адекватность и соблюдение субординации.',
    'Финансовая независимость (покупка снаряжения, взносы).',
    'Готовность посещать тренировки минимум 2 раза в месяц.',
    'Отсутствие медицинских противопоказаний к физическим нагрузкам.',
    'Желание работать в команде, а не "фрагать" в одиночку.',
  ];

  return (
    <div className="bg-grom-bg pb-20">
      {/* Header */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-[url('/team-winter.jpg')] bg-cover bg-center opacity-70 animate-kenburns" />
        
        <div className="relative z-20 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold font-stencil tracking-wider text-white mb-4 drop-shadow-2xl"
          >
            РЕКРУТИНГ
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-24 h-1 bg-grom-olive mx-auto"
          />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-30">
        
        {/* Intro */}
        <div className="bg-stone-900 rounded-lg p-8 shadow-2xl border border-stone-800 mb-12">
          <h2 className="text-2xl font-bold font-stencil text-white mb-4">ВСТУПЛЕНИЕ В ЧСК ГРОМ</h2>
          <p className="text-stone-300 leading-relaxed mb-4">
            Мы постоянно ищем новых бойцов, готовых стать частью нашего коллектива. 
            Если ты ищешь серьезный подход к страйкболу, регулярные тренировки и настоящую командную игру — тебе к нам.
          </p>
          <p className="text-stone-300 leading-relaxed">
            Мы не требуем от тебя быть спецназовцем прямо сейчас. Мы научим всему, что знаем сами. 
            Главное — твое желание и упорство.
          </p>
        </div>

        {/* Requirements */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-stone-900/50 p-6 rounded-lg border-l-4 border-grom-olive">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <Check className="w-6 h-6 text-grom-olive-light mr-2" />
              ТРЕБОВАНИЯ
            </h3>
            <ul className="space-y-4">
              {requirements.map((req, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-grom-olive-light rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-stone-300 text-sm">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="bg-stone-900/50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 text-blue-500 mr-2" />
                ИСЧИТАТЕЛЬНЫЙ СРОК
              </h3>
              <p className="text-stone-400 text-sm mb-4">
                Каждый кандидат проходит испытательный срок (обычно 2-3 месяца). 
                За это время мы смотрим на твою адекватность, посещаемость и обучаемость.
              </p>
              <p className="text-stone-400 text-sm">
                В этот период ты можешь использовать прокатное снаряжение или минимальный свой комплект.
              </p>
            </div>

            <div className="bg-grom-olive/10 p-6 rounded-lg border border-grom-olive/30">
              <h3 className="text-lg font-bold text-grom-olive-light mb-2">ВАЖНО</h3>
              <p className="text-sm text-stone-300">
                Мы моделируем собирательный образ спецподразделений. Это накладывает ограничения на выбор вооружения и снаряжения. 
                Не покупай ничего до консультации с командиром!
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-10 border-t border-stone-800">
          <h2 className="text-3xl font-bold font-stencil text-white mb-6">ГОТОВ ПОДАТЬ ЗАЯВКУ?</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center space-x-2 bg-grom-olive hover:bg-grom-olive-dark text-white font-bold py-4 px-12 rounded-lg uppercase tracking-wider transition-all shadow-lg hover:shadow-grom-olive/30 transform hover:-translate-y-1"
          >
            <span>Связаться с нами</span>
            <ArrowRight size={20} />
          </button>
          <p className="text-sm text-stone-500 mt-4">
            Нажми кнопку, чтобы увидеть контакты командира и рекрутера
          </p>
        </div>

      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Recruiting;
