import React, {useEffect} from 'react';

import image1 from '../../../assets/images/png/choiceСommunication.png';
import image2 from '../../../assets/images/png/choiceSearch.png';
import image3 from '../../../assets/images/png/choiceDoc.png';
import image4 from '../../../assets/images/png/choiceSecurity.png';
import checkTabl from '../../../assets/images/svg/checkTabl.svg';
import crossTabl from '../../../assets/images/svg/crossTabl.svg';
import partners1 from '../../../assets/images/png/partners/partners1.png';
import partners2 from '../../../assets/images/png/partners/partners2.png';
import partners3 from '../../../assets/images/png/partners/partners3.png';
import partners4 from '../../../assets/images/png/partners/partners4.png';
import partners5 from '../../../assets/images/png/partners/partners5.png';
import partners6 from '../../../assets/images/png/partners/partners6.png';
import partners7 from '../../../assets/images/png/partners/partners7.png';
import partners8 from '../../../assets/images/png/partners/partners8.png';
import partners9 from '../../../assets/images/png/partners/partners9.png';

import useStyles from "./style";
import rootStyles from "../../Root/style";
import {Link} from "react-router-dom";
import {PATIENT_EDUCATION_PAGE_LINK} from "../../../config/pageLinks";

import "animate.css/animate.min.css";
import  ScrollAnimation from 'react-animate-on-scroll';

