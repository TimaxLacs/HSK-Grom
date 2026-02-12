import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, BookOpen, ChevronDown, Shield, Crosshair, Heart, Sword, Award } from 'lucide-react';

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  id: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, icon, id, isOpen, onToggle, children }) => (
  <div className="bg-stone-900 rounded-xl border border-stone-800 overflow-hidden shadow-lg">
    <button
      onClick={onToggle}
      className="w-full p-6 text-left hover:bg-stone-800/50 transition-colors flex items-center justify-between gap-4"
    >
      <div className="flex items-center gap-4">
        <div className="p-2 bg-grom-olive/20 rounded-lg text-grom-olive-light">
          {icon}
        </div>
        <h2 className="text-xl md:text-2xl font-bold font-stencil text-white tracking-wide">
          {title}
        </h2>
      </div>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="text-grom-olive-light flex-shrink-0"
      >
        <ChevronDown size={24} />
      </motion.div>
    </button>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6 border-t border-stone-800">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const ImageGrid: React.FC<{ images: string[]; captions?: string[] }> = ({ images, captions }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-4">
    {images.map((src, idx) => (
      <div key={idx} className="rounded-lg overflow-hidden border border-stone-700 bg-stone-800">
        <img src={src} alt={captions?.[idx] || `Изображение ${idx + 1}`} className="w-full h-auto object-contain" />
        {captions?.[idx] && (
          <p className="text-xs text-stone-400 text-center py-1 px-2">{captions[idx]}</p>
        )}
      </div>
    ))}
  </div>
);

