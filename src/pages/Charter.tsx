import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AccordionItem } from '../components/Accordion';

const Charter = () => {
  const [openSection, setOpenSection] = useState<string | null>('about');

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="bg-grom-bg pb-20">
      {/* Header */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-[url('/team-forest.jpg')] bg-cover bg-center opacity-70 animate-kenburns" />
        
        <div className="relative z-20 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold font-stencil tracking-wider text-white mb-4 drop-shadow-2xl"
          >
            УСТАВ КОМАНДЫ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-stone-300 text-sm mb-4"
          >
            Дата создания: 24.11.24 г. · Дата редактирования: 17.12.25 г.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-24 h-1 bg-grom-olive mx-auto"
          />
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-30 bg-stone-900 border border-stone-800 rounded-t-xl p-8 shadow-2xl min-h-[60vh]">
        
        {/* Preface */}
        <div className="mb-6 p-4 bg-grom-olive/10 border border-grom-olive/20 rounded-lg">
          <p className="text-stone-300 text-sm leading-relaxed">
            Данный устав регламентирует субординацию, вооружение, отношения и ответственность членов ЧСК «Гром» 
            в период проведения различных мероприятий (игр, тренировок и др.).
          </p>
        </div>

        <div className="space-y-2">
          
          {/* Пункт 1 */}
          <AccordionItem 
            title="Пункт 1. Общие положения" 
            isOpen={openSection === 'general'} 
            onToggle={() => toggleSection('general')}
          >
            <div className="space-y-3 text-stone-300 text-sm leading-relaxed">
              <p><strong className="text-stone-200">1.1.</strong> Данный устав регулирует командные взаимоотношения, правила поведения участников команды в игровое время и на командных сборах.</p>
              <p><strong className="text-stone-200">1.2.</strong> Любые изменения данного устава регулируются членами Командного состава, а нововведения или корректировки принимаются на командном сборе простым большинством голосов (50%+1 голос).</p>
              <p><strong className="text-stone-200">1.3.</strong> Исполнение требований данного устава является обязательным для всех участников команды без исключений.</p>
              <p><strong className="text-stone-200">1.4.</strong> <em>Игровое время</em> – время с момента прибытия участника на место проведения игры до момента отбытия.</p>
              <p><strong className="text-stone-200">1.5.</strong> <em>Командный сбор</em> – время с момента объявления командного сбора «открытым» до момента объявления его «закрытым». К командным сборам приравниваются также и тренировки команды.</p>
              <p><strong className="text-stone-200">1.6.</strong> Команда ЧСК «Гром» – сообщество людей, объединенных увлечением проведения военно-тематических игр. Команда не реконструирует и не моделирует какие-либо воинские подразделения. Команда являет собой собирательный образ подразделения вооруженных сил.</p>
              <p><strong className="text-stone-200">1.7.</strong> В команде действуют следующие подразделения (группы):</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Штурмовое</li>
                <li>Обеспечения</li>
                <li>Специального назначения</li>
              </ul>
              <p><strong className="text-stone-200">1.8.</strong> В подразделениях команды действуют специальности, соответствующие составу подразделений.</p>
              <p><strong className="text-stone-200">1.9.</strong> <em>Командные взносы</em> – ежемесячный сбор денежных средств для покупки и подготовки необходимого снаряжения, аренды мест для проведения игр и др.</p>
              <p><strong className="text-stone-200">1.10.</strong> Командный сайт – <a href="https://vk.com/chskgrom" target="_blank" rel="noopener noreferrer" className="text-grom-olive-light hover:underline">vk.com/chskgrom</a></p>
            </div>
          </AccordionItem>

          {/* Пункт 2 */}
          <AccordionItem 
            title="Пункт 2. О команде" 
            isOpen={openSection === 'about'} 
            onToggle={() => toggleSection('about')}
          >
            <div className="space-y-3 text-stone-300 text-sm leading-relaxed">
              <p><strong className="text-stone-200">2.1.</strong> Команда ЧСК «Гром» – объединение на добровольной основе дееспособных граждан РФ, достигших 18-летнего возраста (в исключительных случаях по решению командного состава — 15-летнего возраста), для совместного отдыха, приобретения навыков командных действий и совершенствования уже имеющихся.</p>
              <p><strong className="text-stone-200">2.2.</strong> Участники, не достигшие 18 лет, обязаны предоставлять расписку от родителей (опекунов) о взятии ответственности на себя.</p>
              <p><strong className="text-stone-200">2.3.</strong> Команда не является коммерческой организацией или юридическим лицом.</p>
              <p><strong className="text-stone-200">2.4.</strong> Отношения внутри команды строятся на принципах взаимного уважения и дисциплины. Все решения выносятся непосредственно командиром либо лицом его замещающим после обсуждения всеми участниками.</p>
              <p><strong className="text-stone-200">2.5.</strong> Во время игры действует принцип обязательной субординации и беспрекословного подчинения непосредственному командиру. Приказ может быть обжалован вышестоящему командиру, но обжалование не приостанавливает его исполнение.</p>
              <p><strong className="text-stone-200">2.6.</strong> Вне игры все участники команды равны между собой вне зависимости от должности и звания.</p>
              <p><strong className="text-stone-200">2.7.</strong> Вступление в команду осуществляется согласно требованиям к новобранцам. Новобранцу может быть отказано во вступлении без объяснения причины.</p>
            </div>
          </AccordionItem>

          {/* Пункт 3 */}
          <AccordionItem 
            title="Пункт 3. Командный состав" 
            isOpen={openSection === 'command'} 
            onToggle={() => toggleSection('command')}
          >
            <div className="space-y-3 text-stone-300 text-sm leading-relaxed">
              <p><strong className="text-stone-200">3.1.</strong> Командный состав ЧСК «Гром» состоит из:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong className="text-grom-olive-light">Командир</strong> — лицо, на которое возложено командование командой. В большинстве случаев является единоначальником.</li>
                <li><strong className="text-grom-olive-light">Заместитель командира</strong> — лицо, замещающее командира в случае необходимости. Является прямым командиром подразделений.</li>
                <li><strong className="text-grom-olive-light">Старшина</strong> — опытный боец, исполняющий роль инструктора или командира группы/подгруппы.</li>
              </ul>
              <p><strong className="text-stone-200">3.5.</strong> Командир команды не может быть смещен или перевыбран. Только сам командир может покинуть данный пост.</p>
              <p><strong className="text-stone-200">3.6.</strong> Должности заместителя и старшины — не являются выборочными. Назначаются командиром.</p>
              <p><strong className="text-stone-200">3.7.</strong> Члены командного состава могут занимать любую специальность в команде.</p>
            </div>
          </AccordionItem>

          {/* Пункт 4 */}
          <AccordionItem 
            title="Пункт 4. Вооружение и экипировка" 
            isOpen={openSection === 'equipment'} 
            onToggle={() => toggleSection('equipment')}
          >
            <div className="space-y-3 text-stone-300 text-sm leading-relaxed">
              <p><strong className="text-stone-200">4.1.</strong> Команда принимает участие в играх в экипировке расцветки <span className="text-grom-olive-light font-semibold">мультикам</span>, с обязательным ношением командного шеврона и флага РФ.</p>
              <p><strong className="text-stone-200">4.2.</strong> Каждый участник должен иметь минимальный комплект формы, вооружения и снаряжения.</p>
              <p><strong className="text-stone-200">4.3.</strong> Вооружение, снаряжение и экипировка зависят от специальности участника (см. Методичку п.3, п.4, п.5).</p>
              <p><strong className="text-stone-200">4.4.</strong> На пред-игровое и после-игровое построения участник прибывает в форме мультикам с обязательным наличием командного шеврона.</p>
              <p><strong className="text-stone-200">4.5.</strong> Командный состав несёт ответственность за экипировку личного состава, но это не освобождает участников от ответственности в отношении своего имущества.</p>
            </div>
          </AccordionItem>

          {/* Пункт 5 */}
          <AccordionItem 
            title="Пункт 5. Резерв команды" 
            isOpen={openSection === 'reserve'} 
            onToggle={() => toggleSection('reserve')}
          >
            <div className="space-y-3 text-stone-300 text-sm leading-relaxed">
              <p><strong className="text-stone-200">5.1.</strong> Перевод в резерв осуществляется ввиду редкого присутствия на играх, несдачи взносов или неактивности.</p>
              <p><strong className="text-stone-200">5.2.</strong> Решение о переводе в резерв принимается командиром либо по личной просьбе участника.</p>
              <p><strong className="text-stone-200">5.3.</strong> Участник в резерве освобождается от сдачи командных взносов.</p>
              <p><strong className="text-stone-200">5.4.</strong> Перевод из резерва в основной состав осуществляется по личной просьбе участника с восстановлением всех прав и обязанностей.</p>
            </div>
          </AccordionItem>

          {/* Пункт 6 */}
          <AccordionItem 
            title="Пункт 6. Права и обязанности" 
            isOpen={openSection === 'duties'} 
            onToggle={() => toggleSection('duties')}
          >
            <div className="space-y-6 text-stone-300 text-sm leading-relaxed">
              {/* 6.1 Командир */}
              <div>
                <h4 className="text-grom-olive-light font-bold mb-2 text-base">6.1. Командир команды</h4>
                <p className="font-semibold text-stone-200 mb-1">Права:</p>
                <ul className="list-disc pl-6 space-y-1 mb-3">
                  <li>Организовывать и руководить командным сбором</li>
                  <li>Принимать или отказывать в приеме новых участников</li>
                  <li>Назначать на должности и присваивать звания</li>
                  <li>Исключать из команды при несоблюдении устава</li>
                </ul>
                <p className="font-semibold text-stone-200 mb-1">Обязанности:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Отвечать за боевую подготовку, дисциплину и морально-психологическое состояние</li>
                  <li>Отвечать за состояние вооружения, снаряжения и экипировки</li>
                  <li>Осуществлять тактическое руководство во время игр</li>
                  <li>Своевременно информировать членов команды о мероприятиях</li>
                  <li>Представлять интересы команды на межкомандных мероприятиях</li>
                  <li>Служить личным примером во всех вопросах, особенно дисциплины</li>
                </ul>
              </div>

              {/* 6.2 Замком */}
              <div>
                <h4 className="text-grom-olive-light font-bold mb-2 text-base">6.2. Заместитель командира</h4>
                <p className="font-semibold text-stone-200 mb-1">Права:</p>
                <ul className="list-disc pl-6 space-y-1 mb-3">
                  <li>Руководить командным сбором по распоряжению командира или в его отсутствие</li>
                  <li>Приглашать или отказывать в приеме новых участников</li>
                </ul>
                <p className="font-semibold text-stone-200 mb-1">Обязанности:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Отвечать за боевую подготовку, дисциплину и морально-психологическое состояние</li>
                  <li>Осуществлять тактическое руководство в отсутствие командира</li>
                  <li>Представлять интересы команды на межкомандных мероприятиях</li>
                </ul>
              </div>

              {/* 6.3 Старшина */}
              <div>
                <h4 className="text-grom-olive-light font-bold mb-2 text-base">6.3. Старшина</h4>
                <p className="font-semibold text-stone-200 mb-1">Права:</p>
                <ul className="list-disc pl-6 space-y-1 mb-3">
                  <li>Приглашать или отказывать в приеме новых участников</li>
                </ul>
                <p className="font-semibold text-stone-200 mb-1">Обязанности:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Отвечать за выполнение командой поставленных задач во время игр</li>
                  <li>Отвечать за обучение, дисциплину и воспитание личного состава</li>
                  <li>Отвечать за эксплуатацию и состояние оружия</li>
                  <li>Отвечать за сохранность имущества команды</li>
                </ul>
              </div>

              {/* 6.4 Новобранец */}
              <div>
                <h4 className="text-grom-olive-light font-bold mb-2 text-base">6.4. Новобранец</h4>
                <p className="font-semibold text-stone-200 mb-1">Права:</p>
                <ul className="list-disc pl-6 space-y-1 mb-3">
                  <li>Участвовать по решению КС в играх и тренировках</li>
                  <li>Присутствовать по приглашению КС на командных сборах</li>
                </ul>
                <p className="font-semibold text-stone-200 mb-1">Обязанности:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Соблюдать устав и быть экипированным согласно уставу и методичке</li>
                  <li>Подчиняться решениям командного сбора</li>
                  <li>В игровое время подчиняться командованию</li>
                  <li>С уважением относиться к уставу, участникам и символам команды</li>
                  <li>Принимать активное участие в жизни команды</li>
                </ul>
              </div>

              {/* 6.5 Участник */}
              <div>
                <h4 className="text-grom-olive-light font-bold mb-2 text-base">6.5. Участник команды</h4>
                <p className="font-semibold text-stone-200 mb-1">Права:</p>
                <ul className="list-disc pl-6 space-y-1 mb-3">
                  <li>Участвовать во всех играх и тренировках</li>
                  <li>Носить символику команды</li>
                  <li>Присутствовать на всех сборах и голосовать</li>
                  <li>Пользоваться имуществом команды</li>
                  <li>Приглашать гостей на игру (с уведомлением командира)</li>
                  <li>Рекомендовать новобранцев и выбыть по собственному желанию</li>
                </ul>
                <p className="font-semibold text-stone-200 mb-1">Обязанности:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Соблюдать устав и быть экипированным согласно ему</li>
                  <li>Присутствовать на командных сборах и тренировках</li>
                  <li>Своевременно сдавать командные взносы</li>
                  <li>Посещать не менее 40% игр, 50% тренировок и 30% командных сборов в год</li>
                  <li>Нести ответственность за приглашенных гостей</li>
                </ul>
              </div>

              {/* 6.6 Резервист */}
              <div>
                <h4 className="text-grom-olive-light font-bold mb-2 text-base">6.6. Резервист</h4>
                <p className="font-semibold text-stone-200 mb-1">Права:</p>
                <ul className="list-disc pl-6 space-y-1 mb-3">
                  <li>Участвовать по решению командира в играх и тренировках</li>
                  <li>Присутствовать на всех сборах и голосовать</li>
                  <li>Выбыть из состава по собственному желанию</li>
                </ul>
                <p className="font-semibold text-stone-200 mb-1">Обязанности:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Соблюдать устав</li>
                  <li>Подчиняться командованию в игровое время</li>
                  <li>С уважением относиться к уставу, участникам и символам команды</li>
                </ul>
              </div>
            </div>
          </AccordionItem>

          {/* Пункт 7 */}
          <AccordionItem 
            title="Пункт 7. Игровые моменты" 
            isOpen={openSection === 'gameplay'} 
            onToggle={() => toggleSection('gameplay')}
          >
            <div className="space-y-3 text-stone-300 text-sm leading-relaxed">
              <p><strong className="text-stone-200">7.1.</strong> Во время игры каждый игрок обязан соблюдать устав команды и правила полигона.</p>
              <p><strong className="text-stone-200">7.2.</strong> Запрещается неуважительное отношение к другим участникам и некомбатантам.</p>
              <p className="text-red-400 font-semibold"><strong className="text-stone-200">7.3.</strong> Запрещается «несознанка» — по правилам спортивного поведения лучше уйти без попадания, чем ввязываться в спор с оппонентом.</p>
              <p><strong className="text-stone-200">7.4.</strong> Игрок своим поведением обязан не порочить репутацию команды.</p>
              <p><strong className="text-stone-200">7.5.</strong> Внешний вид игрока по прибытию на игру должен быть чистым и опрятным.</p>
            </div>
          </AccordionItem>

          {/* Пункт 8 */}
          <AccordionItem 
            title="Пункт 8. Неигровое время" 
            isOpen={openSection === 'offtime'} 
            onToggle={() => toggleSection('offtime')}
          >
            <div className="space-y-3 text-stone-300 text-sm leading-relaxed">
              <p><strong className="text-stone-200">8.1.</strong> Вне игрового времени игрок имеет право носить командную форму.</p>
              <p><strong className="text-stone-200">8.2.</strong> Запрещается к открытому ношению вне игрового времени элементы экипировки: бронежилеты, реплика холодного оружия, пиротехника, игровое оружие. Исключение — перенос в сумках и чехлах.</p>
              <p><strong className="text-stone-200">8.3.</strong> Ношение формы вне игры должно исключать причинение ущерба репутации команды.</p>
              <p><strong className="text-stone-200">8.4.</strong> Запрещается использование экипировки и вооружения вне игрового времени без согласования с командным составом.</p>
            </div>
          </AccordionItem>

          {/* Пункт 9 */}
          <AccordionItem 
            title="Пункт 9. Командный сбор" 
            isOpen={openSection === 'meeting'} 
            onToggle={() => toggleSection('meeting')}
          >
            <div className="space-y-3 text-stone-300 text-sm leading-relaxed">
              <p><strong className="text-stone-200">9.1.</strong> Командный сбор собирается для принятия решений, влияющих на развитие и жизнь команды.</p>
              <p><strong className="text-stone-200">9.2.</strong> Созывает и руководит сбором командир либо лицо его замещающее.</p>
              <p><strong className="text-stone-200">9.3.</strong> Правом голоса обладает каждый участник, за исключением новобранцев.</p>
              <p><strong className="text-stone-200">9.4.</strong> В случае невозможности явки, участник вправе передать свой голос любому присутствующему участнику.</p>
              <p><strong className="text-stone-200">9.5.</strong> Право голоса передается лишь на один сбор. Передавший голос не вправе обжаловать принятые решения.</p>
              <p><strong className="text-stone-200">9.6.</strong> Решения принимаются простым большинством голосов (50%+1 голос).</p>
              <p><strong className="text-stone-200">9.7.</strong> Решения могут быть обжалованы на последующем сборе при согласии более 3/4 состава.</p>
            </div>
          </AccordionItem>

          {/* Пункт 10 */}
          <AccordionItem 
            title="Пункт 10. Командный взнос" 
            isOpen={openSection === 'fees'} 
            onToggle={() => toggleSection('fees')}
          >
            <div className="space-y-3 text-stone-300 text-sm leading-relaxed">
              <p><strong className="text-stone-200">10.1.</strong> Командный взнос — ежемесячный сбор средств на приобретение инвентаря, снарядов или экипировки.</p>
              <p><strong className="text-stone-200">10.2.</strong> Сумма устанавливается командным составом и не может изменяться без голосования.</p>
              <p><strong className="text-stone-200">10.3.</strong> Резервисты и новобранцы не участвуют в командном взносе.</p>
              <p><strong className="text-stone-200">10.4.</strong> Любой участник может внести дополнительную сумму на нужды команды.</p>
              <p><strong className="text-stone-200">10.5.</strong> Взнос вносится ежемесячно в установленную дату.</p>
              <p><strong className="text-stone-200">10.6.</strong> При невозможности внесения вовремя, участник может запросить отсрочку.</p>
            </div>
          </AccordionItem>

          {/* Пункт 11 */}
          <AccordionItem 
            title="Пункт 11. Взыскания в команде" 
            isOpen={openSection === 'discipline'} 
            onToggle={() => toggleSection('discipline')}
            variant="danger"
          >
            <div className="space-y-3 text-stone-300 text-sm leading-relaxed">
              <p><strong className="text-stone-200">11.1.</strong> Система взысканий за нарушение устава:</p>
              <ul className="list-disc pl-6 space-y-1 mb-3">
                <li>Устное замечание</li>
                <li>Выговор</li>
                <li className="text-red-400 font-semibold">Исключение (исключительное наказание)</li>
              </ul>
              <p><strong className="text-stone-200">11.2.</strong> Решение о наложении взыскания принимается командиром с учётом степени тяжести проступка.</p>
              <p><strong className="text-stone-200">11.3.</strong> Решение может быть отменено открытым голосованием при участии не менее 3/4 состава.</p>
              <p><strong className="text-stone-200">11.4.</strong> Взыскание объявляется на срок не менее недели и не более месяца. Может быть снято досрочно командиром.</p>
              <p><strong className="text-stone-200">11.5.</strong> За грубое и неоднократное нарушение устава участник может быть исключен из команды. Также исключаются игроки, длительно отсутствующие без уважительных причин.</p>
              <p className="font-semibold text-stone-200 mt-4">Дополнительные взыскания:</p>
              <p><strong className="text-yellow-500">По технике безопасности:</strong> в случае нарушения ТБ участник выполняет комплекс упражнений на усмотрение командира. Данное требование касается также и самого командира.</p>
              <p><strong className="text-yellow-500">По работе с имуществом:</strong> если выданное имущество было повреждено, поломано или утеряно — участник обязан возместить ущерб.</p>
            </div>
          </AccordionItem>

        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-stone-800 text-center">
          <p className="text-stone-500 text-xs">
            Командир команды: Горм М.Д.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Charter;
