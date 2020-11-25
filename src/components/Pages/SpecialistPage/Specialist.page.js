import React, {useEffect} from 'react';

import useStyles from "./style";
import rootStyles from "../../Root/style";
import {Link} from "react-router-dom";
import {GET_STARTED, SPECIALIST_EDUCATION_PAGE_LINK} from "../../../config/pageLinks";
import image1 from "../../../assets/images/png/choiceСommunication.png";
import image2 from "../../../assets/images/png/choiceScience.png";
import image3 from "../../../assets/images/png/choiceTraining.png";
import image4 from "../../../assets/images/png/choiceOpportunities.png";
import checkTabl from "../../../assets/images/svg/checkTabl2.svg";
import crossTabl from "../../../assets/images/svg/crossTabl2.svg";
import partners1 from "../../../assets/images/png/partners/partners1.png";
import partners2 from "../../../assets/images/png/partners/partners2.png";
import partners3 from "../../../assets/images/png/partners/partners3.png";
import partners4 from "../../../assets/images/png/partners/partners4.png";
import partners5 from "../../../assets/images/png/partners/partners5.png";
import partners6 from "../../../assets/images/png/partners/partners6.png";
import partners7 from "../../../assets/images/png/partners/partners7.png";
import partners8 from "../../../assets/images/png/partners/partners8.png";
import partners9 from "../../../assets/images/png/partners/partners9.png";

import "animate.css/animate.min.css";
import  ScrollAnimation from 'react-animate-on-scroll';