const PatientPage = props => {
  // window.scrollTo( 0, 0 );
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
      case 0: setLiID('wISwitchP1');
        break;
      case 1: setLiID('wISwitchP2');
        break;
      case 2: setLiID('wISwitchP3');
        break;
      case 3: setLiID('wISwitchP4');
        break;
      // case 4: setLiID('team5');
      //   break;
    }
  };

  return (
    <React.Fragment>
      <div className={customClasses.patientPage}>
        <div className={customClasses.promoOverflow}>
          <div className={`${customClasses.promo} ${customClasses.promoPatient}`}>
            <div className={customClasses.promoPosition}>
              <h1 className={customClasses.promoTitle}>Testing — надежный <br/> персональный помощник</h1>
              <p className={customClasses.promoSubtitle}>Улучшаем и поддерживаем качество жизни <br/> пациентов с учетом особенностей их здоровья</p>
              <a target="_blank" href='http://Testing.net/create_account' className={`${customClasses.btn} ${customClasses.btnMid}`}>Зарегистрироваться</a>
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
                      <div className={customClasses.choiceView}>
                        <div className={customClasses.choiceTitle} >Для тех, кто:</div>
                        <div className={customClasses.choiceTexts}>
                          <p className={customClasses.choiceText}>Хочет быть на прямой связи со своим врачом</p>
                          <p className={customClasses.choiceText}>Желает подтвердить диагноз и лечение</p>
                          <p className={customClasses.choiceText}>Планирует жизнь с учётом <br/> особенностей своего здоровья</p>
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
                      <div className={customClasses.choiceView}>
                        <div className={customClasses.choiceTitle} >Когда необходимо получить:</div>
                        <div className={customClasses.choiceTexts}>
                          <p className={customClasses.choiceText}>Достоверную информацию о заболевании</p>
                          <p className={customClasses.choiceText}>Второе мнение о диагнозе и лечении</p>
                          <p className={customClasses.choiceText}>Консультацию врача для <br/> принятия совместного решения</p>
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
                      <div className={customClasses.choiceView}>
                        <div className={customClasses.choiceTitle} >Условия использования:</div>
                        <div className={customClasses.choiceTexts}>
                          <p className={customClasses.choiceText}>Самые важные документы и обследования <br/> всегда под рукой. Не нужно носить с собой диски, заключения и анализы. Просто откройте Testing</p>
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
                      <div className={customClasses.choiceView}>
                        <div className={customClasses.choiceTitle} >Ваша информация в Testing:</div>
                        <div className={customClasses.choiceTexts}>
                          <p className={customClasses.choiceText}>Надежно охраняется, в том числе, согласно <br/> требованиям законодательства</p>
                          <p className={customClasses.choiceText}>Принадлежит Вам, и Вы сами решаете,<br/> кому и когда предоставлять доступ к ней</p>
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
              <div className={`${customClasses.workInstruction} ${customClasses.workInstructionPatient}`}>
                <div className={customClasses.workInstructionBlock}>
                  <ol className={customClasses.workInstructionSwitches}>
                    <li id="wISwitchP1" className={`${customClasses.workInstructionSwitch}${liID === 'wISwitchP1' ? ' ' + customClasses.isActive : ''}`} onClick={handleClick}>Найдите Вашего врача</li>
                    <li id="wISwitchP2" className={`${customClasses.workInstructionSwitch}${liID === 'wISwitchP2' ? ' ' + customClasses.isActive : ''}`} onClick={handleClick}>Получайте и храните <br/>Ваши медицинские данные</li>
                    <li id="wISwitchP3" className={`${customClasses.workInstructionSwitch}${liID === 'wISwitchP3' ? ' ' + customClasses.isActive : ''}`} onClick={handleClick}>Получайте доступ к последней <br/>проверенной информации</li>
                    <li id="wISwitchP4" className={`${customClasses.workInstructionSwitch}${liID === 'wISwitchP4' ? ' ' + customClasses.isActive : ''}`} onClick={handleClick}>Планируйте Ваше здоровье <br/>с Вашим лечащим врачом</li>
                  </ol>
                </div>
                <div className={customClasses.workInstructionBlock}>
                  <div className={customClasses.workInstructionList}>

                    <div className={`${customClasses.workInstructionItem}${liID === 'wISwitchP1' ? ' ' + customClasses.isActive : ''}`}>
                      <div className={customClasses.workInstructionView}>
                        <ol className={customClasses.workInstructionViewList}>
                          <li className={customClasses.workInstructionViewItem}>
                            <div className={customClasses.workInstructionViewTitle}>Создайте свой личный кабинет</div>
                            <div className={customClasses.workInstructionViewText}>Пройдите регистрацию и пользуйтесь всеми <br/> сервисами без внесения дополнительных данных</div>
                          </li>
                          <li className={customClasses.workInstructionViewItem}>
                            <div className={customClasses.workInstructionViewTitle}>Выберите специалиста, услугу, заболевание</div>
                            <div className={customClasses.workInstructionViewText}>Мы найдем услуги и специалистов,<br/> удобно расположенных именно для Вас</div>
                          </li>
                          <li className={customClasses.workInstructionViewItem}>
                            <div className={customClasses.workInstructionViewTitle}>Запишитесь и получите уведомление</div>
                            <div className={customClasses.workInstructionViewText}>Специалист уже будет знать о Вас <br/> и особенностях Вашего заболевания</div>
                          </li>
                          <li className={customClasses.workInstructionViewItem}>
                            <div className={customClasses.workInstructionViewTitle}>Посетите прием</div>
                            <div className={customClasses.workInstructionViewText}>Получите все документы после <br/> приема в личном кабинете</div>
                          </li>
                        </ol>
                      </div>
                    </div>

                    <div className={`${customClasses.workInstructionItem}${liID === 'wISwitchP2' ? ' ' + customClasses.isActive : ''}`}>
                      <div className={customClasses.workInstructionView}>
                        <ol className={customClasses.workInstructionViewList}>
                          <li className={customClasses.workInstructionViewItem}>
                            <div className={customClasses.workInstructionViewTitle}>Загрузите Ваши медицинские данные</div>
                            <div className={customClasses.workInstructionViewText}>Сделайте фотографии документов, приложите <br/> снимки МРТ или КТ, заполните специальные анкеты</div>
                          </li>
                          <li className={customClasses.workInstructionViewItem}>
                            <div className={customClasses.workInstructionViewTitle}>Запросите Ваши медицинские данные</div>
                            <div className={customClasses.workInstructionViewText}>Согласно законодательству, Вам обязаны <br/> предоставить информацию о Вашем здоровье</div>
                          </li>
                          <li className={customClasses.workInstructionViewItem}>
                            <div className={customClasses.workInstructionViewTitle}>Получайте медицинские данные</div>
                            <div className={customClasses.workInstructionViewText}>После приемов врачей,<br/> онлайн- консультаций, второго мнения</div>
                          </li>
                          <li className={customClasses.workInstructionViewItem}>
                            <div className={customClasses.workInstructionViewTitle}>Управляйте своими данными</div>
                            <div className={customClasses.workInstructionViewText}>Определите какую информацию и какому врачу Вы хотите предоставить. Не нужно повторять всю историю много раз</div>
                          </li>
                        </ol>
                      </div>
                    </div>

                    <div className={`${customClasses.workInstructionItem}${liID === 'wISwitchP3' ? ' ' + customClasses.isActive : ''}`}>
                      <div className={customClasses.workInstructionView}>
                        <ol className={customClasses.workInstructionViewList}>
                          <li className={customClasses.workInstructionViewItem}>
                            <div className={customClasses.workInstructionViewTitle}>Откройте Белую книгу</div>
                            <div className={customClasses.workInstructionViewText}>Выберите заболевание, получите <br/> доступ к проверенной информации</div>
                          </li>
                          <li className={customClasses.workInstructionViewItem}>
                            <div className={customClasses.workInstructionViewTitle}>Проверьте диагноз и лечение</div>
                            <div className={customClasses.workInstructionViewText}>Внесите свою информацию, и система сверит Ваш персональный случай с международными рекомендациями</div>
                          </li>
                          <li className={customClasses.workInstructionViewItem}>
                            <div className={customClasses.workInstructionViewTitle}>Медицина, право и финансы</div>
                            <div className={customClasses.workInstructionViewText}>Узнайте входит ли данный вид лечения в программу государственных гарантий и что сделать, чтобы его получить</div>
                          </li>
                        </ol>
                      </div>
                    </div>

                    <div className={`${customClasses.workInstructionItem}${liID === 'wISwitchP4' ? ' ' + customClasses.isActive : ''}`}>
                      <div className={customClasses.workInstructionView}>
                        <ol className={customClasses.workInstructionViewList}>
                          <li className={customClasses.workInstructionViewItem}>
                            <div className={customClasses.workInstructionViewTitle}>Выберите врача</div>
                            <div className={customClasses.workInstructionViewText}>Найдите в среде или пригласите <br/> врача, который будет Вас сопровождать</div>
                          </li>
                          <li className={customClasses.workInstructionViewItem}>
                            <div className={customClasses.workInstructionViewTitle}>Создайте план</div>
                            <div className={customClasses.workInstructionViewText}>Определите условия Ваших коммуникаций: запланируйте прием, четкий порядок действий и ожидаемые результаты</div>
                          </li>
                          <li className={customClasses.workInstructionViewItem}>
                            <div className={customClasses.workInstructionViewTitle}>Выполняйте план</div>
                            <div className={customClasses.workInstructionViewText}>Получайте рекомендации по прохождению обследований, напоминания о процедурах. Вносите свою информацию, заметки, жалобы, которые будут доступны для анализа</div>
                          </li>
                          <li className={customClasses.workInstructionViewItem}>
                            <div className={customClasses.workInstructionViewTitle}>Получайте результат</div>
                            <div className={customClasses.workInstructionViewText}>Достигнув поставленной цели, ставьте себе новые. Повышайте качество жизни с привлечением смежных специалистов</div>
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
                    Повышайте уровень компетентности с помощью нашего обучающего руководства — Белой книги. Узнавайте больше о своем заболевании, делайте выводы и принимайте совместные решения с Вашим лечащим врачом.
                  </div>
                  <Link to={PATIENT_EDUCATION_PAGE_LINK} className={`${customClasses.btn} ${customClasses.btnMid}`}>Попробовать</Link>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/*TABLE SERVICES*/}
        <ScrollAnimation offset={200} animateOnce={true} animateIn="fadeInUp">
          <section className={customClasses.pageRow}>
            <div className={customClasses.tableBg}>
              <div className={customClasses.container}>
                <table className={customClasses.tableServices}>
                  <thead>
                  <tr>
                    <th></th>
                    <th>Testing</th>
                    <th>Стандартная амбулаторная помощь</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Постоянная поддержка лечащим врачом</td>
                    <td>
                      <img src={checkTabl} alt=""/>
                    </td>
                    <td>
                      <img src={crossTabl} alt=""/>
                    </td>
                  </tr>
                  <tr>
                    <td>Четкое планирование времени визитов и никаких очередей</td>
                    <td>
                      <img src={checkTabl} alt=""/>
                    </td>
                    <td>Не всегда</td>
                  </tr>
                  <tr>
                    <td>Ваши медицинские данные всегда с Вами</td>
                    <td>
                      <img src={checkTabl} alt=""/>
                    </td>
                    <td>
                      <img src={crossTabl} alt=""/>
                    </td>
                  </tr>
                  <tr>
                    <td>Возможность получения второго мнения</td>
                    <td>
                      <img src={checkTabl} alt=""/>
                    </td>
                    <td>
                      <img src={crossTabl} alt=""/>
                    </td>
                  </tr>
                  <tr>
                    <td>Доступ к самым последним проверенным данным по Вашему заболеванию</td>
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
        <ScrollAnimation offset={200} delay={300} animateOnce={true} animateIn="fadeInUp">
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
          <div className={`${customClasses.promo} ${customClasses.promoPatient} ${customClasses.promoFooter}`}>
            <div className={customClasses.promoPosition}>
              <h1 className={customClasses.promoTitle}>Попробуйте Testing в деле</h1>
              <p className={customClasses.promoSubtitle}>Ваше здоровье в Ваших руках. Научитесь, совместно <br/> с лечащим врачом, выбирать лучшее для Вас.</p>
              <a target="_blank" href='http://Testing.net/create_account' className={`${customClasses.btn} ${customClasses.btnMid}`}>Зарегистрироваться</a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>

    // <button className={classes.myButton}>PatientPage</button>
  )
};

export default PatientPage;