const Training = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="bg-grom-bg pb-20">
      {/* Header */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-[url('/team-cqb.jpg')] bg-cover bg-center opacity-70 animate-kenburns" />
        
        <div className="relative z-20 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold font-stencil tracking-wider text-white mb-4 drop-shadow-2xl"
          >
            МЕТОДИЧКА
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-stone-300 text-sm mb-4"
          >
            Учебно-вспомогательное пособие ЧСК «Гром»
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-24 h-1 bg-grom-olive mx-auto"
          />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-30">
        
        {/* Intro + PDF Download */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-stone-900 rounded-xl p-6 md:p-8 shadow-2xl border border-stone-800 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-6">
              <div className="p-4 bg-grom-olive/20 rounded-lg text-grom-olive-light hidden md:block">
                <BookOpen size={40} />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold font-stencil text-white mb-2">ПОЛНОЕ РУКОВОДСТВО БОЙЦА</h2>
                <p className="text-stone-400 text-sm">
                  Методичка — учебно-вспомогательное пособие, разработанное для помощи личному составу 
                  в ознакомлении с отличительными знаками, специальностями, экипировкой, снаряжением и вооружением команды.
                </p>
              </div>
            </div>
            <a 
              href="/Методичка-1.docx"
              download
              className="whitespace-nowrap bg-grom-olive hover:bg-grom-olive-dark text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg flex items-center space-x-2"
            >
              <FileText size={20} />
              <span>Скачать DOCX</span>
            </a>
          </div>
        </motion.div>

        {/* Sections */}
        <div className="space-y-4">

          {/* Пункт 1 — Об отличительных знаках */}
          <Section
            title="Пункт 1. Об отличительных знаках"
            icon={<Award size={24} />}
            id="badges"
            isOpen={openSection === 'badges'}
            onToggle={() => toggleSection('badges')}
          >
            <div className="pt-4 space-y-4 text-stone-300 text-sm leading-relaxed">
              <p>
                С целью установления единообразия формы и поддержания командного духа, личный состав ЧСК «Гром» носит 
                <span className="text-grom-olive-light font-semibold"> шеврон с эмблемой команды</span> и 
                <span className="text-grom-olive-light font-semibold"> флаг Российской Федерации</span> над ним, 
                на левом предплечье.
              </p>
              <p>
                Также командир и зам. командира располагают под шевроном <strong className="text-stone-200">лычки</strong>, 
                указывающие на их должности.
              </p>
              <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <p className="text-yellow-400 text-xs font-semibold">
                  Примечание: исключением в ношении единообразной формы являются новобранцы команды — 
                  они используют снаряжение и экипировку в чёрных цветах.
                </p>
              </div>
              <ImageGrid 
                images={['/manual-images/img-2.jpeg', '/manual-images/img-3.jpeg']}
                captions={['Шеврон команды', 'Лычки командного состава']}
              />
            </div>
          </Section>

          {/* Пункт 2 — О специальностях */}
          <Section
            title="Пункт 2. О специальностях"
            icon={<Crosshair size={24} />}
            id="specialties"
            isOpen={openSection === 'specialties'}
            onToggle={() => toggleSection('specialties')}
          >
            <div className="pt-4 space-y-6 text-stone-300 text-sm leading-relaxed">
              <p>
                В ЧСК «Гром» личный состав распределён по подразделениям и специальностям. 
                <strong className="text-stone-200"> Подразделение</strong> — организационно несамостоятельная боевая группа, 
                отвечающая за выполнение определённого набора задач.
              </p>

              {/* Штурмовая группа */}
              <div className="bg-stone-800/50 rounded-lg p-4 border-l-4 border-red-500">
                <h3 className="text-lg font-bold text-white mb-2">1. Штурмовая группа</h3>
                <p className="mb-3">
                  Основная группа команды, предназначена для блокирования и уничтожения опорных пунктов 
                  и долговременных огневых сооружений противника при штурме или захвате.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-stone-900/80 p-3 rounded">
                    <h4 className="text-grom-olive-light font-bold text-xs uppercase mb-1">Штурмовик</h4>
                    <p className="text-xs text-stone-400">Обеспечивает выполнение основных и дополнительных задач</p>
                  </div>
                  <div className="bg-stone-900/80 p-3 rounded">
                    <h4 className="text-grom-olive-light font-bold text-xs uppercase mb-1">Гранатомётчик</h4>
                    <p className="text-xs text-stone-400">Прикрытие и прострел укрытий во время штурма</p>
                  </div>
                  <div className="bg-stone-900/80 p-3 rounded">
                    <h4 className="text-grom-olive-light font-bold text-xs uppercase mb-1">Миномётчик</h4>
                    <p className="text-xs text-stone-400">Прикрытие при штурме и на открытой местности</p>
                  </div>
                  <div className="bg-stone-900/80 p-3 rounded">
                    <h4 className="text-grom-olive-light font-bold text-xs uppercase mb-1">Пулемётчик</h4>
                    <p className="text-xs text-stone-400">Прикрытие, отвлекающие действия, прострел укрытий</p>
                  </div>
                </div>
              </div>

              {/* Группа обеспечения */}
              <div className="bg-stone-800/50 rounded-lg p-4 border-l-4 border-blue-500">
                <h3 className="text-lg font-bold text-white mb-2">2. Группа обеспечения</h3>
                <p className="mb-3">
                  Группа, выполняющая как основные, так и дополнительные (необходимые) задачи команды.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-stone-900/80 p-3 rounded">
                    <h4 className="text-grom-olive-light font-bold text-xs uppercase mb-1">Медик</h4>
                    <p className="text-xs text-stone-400">Перевязка раненых сокомандников</p>
                  </div>
                  <div className="bg-stone-900/80 p-3 rounded">
                    <h4 className="text-grom-olive-light font-bold text-xs uppercase mb-1">Связист</h4>
                    <p className="text-xs text-stone-400">Обеспечение связи внутри команды и с организаторами</p>
                  </div>
                  <div className="bg-stone-900/80 p-3 rounded">
                    <h4 className="text-grom-olive-light font-bold text-xs uppercase mb-1">Оператор БПЛА</h4>
                    <p className="text-xs text-stone-400">Наблюдение с воздуха, атаки с дрона</p>
                  </div>
                </div>
              </div>

              {/* Группа спецназначения */}
              <div className="bg-stone-800/50 rounded-lg p-4 border-l-4 border-grom-olive">
                <h3 className="text-lg font-bold text-white mb-2">3. Группа специального назначения</h3>
                <p className="mb-3">
                  Группа, подготовленная по особой программе для выполнения специальных задач. 
                  Действуют по своей тактике и с вооружением, отличающимся от базового.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-stone-900/80 p-3 rounded">
                    <h4 className="text-grom-olive-light font-bold text-xs uppercase mb-1">Снайпер</h4>
                    <p className="text-xs text-stone-400">Прикрытие на расстоянии, отвлекающие действия</p>
                  </div>
                  <div className="bg-stone-900/80 p-3 rounded">
                    <h4 className="text-grom-olive-light font-bold text-xs uppercase mb-1">Сапёр</h4>
                    <p className="text-xs text-stone-400">Защита с тыла, подрыв укрытий противника</p>
                  </div>
                  <div className="bg-stone-900/80 p-3 rounded">
                    <h4 className="text-grom-olive-light font-bold text-xs uppercase mb-1">Марксман</h4>
                    <p className="text-xs text-stone-400">Разведка, прикрытие, саботаж тыла</p>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Пункт 3 — Об экипировке */}
          <Section
            title="Пункт 3. Об экипировке"
            icon={<Shield size={24} />}
            id="equipment"
            isOpen={openSection === 'equipment'}
            onToggle={() => toggleSection('equipment')}
          >
            <div className="pt-4 space-y-6 text-stone-300 text-sm leading-relaxed">
              <p>
                Каждое подразделение ЧСК «Гром», в зависимости от специальности, имеет свои базовые (общие) 
                и отличительные составляющие в экипировке, снаряжении и вооружении.
              </p>

              {/* Особенности экипировки подразделений */}
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Особенности экипировки по подразделениям</h3>
                <div className="space-y-3">
                  <div className="bg-stone-800/50 p-3 rounded-lg">
                    <span className="text-grom-olive-light font-bold">Гранатомётчик:</span> подсумок для выстрелов
                  </div>
                  <div className="bg-stone-800/50 p-3 rounded-lg">
                    <span className="text-grom-olive-light font-bold">Миномётчик:</span> бандольера для снарядов
                  </div>
                  <div className="bg-stone-800/50 p-3 rounded-lg">
                    <span className="text-grom-olive-light font-bold">Пулемётчик:</span> воротник, наплечники, напашник + кобура с пистолетом
                  </div>
                  <div className="bg-stone-800/50 p-3 rounded-lg">
                    <span className="text-grom-olive-light font-bold">Медик:</span> рюкзак (для суточных игр) + кобура с пистолетом
                  </div>
                  <div className="bg-stone-800/50 p-3 rounded-lg">
                    <span className="text-grom-olive-light font-bold">Снайпер:</span> коврик для стрельбы, маскировка + кобура с пистолетом
                  </div>
                  <div className="bg-stone-800/50 p-3 rounded-lg">
                    <span className="text-grom-olive-light font-bold">Сапёр:</span> воротник, наплечники, напашник, наручи, подсумки для гранат + визор
                  </div>
                  <div className="bg-stone-800/50 p-3 rounded-lg">
                    <span className="text-grom-olive-light font-bold">Марксман:</span> коврик для стрельбы + маскировка
                  </div>
                </div>
              </div>

              {/* ВКПО */}
              <div>
                <h3 className="text-lg font-bold text-white mb-2">ВКПО — Всесезонный комплект полевого обмундирования</h3>
                <p className="mb-2">
                  Базовый набор одежды, предназначенный для ношения в полевых условиях (от +15°C до -40°C). 
                  Сочетание слоёв изменяется в зависимости от погодных условий.
                </p>
                <ImageGrid 
                  images={['/manual-images/img-6.jpeg', '/manual-images/img-8.jpeg']}
                  captions={['ВКПО основного состава', 'ВКПО схема']}
                />
              </div>

              {/* Основные элементы */}
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Основные элементы экипировки</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Тактический костюм Gen 3',
                    'Защитный шлем «MICH-2000»',
                    'Защитные очки (баллистические)',
                    'Защитная маска/капа',
                    'Балаклава (альт. снуд/арафатка)',
                    'Бронежилет JPC (альт. TMC)',
                    'Минимап (марадерка)',
                    'Варбелт',
                    'Защита суставов (вставки)',
                    'Перчатки',
                    'Обувь укреплённая',
                    'АППИ «ZTac» отрывная',
                    'Подсумок для рации',
                    'Подсумок для магазинов двойной',
                    'Подсумок для сброса магазинов',
                    'Подсумок для 2-х гранат',
                    'Подсумок для кошки',
                    'Нож в ножнах',
                    'Пончо (дождевик)',
                    'Кобура для пистолета (если исп.)',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs bg-stone-800/30 p-2 rounded">
                      <span className="w-1.5 h-1.5 bg-grom-olive-light rounded-full flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-red-400 text-xs font-semibold">
                  Внимание! ВКПО и экипировка новобранцев повторяют экипировку основного состава, 
                  однако состоят исключительно из чёрных элементов одежды.
                </p>
              </div>

              {/* Доп. элементы */}
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Дополнительные элементы экипировки</h3>
                <div className="flex flex-wrap gap-2">
                  {['Визор', 'Маскировка', 'Воротник', 'Наплечники', 'Защита предплечья', 
                    'Бандольера', 'Напашник', 'Набедренные платформы', 'Коврик для стрельбы'].map((item, idx) => (
                    <span key={idx} className="text-xs bg-stone-800 px-3 py-1.5 rounded-full border border-stone-700">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Единообразные элементы */}
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Единообразная установка элементов</h3>
                <ul className="space-y-2">
                  {[
                    'Чехол на шлем в расцветке мультикам (обязательно)',
                    'Подсумок для рации — на передней части каммербанда слева',
                    'Подсумок для кошки — на передней части каммербанда справа',
                    'Шеврон с позывным — на передней панели бронежилета',
                    'Триколор — на шлеме слева; малый — над позывным на бронежилете',
                    'Карабин для перчаток — на передней панели слева',
                    'ХИСы — в системе molle на передней панели',
                    'Маячок — на правой штрипке пояса',
                    'Страховочный карабин — справа от минимапа',
                    'Подсумок магазинов, сбросник, аптечка, подсумок гранат — слева направо на варбелте',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs">
                      <span className="text-grom-olive-light mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <ImageGrid 
                images={['/manual-images/img-14.jpeg', '/manual-images/img-18.jpeg', '/manual-images/img-19.jpeg']}
                captions={['Экипировка (общий вид)', 'Расположение элементов', 'Элементы на бронежилете']}
              />
            </div>
          </Section>

          {/* Пункт 4 — О медицине и снаряжении */}
          <Section
            title="Пункт 4. О медицине и снаряжении"
            icon={<Heart size={24} />}
            id="medicine"
            isOpen={openSection === 'medicine'}
            onToggle={() => toggleSection('medicine')}
          >
            <div className="pt-4 space-y-6 text-stone-300 text-sm leading-relaxed">

              {/* АППИ */}
              <div>
                <h3 className="text-lg font-bold text-white mb-2">АППИ — Аптечка первой помощи индивидуальная</h3>
                <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg mb-3">
                  <p className="text-yellow-400 text-xs">
                    Аптечный подсумок приобретается отдельно. Закрепляется у каждого бойца единообразно — на варбелте, позади справа.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Аптечный подсумок «Ztak»',
                    'Бинт стерильный 7×14 см',
                    'Бинт эластичный 10×2 см',
                    'Жгут-турникет',
                    'Пакет охлаждающий «Апполо»',
                    'Альбуцид, капли для глаз — 5 мл',
                    'Карандаши Леккер (йод/зелёнка)',
                    'Атравматический наглазник',
                    'Диклофенак мазь — 10 мг',
                    'БФ-6 клей — 15 гр',
                    'Очиститель воды «Аквабриз» — 10 шт.',
                    'Антисептические салфетки — 2 шт.',
                    'Пластырь бактерицидный — 10 шт.',
                    'Пластырь окклюзионный — 1 шт.',
                    'Ватные палочки — 15 шт.',
                    'Маркер «ТакМед»',
                    'Ножницы атравматические',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs bg-stone-800/30 p-2 rounded">
                      <span className="text-grom-olive-light font-bold">{idx + 1}.</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* АППГ */}
              <div>
                <h3 className="text-lg font-bold text-white mb-2">АППГ — Аптечка первой помощи групповая</h3>
                <p className="mb-3">
                  В дополнение к индивидуальной аптечке, медик носит при себе командную аптечку. 
                  При длительных играх или тренировках (более 3-х дней) он носит медицинский рюкзак.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-grom-olive-light font-bold text-xs uppercase mb-2">Согревающие/охлаждающие</h4>
                    <ul className="space-y-1 text-xs">
                      <li>• Согревающий пакет «Будь готов» — 1 шт.</li>
                      <li>• Перцовый пластырь — 5 шт.</li>
                      <li>• Меновазин — 40 мл.</li>
                      <li>• Термоодеяло — 1 шт.</li>
                      <li>• Охлаждающий пакет «Апполо» — 1 шт.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-grom-olive-light font-bold text-xs uppercase mb-2">Перевязочные / кровоостанавливающие</h4>
                    <ul className="space-y-1 text-xs">
                      <li>• Бинт стерильный — 2 шт.</li>
                      <li>• Бинт эластичный — 1 шт.</li>
                      <li>• Жгут-турникет — 1 шт.</li>
                      <li>• Пластырь окклюзионный — 2 шт.</li>
                      <li>• Пластырь бактерицидный — 10 шт.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-grom-olive-light font-bold text-xs uppercase mb-2">Фиксирующие/защищающие</h4>
                    <ul className="space-y-1 text-xs">
                      <li>• Шина иммобилизационная — 1 шт.</li>
                      <li>• Атравматический щиток — 1 шт.</li>
                      <li>• Пластырь-стяжка — 5 шт.</li>
                      <li>• Абдоминальная повязка — 2 уп.</li>
                      <li>• Носилки — 1 шт.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-grom-olive-light font-bold text-xs uppercase mb-2">Мед. препараты</h4>
                    <ul className="space-y-1 text-xs">
                      <li>• Цитрамон, Парацетамол</li>
                      <li>• Экофурил, Фталазол</li>
                      <li>• Ношпа, Супрастин</li>
                      <li>• Уголь активированный</li>
                      <li>• Смекта, Фурацилин</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Снаряжение */}
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Базовое снаряжение на играх</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Рация', desc: 'Baofeng BF888S (новобранцы) / Baofeng UR-5V (основной состав)' },
                    { name: 'Монокуляры и бинокли', desc: 'Оптические приборы для наблюдения за удалёнными объектами' },
                    { name: 'Крюк-кошка', desc: 'Для сдёргивания растяжек, подъёма грузов, эвакуации и преодоления препятствий' },
                    { name: 'Фонарь на шлем', desc: 'Компактное осветительное устройство (белый, красный, зелёный, ИК-режим)' },
                    { name: 'Тактический маячок', desc: 'Для идентификации «свой-чужой» и обозначения позиций' },
                    { name: 'ХИС', desc: 'Химический источник света — автономный свет без батареек' },
                    { name: 'Страховочный карабин', desc: 'Соединительный элемент для работы на высоте' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-stone-800/50 p-3 rounded-lg">
                      <span className="text-grom-olive-light font-bold">{idx + 1}. {item.name}</span>
                      <p className="text-xs text-stone-400 mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <ImageGrid 
                images={['/manual-images/img-24.jpeg', '/manual-images/img-26.jpeg', '/manual-images/img-27.jpeg']}
                captions={['Аптечка (общий вид)', 'Содержимое АППИ', 'Снаряжение бойца']}
              />
            </div>
          </Section>

          {/* Пункт 5 — О вооружении */}
          <Section
            title="Пункт 5. О вооружении"
            icon={<Sword size={24} />}
            id="weapons"
            isOpen={openSection === 'weapons'}
            onToggle={() => toggleSection('weapons')}
          >
            <div className="pt-4 space-y-6 text-stone-300 text-sm leading-relaxed">
              <p>
                В ЧСК «Гром» сформирована единая таблица допустимого оружия вне зависимости от выбранной специальности.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* М-серия */}
                <div className="bg-stone-800/50 p-4 rounded-lg">
                  <h4 className="text-grom-olive-light font-bold mb-2">Привода М-серии</h4>
                  <ul className="space-y-1 text-xs">
                    <li>M4 CQB / CQB with silencer</li>
                    <li>M4A1 / M4A1 crane</li>
                    <li>M4 PJ / M4 PJ 10</li>
                    <li>M4 RIS / M4 RAS II</li>
                    <li>M4 KAC URX II</li>
                    <li>M4 CQBR (металл)</li>
                    <li>M4 PJ silent short (металл)</li>
                  </ul>
                </div>

                {/* Пистолеты */}
                <div className="bg-stone-800/50 p-4 rounded-lg">
                  <h4 className="text-grom-olive-light font-bold mb-2">Пистолеты Glock-серии</h4>
                  <ul className="space-y-1 text-xs">
                    <li>Glock 18C (AEP)</li>
                    <li>Glock 18 / 18C custom (AEP)</li>
                    <li>Glock 17 Gen 3 / Gen 5 (Green gas)</li>
                    <li>Glock 19 Gen 3 (Green gas)</li>
                    <li>G18C Metal gear box (AEG)</li>
                  </ul>
                </div>

                {/* Снайперские */}
                <div className="bg-stone-800/50 p-4 rounded-lg">
                  <h4 className="text-grom-olive-light font-bold mb-2">Снайперские винтовки AWP(M)</h4>
                  <ul className="space-y-1 text-xs">
                    <li>L96 spring</li>
                    <li>L115A3 BK / OD</li>
                    <li>Snow Wolf L96A1 spring BK</li>
                    <li>L115A3 с фальш магазином OD</li>
                  </ul>
                </div>

                {/* Пулемёты */}
                <div className="bg-stone-800/50 p-4 rounded-lg">
                  <h4 className="text-grom-olive-light font-bold mb-2">Пулемёты М-249-серии</h4>
                  <ul className="space-y-1 text-xs">
                    <li>M249 PARA / Minimi Mk.1 / Mk.2</li>
                    <li>М60</li>
                    <li>Mk.46 (пластик / металл)</li>
                  </ul>
                </div>

                {/* Дробовики */}
                <div className="bg-stone-800/50 p-4 rounded-lg">
                  <h4 className="text-grom-olive-light font-bold mb-2">Дробовики М-серии</h4>
                  <ul className="space-y-1 text-xs">
                    <li>Remington M870 compact</li>
                    <li>Remington M870 short</li>
                    <li>Remington M870</li>
                  </ul>
                </div>

                {/* ПП */}
                <div className="bg-stone-800/50 p-4 rounded-lg">
                  <h4 className="text-grom-olive-light font-bold mb-2">ПП MP5-серии</h4>
                  <ul className="space-y-1 text-xs">
                    <li>MP5К</li>
                    <li>MP5J</li>
                  </ul>
                </div>

                {/* Гранатомёты */}
                <div className="bg-stone-800/50 p-4 rounded-lg">
                  <h4 className="text-grom-olive-light font-bold mb-2">Гранатомёты</h4>
                  <ul className="space-y-1 text-xs">
                    <li>M203-Short / M203-Long</li>
                    <li>«Москит»</li>
                    <li>«Тюльпан» / «Чекист» (М-стайл 2.0)</li>
                    <li>Стилет «Тюльпан» / «Чекист»</li>
                    <li>М-52 «Мушкетон»</li>
                    <li>М-32 «Милкор» MGL</li>
                  </ul>
                </div>

                {/* Миномёты */}
                <div className="bg-stone-800/50 p-4 rounded-lg">
                  <h4 className="text-grom-olive-light font-bold mb-2">Миномёты и ПУ</h4>
                  <ul className="space-y-1 text-xs">
                    <li>«Огонёк» (с/без платы контроля)</li>
                    <li>«Пламя» (с/без платы контроля / с сошками)</li>
                    <li>РПГ-26 ver. 2</li>
                    <li>РПГ АТ-4 (М-136 LAW)</li>
                    <li>М-57 «Кликер»</li>
                  </ul>
                </div>
              </div>

              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-red-400 text-xs font-semibold">
                  ВНИМАНИЕ! Аккумулятор и зарядное устройство в комплекте с приводом не идут. 
                  Данные элементы необходимо приобрести отдельно.
                </p>
              </div>

              {/* Пиротехника */}
              <div>
                <h3 className="text-lg font-bold text-white mb-3">Используемая пиротехника</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-grom-olive-light font-bold text-xs uppercase mb-2">Гранаты</h4>
                    <ul className="space-y-1 text-xs">
                      <li>• Ф-1</li>
                      <li>• РГД-5</li>
                      <li>• «Пионер» / «Яблоко» / «Егерь»</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-grom-olive-light font-bold text-xs uppercase mb-2">Мины</h4>
                    <ul className="space-y-1 text-xs">
                      <li>• МС-1</li>
                      <li>• ПОМЗ (противопехотная)</li>
                      <li>• ОМС-5П «Лягушка»</li>
                      <li>• М18А1 «Клеймор»</li>
                      <li>• МОН-50 «Рубеж»</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-grom-olive-light font-bold text-xs uppercase mb-2">Дымовые шашки</h4>
                    <ul className="space-y-1 text-xs">
                      <li>• МЭС-Д (дым)</li>
                      <li>• ДШР-1</li>
                      <li>• ШД-50/90/130</li>
                      <li>• ДЦ-Smoking fountain</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-grom-olive-light font-bold text-xs uppercase mb-2">Ручные гранатомёты</h4>
                    <ul className="space-y-1 text-xs">
                      <li>• СНГ «Калибр»</li>
                      <li>• ОГМ-40 «Пенал»</li>
                    </ul>
                  </div>
                </div>
              </div>

              <ImageGrid 
                images={['/manual-images/img-37.jpeg', '/manual-images/img-46.png', '/manual-images/img-47.png', '/manual-images/img-50.jpeg', '/manual-images/img-51.jpeg']}
                captions={['Привод M4', 'Гранатомёт', 'Миномёт', 'Пиротехника', 'Снаряжение']}
              />

              {/* Footer */}
              <div className="pt-4 border-t border-stone-800 text-center">
                <p className="text-stone-500 text-xs">
                  Командир команды: Горм М.Д. · Дата создания: 06.12.24 г. · Дата редактирования: 17.12.25 г.
                </p>
              </div>
            </div>
          </Section>

        </div>
      </div>
    </div>
  );
};

export default Training;