const SpecialistPage = props => {

  const classes = useStyles();
  const customClasses = rootStyles();

  const [ liID, setLiID ] = React.useState(null);
  const handleClick = event => {
    const id = event.target.id;
    setLiID(id);
  };

  const [ counter, setCounter ] = React.useState(0);

  useEffect(() => {
    handleChangeCounter();
  }, [counter]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChangeCounter = event => {
    switch (counter) {
      case 0: setLiID('wISwitchS1');
        break;
      case 1: setLiID('wISwitchS2');
        break;
      case 2: setLiID('wISwitchS3');
        break;
      case 3: setLiID('wISwitchS4');
        break;
      // case 4: setLiID('team5');
      //   break;
    }
  };

  return (
    <React.Fragment>
      <div className={customClasses.specialistPage}>
        <div className={customClasses.promoOverflow}>
          <div className={`${customClasses.promo} ${customClasses.promoSpec}`}>
            <div className={customClasses.promoPosition}>
              <h1 className={customClasses.promoTitle}>Testing — лучшее <br/> решение для специалистов</h1>
              <p className={customClasses.promoSubtitle}>Практика. Наука. Образование. Предлагаем <br/> возможность независимой капитализации себя</p>
              <a target="_blank" href="http://Testing.pro" className={`${customClasses.btn} ${customClasses.btnMid} ${customClasses.btnGrn}`}>Работать с нами</a>
            </div>
        </div>

        </div>

        {/*CHOICE*/}
        <section className={customClasses.pageRow}>
          <div className={customClasses.container}>
            <h2 className={customClasses.subHeading}>Testing — осознанный выбор</h2>
            <div className={customClasses.choice}>
              <div className={customClasses.choiceList}>
                <div className={customClasses.choiceItem}>
                  <ScrollAnimation offset={200} animateOnce={true} animateIn="fadeInLeft">
                    <div className={customClasses.choiceItemWrap}>
                      <div className={customClasses.choiceImage}>
                        <img className={customClasses.choiceImg} src={image1} alt=""/>
                      </div>
                      <div className={customClasses.choiceDescription}>
                        <div className={customClasses.choiceTitle}>Практика:</div>
                        <div className={customClasses.choiceTexts}>
                          <p className={customClasses.choiceText}>Больше чем ЭМК для работы с амбулаторными пациентами</p>
                          <p className={customClasses.choiceText}>Онлайн-консультации, сопровождение пациентов</p>
                          <p className={customClasses.choiceText}>Интеллектуальная проверка данных в ЭМК</p>
                          <p className={customClasses.choiceText}>Расписание. Документы. Отчетность</p>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
                <div className={customClasses.choiceItem}>
                  <ScrollAnimation offset={200} animateOnce={true} animateIn="fadeInRight">
                    <div className={customClasses.choiceItemWrap}>
                      <div className={customClasses.choiceImage}>
                        <img className={customClasses.choiceImg} src={image2} alt="image"/>
                      </div>
                      <div className={customClasses.choiceDescription}>
                        <div className={customClasses.choiceTitle}>Наука:</div>
                        <div className={customClasses.choiceTexts}>
                          <p className={customClasses.choiceText}>Публикуйтесь и повышайте свой Хирши быстрее других</p>
                          <p className={customClasses.choiceText}>Объединяйтесь с коллегами в научные проекты</p>
                          <p className={customClasses.choiceText}>Участвуйте в клинических исследованиях</p>
                          <p className={customClasses.choiceText}>Работайте сразу с первичными данными. <br/>Дата-сеты для статистики</p>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
                <div className={customClasses.choiceItem}>
                  <ScrollAnimation offset={200} animateOnce={true} animateIn="fadeInLeft">
                    <div className={customClasses.choiceItemWrap}>
                      <div className={customClasses.choiceImage}>
                        <img className={customClasses.choiceImg} src={image3} alt="image"/>
                      </div>
                      <div className={customClasses.choiceDescription}>
                        <div className={customClasses.choiceTitle}>Обучение:</div>
                        <div className={customClasses.choiceTexts}>
                          <p className={customClasses.choiceText}>Делитесь с коллегами и пациентами знаниями и опытом</p>
                          <p className={customClasses.choiceText}>Проходите тесты, участвуйте в тренингах и семинарах</p>
                          <p className={customClasses.choiceText}>Получайте доступ к самой актуальной информации</p>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
                <div className={customClasses.choiceItem}>
                  <ScrollAnimation offset={200} animateOnce={true} animateIn="fadeInRight">
                    <div className={customClasses.choiceItemWrap}>
                      <div className={customClasses.choiceImage}>
                        <img className={customClasses.choiceImg} src={image4} alt="image"/>
                      </div>
                      <div className={customClasses.choiceDescription}>
                        <div className={customClasses.choiceTitle}>Возможности:</div>
                        <div className={customClasses.choiceTexts}>
                          <p className={customClasses.choiceText}>Важны только Ваши знания, навыки и компетенции. Развивайте их и капитализируйте официально и законно</p>
                          <p className={customClasses.choiceText}>Коллеги и пациенты будут Вас привлекать для второго мнения, сопровождения, направлять к Вам или приходить на прием</p>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*WORK INSTRUCTION*/}
        <ScrollAnimation offset={200} animateOnce={true} animateIn="fadeInUp">
          <section className={customClasses.pageRow}>
            <div className={customClasses.container}>
              <h2 className={customClasses.subHeading}>Как это работает</h2>
              <div className={`${customClasses.workInstruction} ${customClasses.workInstructionSpecialist}`}>
                <div className={customClasses.workInstructionBlock}>
                  <ul className={customClasses.workInstructionSwitches}>
                    <li id="wISwitchS1" className={`${customClasses.workInstructionSwitch}${liID === 'wISwitchS1' ? ' ' + customClasses.isActive : ''}`} onClick={handleClick}>Стань участником Testing</li>
                    <li id="wISwitchS2" className={`${customClasses.workInstructionSwitch}${liID === 'wISwitchS2' ? ' ' + customClasses.isActive : ''}`} onClick={handleClick}>Будьте партнером <br/>для своих пациентов</li>
                    <li id="wISwitchS3" className={`${customClasses.workInstructionSwitch}${liID === 'wISwitchS3' ? ' ' + customClasses.isActive : ''}`} onClick={handleClick}>Занимайтесь наукой</li>
                    <li id="wISwitchS4" className={`${customClasses.workInstructionSwitch}${liID === 'wISwitchS4' ? ' ' + customClasses.isActive : ''}`} onClick={handleClick}>Осознанно развивайтесь</li>
                  </ul>
                </div>
                <div className={customClasses.workInstructionBlock}>
                  <div className={customClasses.workInstructionList}>

                    <div className={`${customClasses.workInstructionItem}${liID === 'wISwitchS1' ? ' ' + customClasses.isActive : ''}`}>
                      <div className={customClasses.workInstructionView}>
                        <ol className={customClasses.workInstructionViewList}>
                          <li className={customClasses.workInstructionViewItem}>
                            <div className={customClasses.workInstructionViewTitle}>Создайте свой личный кабинет</div>
                            <div className={customClasses.workInstructionViewText}>Пройдите авторизацию. Нам нужно будет определить Вашу изначальную квалификацию и подтверждение статуса</div>
                          </li>
                          <li className={customClasses.workInstructionViewItem}>
                            <div className={customClasses.workInstructionViewTitle}>Настройте свой профиль в личном кабинете</div>
                            <div className={customClasses.workInstructionViewText}>Настройка профиля позволит другим коллегам и пациентам узнать о Вас и находить Вас под конкретные задачи</div>
                          </li>
                          <li className={customClasses.workInstructionViewItem}>
                            <div className={customClasses.workInstructionViewTitle}>Оценить свои услуги</div>
                            <div className={customClasses.workInstructionViewText}>Настройте свои финансовые показатели. Поставьте условия взаимодействия с Вами</div>
                          </li>
                          <li className={customClasses.workInstructionViewItem}>
                            <div className={customClasses.workInstructionViewTitle}>Начинайте работать</div>
                            <div className={customClasses.workInstructionViewText}>Используйте все возможности Testing, присоединяйтесь к лучшим!</div>
                          </li>
                        </ol>
                      </div>
                    </div>

                    <div className={`${customClasses.workInstructionItem}${liID === 'wISwitchS2' ? ' ' + customClasses.isActive : ''}`}>
                      <div className={customClasses.workInstructionView}>
                        <ol className={customClasses.workInstructionViewList}>
                          <li className={customClasses.workInstructionViewItem}>
                            <div className={customClasses.workInstructionViewTitle}>Настройте рабочее место в МО</div>
                            <div className={customClasses.workInstructionViewText}>Если Вы планируете работать в медицинской организации, то по запросу мы сможем интегрировать передачу данных в МИС Вашей медицинской организации</div>
                          </li>
                          <li className={customClasses.workInstructionViewItem}>
                            <div className={customClasses.workInstructionViewTitle}>Настройте рабочее место вне МО</div>
                            <div className={customClasses.workInstructionViewText}>Если Вы хотите оказывать не медицинские услуги, то просто настройте свой домашний офис</div>
                          </li>
                          <li className={customClasses.workInstructionViewItem}>
                            <div className={customClasses.workInstructionViewTitle}>Определите Ваше время</div>
                            <div className={customClasses.workInstructionViewText}>Настройте свое расписание и определите условия доступа к нему. Пользователи системы будут записываться к Вам</div>
                          </li>
                          <li className={customClasses.workInstructionViewItem}>
                            <div className={customClasses.workInstructionViewTitle}>Начинайте работать</div>
                            <div className={customClasses.workInstructionViewText}>В МО Вы можете вести очный/онлайн прием пациентов. Вне МО — быть всегда на связи, сопровождать Ваших пациентов</div>
                          </li>
                        </ol>
                      </div>
                    </div>

                    <div className={`${customClasses.workInstructionItem}${liID === 'wISwitchS3' ? ' ' + customClasses.isActive : ''}`}>
                      <div className={customClasses.workInstructionView}>
                        <ol className={customClasses.workInstructionViewList}>
                          <li className={customClasses.workInstructionViewItem}>
                            <div className={customClasses.workInstructionViewTitle}>Создайте свой проект</div>
                            <div className={customClasses.workInstructionViewText}>Мы поможем создать научное исследование. Синопсис. Протокол. Регламентируемые документы. Подскажем с первичными и вторичными точками. Сформируем дата сет и реализуем статистические работы</div>
                          </li>
                          <li className={customClasses.workInstructionViewItem}>
                            <div className={customClasses.workInstructionViewTitle}>Включитесь в уже идущие проекты</div>
                            <div className={customClasses.workInstructionViewText}>Вы можете найти активные проекты и присоединиться как на этапе создания проектов, так и в качестве исследователя</div>
                          </li>
                          <li className={customClasses.workInstructionViewItem}>
                            <div className={customClasses.workInstructionViewTitle}>Будьте собой</div>
                            <div className={customClasses.workInstructionViewText}>Не нужно будет переносить данные в в таблицы, заниматься копированием историй болезни, использовать разные статистические программы. Просто занимайтесь практикой, обсуждайте полученные результаты</div>
                          </li>
                          <li className={customClasses.workInstructionViewItem}>
                            <div className={customClasses.workInstructionViewTitle}>Публикуйтесь и выступайте</div>
                            <div className={customClasses.workInstructionViewText}>Вы будете являться соавтором всех статей и выступлений. Честно и прозрачно каждый на входе оценивает вклад в проект и озвучивает ожидания от него</div>
                          </li>
                        </ol>
                      </div>
                    </div>

                    <div className={`${customClasses.workInstructionItem}${liID === 'wISwitchS4' ? ' ' + customClasses.isActive : ''}`}>
                      <div className={customClasses.workInstructionView}>
                        <ol className={customClasses.workInstructionViewList}>
                          <li className={customClasses.workInstructionViewItem}>
                            <div className={customClasses.workInstructionViewTitle}>Будьте в курсе происходящего</div>
                            <div className={customClasses.workInstructionViewText}>Настройте Вашу новостную ленту так, чтобы к Вам поступали самые последние данные из международных источников</div>
                          </li>
                          <li className={customClasses.workInstructionViewItem}>
                            <div className={customClasses.workInstructionViewTitle}>Владейте информацией</div>
                            <div className={customClasses.workInstructionViewText}>На любом этапе Вы можете обратиться к мировым рекомен- дациям. Автоматическая система подсказок будем Вам помогать</div>
                          </li>
                          <li className={customClasses.workInstructionViewItem}>
                            <div className={customClasses.workInstructionViewTitle}>Измеряйте свои знания и обучайтесь</div>
                            <div className={customClasses.workInstructionViewText}>Проходите тесты, участвуйте в тренингах. Записывайтесь на конференции и семинары</div>
                          </li>
                          <li className={customClasses.workInstructionViewItem}>
                            <div className={customClasses.workInstructionViewTitle}>Обучайте других</div>
                            <div className={customClasses.workInstructionViewText}>Создавайте интересные кейс стади. Создавайте опросы и тесты. Найдите единомышленников или оппонентов</div>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/*WHITE_BOOK*/}
        <ScrollAnimation offset={200} animateOnce={true} animateIn="fadeInUp">
          <section className={customClasses.pageRow}>
            <div className={customClasses.container}>
              <div className={customClasses.whiteBook}>
                <div className={customClasses.whiteBookBlock}>
                  <div className={customClasses.whiteBookImage}>
                  </div>
                </div>
                <div className={customClasses.whiteBookBlock}>
                  <h2 className={customClasses.subHeading}>Открываем знания</h2>
                  <div className={customClasses.whiteBookText}>
                    Используйте Белую книгу для своих пациентов. Самые частые вопросы, проверенные и актуальные ответы. Вы не упустите ничего важного, а пациент будет иметь доступ к информации постоянно. Создавайте с нами страницы Белой книги.
                  </div>
                  <Link to={SPECIALIST_EDUCATION_PAGE_LINK} className={`${customClasses.btn} ${customClasses.btnMid} ${customClasses.btnGrn}`}>Попробовать</Link>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/*TABLE SERVICES*/}
        <ScrollAnimation offset={200} animateOnce={true} animateIn="fadeInUp">
          <section className={customClasses.pageRow}>
            <div className={`${customClasses.tableBg} ${customClasses.tableBgGrn}`}>
              <div className={customClasses.container}>
                <table className={customClasses.tableServices}>
                  <thead>
                  <tr>
                    <th></th>
                    <th>Testing</th>
                    <th>Все остальное</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Одна среда — все возможности</td>
                    <td>
                      <img src={checkTabl} alt=""/>
                    </td>
                    <td>
                      <img src={crossTabl} alt=""/>
                    </td>
                  </tr>
                  <tr>
                    <td>Прозрачные условия работы и отчетности</td>
                    <td>
                      <img src={checkTabl} alt=""/>
                    </td>
                    <td>Не всегда</td>
                  </tr>
                  <tr>
                    <td>Безопасные и чистые данные</td>
                    <td>
                      <img src={checkTabl} alt=""/>
                    </td>
                    <td>
                      <img src={crossTabl} alt=""/>
                    </td>
                  </tr>
                  <tr>
                    <td>Создавайте свое имя. Инвестируйте в свои знания, навыки и компетенции</td>
                    <td>
                      <img src={checkTabl} alt=""/>
                    </td>
                    <td>
                      <img src={crossTabl} alt=""/>
                    </td>
                  </tr>
                  <tr>
                    <td>Для тех, кто ценит свое время и капитализирует свои знания</td>
                    <td>
                      <img src={checkTabl} alt=""/>
                    </td>
                    <td>
                      <img src={crossTabl} alt=""/>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/*PARTNERS*/}
        <ScrollAnimation offset={200} animateOnce={true} animateIn="fadeInUp">
          <section className={customClasses.pageRow}>
            <div className={customClasses.container}>
              <h2 className={customClasses.subHeading}>Мы развиваем Testing <br/> с экспертами из</h2>
              <div className={customClasses.partners}>
                <div className={customClasses.partnersList}>
                  <div className={customClasses.partnersItem}>
                    <div className={customClasses.partnersImage}>
                      <img src={partners1} alt=""/>
                    </div>
                    <div className={customClasses.partnersName}>Российский национальный исследовательский медицинский университет имени Н.И. ПироговаZ</div>
                  </div>
                  <div className={customClasses.partnersItem}>
                    <div className={customClasses.partnersImage}>
                      <img src={partners2} alt=""/>
                    </div>
                    <div className={customClasses.partnersName}>Первый Санкт-Петербургский государственный медицинский университет им. акад. И.П. Павлова</div>
                  </div>
                  <div className={customClasses.partnersItem}>
                    <div className={customClasses.partnersImage}>
                      <img src={partners3} alt=""/>
                    </div>
                    <div className={customClasses.partnersName}>Новосибирский государственный медицинский университет</div>
                  </div>
                  <div className={customClasses.partnersItem}>
                    <div className={customClasses.partnersImage}>
                      <img src={partners4} alt=""/>
                    </div>
                    <div className={customClasses.partnersName}>Казанская государственная медицинская академия</div>
                  </div>
                  <div className={customClasses.partnersItem}>
                    <div className={customClasses.partnersImage}>
                      <img src={partners5} alt=""/>
                    </div>
                    <div className={customClasses.partnersName}>Национальный медицинский исследовательский центр нейрохирургии им. акад. Николая Ниловича Бурденко</div>
                  </div>
                  <div className={customClasses.partnersItem}>
                    <div className={customClasses.partnersImage}>
                      <img src={partners6} alt=""/>
                    </div>
                    <div className={customClasses.partnersName}>Башкирский государственный медицинский университет</div>
                  </div>
                  <div className={customClasses.partnersItem}>
                    <div className={customClasses.partnersImage}>
                      <img src={partners7} alt=""/>
                    </div>
                    <div className={customClasses.partnersName}>Медицинская ассоциация врачей и центров рассеянного склероза и других нейроиммунологических заболеваний</div>
                  </div>
                  <div className={customClasses.partnersItem}>
                    <div className={customClasses.partnersImage}>
                      <img src={partners8} alt=""/>
                    </div>
                    <div className={customClasses.partnersName}>Национальное общество нейрорадиологов</div>
                  </div>
                  <div className={customClasses.partnersItem}>
                    <div className={customClasses.partnersImage}>
                      <img src={partners9} alt=""/>
                    </div>
                    <div className={customClasses.partnersName}>Санкт-Петербургский Центр Рассеянного Склероза</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        <div className={customClasses.promoOverflow}>
          <div className={`${customClasses.promo} ${customClasses.promoSpec} ${customClasses.promoFooter}`}>
            <div className={customClasses.promoPosition}>
              <h1 className={customClasses.promoTitle}>Попробуйте Testing в деле</h1>
              <p className={customClasses.promoSubtitle}>Для тех, кто разделяет нашу философию холистического <br/> подхода, осознанного развития и ценит свое время.</p>
              <a target="_blank" href="http://Testing.pro" className={`${customClasses.btn} ${customClasses.btnMid}`}>Работать с нами</a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
    // <button className={classes.myButton}>SpecialistPage</button>
  )
};

export default SpecialistPage;
