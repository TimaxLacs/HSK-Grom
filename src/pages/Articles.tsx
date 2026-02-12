import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Calendar, User } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  date: string;
  author: string;
  image?: string;
  preview: string;
  content: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: 'Основы CQB: работа в помещениях',
    date: '10 Февраля 2026',
    author: 'Иван "Медведь"',
    image: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    preview: 'Краткое введение в тактику боя в ограниченном пространстве.',
    content: `
      CQB (Close Quarters Battle) — это бой в замкнутых пространствах, где каждая секунда решает исход столкновения.
      
      **Основные принципы:**
      1. Скорость и решительность
      2. Постоянная коммуникация
      3. Зачистка углов
      4. Работа в парах
      
      При входе в помещение первый номер движется по дуге, второй прикрывает противоположный угол. 
      Никогда не останавливайтесь в дверном проеме — это "фатальная воронка".
    `
  },
  {
    id: 2,
    title: 'Радиообмен: коды и позывные',
    date: '5 Февраля 2026',
    author: 'Сергей "Тихий"',
    preview: 'Как правильно использовать рацию на игре.',
    content: `
      Эффективная радиосвязь — залог победы. Без четкого обмена информацией команда превращается в толпу.
      
      **Правила:**
      - Краткость — сестра таланта
      - Используйте позывные, а не имена
      - Подтверждайте получение информации
      - Не болтайте в эфире
      
      **Коды:**
      - "200" — принял
      - "300" — вижу противника
      - "400" — ранен
      - "500" — отход
    `
  },
  {
    id: 3,
    title: 'Подбор снаряжения для новичка',
    date: '1 Февраля 2026',
    author: 'Дмитрий "Волк"',
    image: 'https://images.unsplash.com/photo-1542359649-31e03cd4d909?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    preview: 'Что купить в первую очередь?',
    content: `
      Страйкбол — не дешевое хобби, но и не космически дорогое. Главное — не покупать лишнего.
      
      **Минимальный набор:**
      1. Защитные очки (от 2000₽)
      2. Привод AEG средней ценовой категории (15-20к₽)
      3. Тактический пояс + подсумки (3-5к₽)
      4. Форма (от 5к₽)
      
      НЕ покупай дорогой тюнинг, пока не научишься стрелять. 
      Сначала техника, потом железо.
    `
  }
];

const Articles = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleArticle = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-grom-bg pb-20">
      {/* Header */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595590424283-b8f17842773f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-70 animate-kenburns" />
        
        <div className="relative z-20 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold font-stencil tracking-wider text-white mb-4 drop-shadow-2xl"
          >
            СТАТЬИ
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
        <div className="space-y-6">
          {articles.map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: article.id * 0.1 }}
              className="bg-stone-900 rounded-lg overflow-hidden border border-stone-800 shadow-lg"
            >
              {/* Article Header */}
              <button
                onClick={() => toggleArticle(article.id)}
                className="w-full p-6 text-left hover:bg-stone-800/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold font-stencil text-white mb-2 group-hover:text-grom-olive-light transition-colors">
                      {article.title}
                    </h2>
                    <div className="flex items-center gap-4 text-sm text-stone-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User size={14} />
                        {article.author}
                      </span>
                    </div>
                    <p className="text-stone-300 text-sm">{article.preview}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedId === article.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-grom-olive-light flex-shrink-0"
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </div>
              </button>

              {/* Article Content */}
              <AnimatePresence>
                {expandedId === article.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-stone-800">
                      {article.image && (
                        <div className="my-4 rounded-lg overflow-hidden">
                          <img 
                            src={article.image} 
                            alt={article.title} 
                            className="w-full h-64 object-cover"
                          />
                        </div>
                      )}
                      <div className="prose prose-invert prose-stone max-w-none">
                        {article.content.split('\n').map((paragraph, idx) => (
                          <p key={idx} className="text-stone-300 leading-relaxed mb-4 whitespace-pre-line">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
