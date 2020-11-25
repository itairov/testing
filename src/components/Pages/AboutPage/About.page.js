import React, { useCallback, useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";


import useStyles from "./style";
import rootStyles from "../../Root/style";
import filterCoordinates from '../../../config/filterCoordinates';
import { ABOUT_LOGO } from '../../../config';
import image1 from '../../../assets/images/png/telemedicine.png';
import image2 from '../../../assets/images/png/team.png';
import image3 from '../../../assets/images/jpg/optimization/pacient.jpg';
import image4 from '../../../assets/images/jpg/optimization/specialist.jpg';
import notificLogo from '../../../assets/images/svg/notificLogo.svg';
import notificLogoGrn from '../../../assets/images/svg/notificLogogrn.svg';
import arrowBtnL from '../../../assets/images/svg/arrowBtnL.svg';
import arrowBtnR from '../../../assets/images/svg/arrowBtnR.svg';

import "animate.css/animate.min.css";
import  ScrollAnimation from 'react-animate-on-scroll';

import {getSvgTeam, svgObject, svgObject1, svgObject2} from '../../../helpers';

import {GET_STARTED} from "../../../config/pageLinks";
import {API_GOOGLE_SITE, API_GOOGLE_SECRET_KEY, FEEDBACK_POST, USER_AGREEMENT, CONSENT_TO_PROCESSING} from '../../../config';
import TermsOfUse from "../../Templates/DocumentTemplate/TermsOfUse";
import PersonalData from "../../Templates/DocumentTemplate/PersonalData";
import ConsentToProcessingPatient from "../../Templates/DocumentTemplate/ConsentToProcessingPatient";
import ConsentToProcessingSpecialist from "../../Templates/DocumentTemplate/ConsentToProcessingSpecialist";
import ModalTemplates from "../../Templates/ModalTemplates/ModalTemplates";


const AboutPage = props => {
  // window.scrollTo( 0, 0 );
  const classes = useStyles();
  const customClasses = rootStyles();
  //const { setIsHiddenHeader } = props;
  const [ openModal, setOpenModal ] = useState(false);
  const [ typeOfModal, setTypeOfModal ] = useState(null);

  const [ liID, setLiID ] = useState(null);
  const [ filterD1X,setFilterD1X] = useState('396');
  const [ filterD1Y,setFilterD1Y] = useState('509');
  const [ filterD2X,setFilterD2X] = useState('372');
  const [ filterD2Y,setFilterD2Y] = useState('188');

  const setFilters = (name) => {   
    setFilterD1X(filterCoordinates[name].d1.x)
    setFilterD1Y(filterCoordinates[name].d1.y)
    setFilterD2X(filterCoordinates[name].d2.x)
    setFilterD2Y(filterCoordinates[name].d2.y)
  }

  const handleClick = event => {
    const id = event.target.id;
    setLiID(id);
    const name = id;
    setFilters(name);

    // if (id === 'team1') {
    //   setFilterD1X(filterCoordinates.filterOne.d1.x)
    //   setFilterD1Y(filterCoordinates.filterOne.d1.y)
    //   setFilterD2X(filterCoordinates.filterOne.d2.x)
    //   setFilterD2Y(filterCoordinates.filterOne.d2.y)
    // }
    // else if (id === 'team2') {
    //   setFilterD1X(filterCoordinates.filterTwo.d1.x)
    //   setFilterD1Y(filterCoordinates.filterTwo.d1.y)
    //   setFilterD2X(filterCoordinates.filterTwo.d2.x)
    //   setFilterD2Y(filterCoordinates.filterTwo.d2.y)
    // }

  };
  const handleClickAgreement = type =>{    
    setOpenModal(true);
    setTypeOfModal(type);
  };

  const [ counter, setCounter ] = useState(0);

  const handleCounter = param => {
    let prevCounter = liID? +liID.slice(liID.length-1) : 0;

    if(param === '+') {
      prevCounter < 5 ? prevCounter++ : prevCounter = 1;         
    } else if(param === '-') {
      prevCounter > 1 ? prevCounter-- : prevCounter = 5;
    }
    setFilters('team' + (prevCounter));
    setLiID('team' + (prevCounter));
      
     return prevCounter;
  }

  useEffect(() => {
    if(counter === 5) {
      setCounter(0);
    } else if(counter === -1) {
      setCounter(4);
    }

    handleChangeCounter();
  }, [counter]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const handleChangeCounter = event => {
    setLiID('team' + (counter+1));
  };

  const [ forRequest, setForRequest ] = useState({
    full_name: null,
    email: null,
    question: null,
    terms_use: false,
    personal_data: false,
  });

  const refForRequest = useRef(null);
  useEffect(() => {
    refForRequest.current = {...forRequest}
  }, [forRequest]);




  const recaptchaRef = useRef(null);
  const handleSubmit = useCallback(event => {
    event.preventDefault();

    // const recaptchaValue = recaptchaRef.current.getValue();
    const { personal_data, terms_use } = refForRequest.current;

    if(!terms_use) {
      return alert('Примите условия пользовательского соглашения');
    }
    if(!personal_data) {
      return alert('Дайте свое согласие на обработку персональных данных');
    }

    refForRequest.current.terms_use = new Date();
    refForRequest.current.personal_data = new Date();

    // if(!recaptchaValue) {
    //   return alert('Подтвердите, что вы не робот');
    // }

    const data = {
      ...refForRequest.current,
      // reCaptchaToken: recaptchaValue
    };

    (
      async () => {
        try {
          const response = await fetch(FEEDBACK_POST, {
            method: 'post',
            headers: { "content-type": "application/json; charset=utf-8" },
            body: JSON.stringify({...data})
          });

          const commits = await response.json();
        } catch (e) {
          console.error(e.message);
        } finally {
          setForRequest({
            full_name: null,
            email: null,
            question: null,
            terms_use: false,
            personal_data: false,
          });

          alert('Ваша заяка принята');
        }
      }
    )();
  }, []);
 
  const handleChange = useCallback(event => {
    const name = event.target.name;
    const type = event.target.type;
    let value = type === 'checkbox' ? event.target.checked : event.target.value;

    setForRequest(prevForRequest => {
      return {
        ...prevForRequest,
        [name]: value
      }
    });
  }, [forRequest]);

  const handleCaptchaChange = event => {
    console.log(event.target.value, 'CAPTCHA')
  };

  const form = (
    <ScrollAnimation offset={200} animateOnce={true} animateIn="fadeInUp">
      <form onSubmit={handleSubmit}>
        <section className={customClasses.pageRow}>
          <div className={customClasses.container}>
            <div className={classes.feedback}>
              <div className={classes.feedbackWrap}>
                <div className={classes.feedbackBlock}>
                  <div className={classes.feedbackBox}>
                    <h2 className={customClasses.subHeading}>Обратная связь</h2>
                    <p className={classes.feedbackText}>Остались вопросы? Напишите нам — мы ответим в ближайшее время!</p>
                  </div>
                </div>
                <div className={`${classes.feedbackBlock} ${classes.feedbackFormWrap}`}>
                  <div className={classes.inputGroup}>
                    <input
                      onChange={handleChange}
                      value={forRequest.full_name || ''}
                      name="full_name"
                      className={classes.input}
                      required
                      type="text"
                    />
                    <span className={classes.inputBar}></span>
                    <label className={classes.inputLabel} htmlFor="">Фамилия Имя Отчество</label>
                  </div>
                  <div className={classes.inputGroup}>
                    <input
                      onChange={handleChange}
                      value={forRequest.email || ''}
                      name="email"
                      className={classes.input}
                      required type="text"
                    />
                    <span className={classes.inputBar}></span>
                    <label className={classes.inputLabel} htmlFor="">E-mail</label>
                  </div>
                  <div className={classes.inputGroup}>
                    <textarea
                      onChange={handleChange}
                      value={forRequest.question || ''}
                      name="question"
                      rows={6}
                      className={classes.input}
                      required
                      type="text"
                    />
                    <span className={classes.inputBar}></span>
                    <label className={classes.inputLabel} htmlFor="">Ваш вопрос</label>
                  </div>
                  <div className={classes.feedbackAgreement}>
                    <input
                      onChange={handleChange}
                      checked={forRequest.terms_use}
                      name="terms_use"
                      type="checkbox"
                      id="d">

                    </input>
                    <label htmlFor="d"></label>
                    <p>Я принимаю условия <br/>
                      <span onClick={()=>handleClickAgreement(USER_AGREEMENT)}>
                        пользовательского соглашения
                      </span>
                    </p>
                  </div>
                  <div className={classes.feedbackAgreement}>
                    <input
                      onChange={handleChange}
                      checked={forRequest.personal_data}
                      name="personal_data"
                      className={classes.aaaaa}
                      type="checkbox"
                      id="f">

                      </input>
                    <label htmlFor="f"></label>
                    <p>Я даю согласие на обработку <br/>
                      <span onClick={()=>handleClickAgreement(CONSENT_TO_PROCESSING)}>
                        персональных данных
                      </span>
                    </p>
                  </div>
                  <div style={{display: 'none'}}>
                    <ReCAPTCHA
                      hl="ru"
                      size="invisible"
                      ref={recaptchaRef}
                      sitekey={API_GOOGLE_SITE}
                      onChange={handleCaptchaChange}
                    />
                  </div>
                  <button className={`${customClasses.btn} ${customClasses.btnMax}`}>Отправить</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </ScrollAnimation>
  );

  return (
    <React.Fragment>
      <div className={customClasses.patientPage}>
        {/*Обратная связь*/}
        <div className={customClasses.promoOverflow}>
          <div className={`${customClasses.promo} ${customClasses.promoAbout}`}>
            <div className={customClasses.promoPosition}>
              <h1 className={customClasses.promoTitle}>Testing — уникальная <br/> медицинская IT-среда</h1>
              <p className={customClasses.promoSubtitle}>Принципиально новый подход к здоровью и сопровождению <br/> пациентов с хроническими заболеваниями</p>
              {/*<Link to={GET_STARTED} className={`${customClasses.btn} ${customClasses.btnMid}`}>Начать работу</Link>*/}
            </div>
          </div>
        </div>

        {/*INFORMATION*/}
        <section className={customClasses.pageRow}>
          <div className={customClasses.container}>
            <div className={classes.information}>
              <h2 className={customClasses.subHeading}>Что такое Testing</h2>
              <div className={`${classes.boxRow} ${classes.informationLeft}`}>
                  <div className={`${classes.boxCol} ${classes.boxColLeft}`}>
                    <ScrollAnimation offset={150} animateOnce={true} animateIn="fadeInLeft">
                        <img src={image1} alt="Телемедецина"/>
                    </ScrollAnimation>
                  </div>
                  <div className={`${classes.boxCol} ${classes.boxColRight}`}>
                      <ul className={classes.informationList}>
                        <ScrollAnimation offset={180} animateOnce={true} animateIn="fadeInUp">
                          <li className={classes.informationItem}>
                            <div className={classes.informationTitle}>Врач и пациент — партнеры</div>
                            <p className={classes.informationText}>Врач в среде Testing разделяет нашу философию и становится для своих пациентов партнером. Основные цели обсуждаются и ставятся совместно и максимально открыто.</p>
                          </li>
                        </ScrollAnimation>
                        <ScrollAnimation offset={180} animateOnce={true} animateIn="fadeInUp">
                          <li className={classes.informationItem}>
                            <div className={classes.informationTitle}>Принцип доказательной медицины</div>
                            <p className={classes.informationText}>Решения принимаются на основании проверенных данных, а не частных мнений. Это позволяет избежать бессмысленных обследований или повторных процедур. Мы экономим Ваши ресурсы.</p>
                          </li>
                        </ScrollAnimation>
                        <ScrollAnimation offset={180} animateOnce={true} animateIn="fadeInUp">
                          <li className={classes.informationItem}>
                            <div className={classes.informationTitle}>Осознанность</div>
                            <p className={classes.informationText}>Testing предоставит полную актуальную информацию: что, зачем и почему делать в конкретном случае. Пациент ясно понимает свой план действий, а врач сопровождает его по этому плану. Testing — Ваш надежный помощник.</p>
                          </li>
                       </ScrollAnimation>
                      </ul>
                  </div>
              </div>
            </div>
          </div>
        </section>

        {/*INFORMATION*/}
        <section className={customClasses.pageRow}>
          <div className={customClasses.container}>
            <div className={classes.information}>
              <h2 className={customClasses.subHeading}>Почему нам доверяют</h2>
              <div className={`${classes.boxRow} ${classes.informationRight}`}>
                <div className={`${classes.boxCol} ${classes.boxColRight}`}>
                  <ScrollAnimation offset={150} animateOnce={true} animateIn="fadeInRight">
                    <img src={image2} alt="Наша команда"/>
                  </ScrollAnimation>
                </div>
                <div className={`${classes.boxCol} ${classes.boxColLeft}`}>
                    <ul className={classes.informationList}>
                      <ScrollAnimation offset={180} animateOnce={true} animateIn="fadeInUp">
                        <li className={classes.informationItem}>
                          <div className={classes.informationTitle}>Профессионализм</div>
                          <p className={classes.informationText}>Каждый день над Testing работает большое количество ученых, врачей, аналитиков и технологов. Это живая интеллектуальная экосистема, построенная на реальных чистых данных. Это позволяет врачу с пациентом выбирать лучшие персонализированные решения.</p>
                        </li>
                      </ScrollAnimation>
                      <ScrollAnimation offset={180} animateOnce={true} animateIn="fadeInUp">
                        <li className={classes.informationItem}>
                          <div className={classes.informationTitle}>Безопасность</div>
                          <p className={classes.informationText}>Уникальная технология разработки построена таким образом, что данные пациента принадлежат только пациенту, и он сам решает кому можно их предоставлять. Мы несем полную ответственность за сохранность и деперсонализацию данных.</p>
                        </li>
                      </ScrollAnimation>
                      <ScrollAnimation offset={180} animateOnce={true} animateIn="fadeInUp">
                        <li className={classes.informationItem}>
                          <div className={classes.informationTitle}>Качество и холистический подход</div>
                          <p className={classes.informationText}>Гарантией высокого качества является принцип партнерства между врачом и пациентом. Мы смотрим на проблему комплексно, привлекаем всех специалистов и даем лучшие решения.</p>
                        </li>
                      </ScrollAnimation>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*CLIENT*/}
        <section className={customClasses.pageRow} style={{marginBottom: '187px'}}>
          <div className={`${classes.infoClient} ${classes.clientLeft}`}>
            <div className={classes.boxRow}>
              <div className={`${classes.boxCol} ${classes.boxColLeft}`}>
                <ScrollAnimation offset={200} animateOnce={true} animateIn="fadeInLeft">
                  <div className={classes.notifications}>
                    <div className={classes.notificationsItem}>
                      <div className={classes.notificationsImage}>
                        <img src={notificLogo} alt="Логотип уведомление"/>
                      </div>
                      <div className={classes.notificationsText}>Вы записаны в 12:30 на МРТ, прочитайте как подготовиться к обследованию правильно.</div>
                    </div>
                    <div className={classes.notificationsItem}>
                      <div className={classes.notificationsImage}>
                        <img src={notificLogo} alt="Логотип уведомление"/>
                      </div>
                      <div className={classes.notificationsText}>Для постановки диагноза достаточно имеющихся данных, чтобы выбрать тактику лечения.</div>
                    </div>
                  </div>
                  <div className={classes.infoClientImg}>
                    <img src={image3} alt="Пациентам"/>
                  </div>
                </ScrollAnimation>
              </div>
              <div className={`${classes.boxCol} ${classes.boxColRight}`}>
                <ScrollAnimation offset={200} animateOnce={true} animateIn="fadeInRight">
                  <h2 className={customClasses.subHeading}>Для пациентов</h2>
                  <ul className={classes.infoClientList}>
                    <li className={classes.infoClientItem}>Найдите своего врача <br/> и будьте с ним всегда на связи</li>
                    <li className={classes.infoClientItem}>Получайте и храните свои <br/> медицинские данные</li>
                    <li className={classes.infoClientItem}>Имейте постоянный доступ <br/> к проверенной и достоверной <br/> информации о заболевании и лечении</li>
                    <li className={classes.infoClientItem}>Планируйте жизнь с учётом <br/> особенностей своего здоровья</li>
                  </ul>
                  <a target="_blank" href="http://Testing.ru/patient" className={`${customClasses.btn} ${customClasses.btnMid}`}>Как это работает</a>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/*CLIENT*/}
        <section className={customClasses.pageRow} style={{marginBottom: '259px'}}>
          <div className={`${classes.infoClient} ${classes.clientRight}`}>
            <div className={classes.boxRow}>
              <div className={`${classes.boxCol} ${classes.boxColRight}`}>
                <ScrollAnimation offset={200} animateOnce={true} animateIn="fadeInRight">
                  <div className={classes.notifications}>
                    <div className={classes.notificationsItem}>
                      <div className={classes.notificationsImage}>
                        <img src={notificLogoGrn} alt="Логотип уведомление"/>
                      </div>
                      <div className={classes.notificationsText}>У вашего пациента зафиксирована резистентность к проводимой терапии.</div>
                    </div>
                    <div className={classes.notificationsItem}>
                      <div className={classes.notificationsImage}>
                        <img src={notificLogoGrn} alt="Логотип уведомление"/>
                      </div>
                      <div className={classes.notificationsText}>Пациенту нужно провести осмотр не позднее чем через 12 недель. Запланируйте визит.</div>
                    </div>
                  </div>
                  <div className={classes.infoClientImg}>
                    <img src={image4} alt="Специалистам"/>
                  </div>
                </ScrollAnimation>
              </div>
              <div className={`${classes.boxCol} ${classes.boxColLeft}`}>
                <ScrollAnimation offset={200} animateOnce={true} animateIn="fadeInLeft">
                  <h2 className={`${customClasses.subHeading} ${customClasses.subHeadingGrn}`}>Для специалистов</h2>
                  <ul className={classes.infoClientList}>
                    <li className={classes.infoClientItem}>Присоединяйтесь к новому <br/> сообществу профессионалов</li>
                    <li className={classes.infoClientItem}>Сопровождайте своих пациентов,<br/>честно и открыто капитализируйте <br/> свое время и знания</li>
                    <li className={classes.infoClientItem}>Практика. Наука. Обучение</li>
                  </ul>
                  <a target="_blank" href="http://Testing.pro" className={`${customClasses.btn} ${customClasses.btnMid} ${customClasses.btnGrn}`}>Узнать больше</a>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>

        {/*TEAM*/}
        <ScrollAnimation offset={200} animateOnce={true} animateIn="fadeInUp">
        <section className={customClasses.pageRow}>
          {/*<div className={customClasses.container}>*/}
            <div className={classes.team}>
              <div className={`${classes.teamBlock} ${classes.teamBlockLeft}`}>
                <h2 className={customClasses.subHeading}>Наша команда</h2>
                <div className={classes.teamSwitches}>
                  <button onClick={() => handleCounter('-')} className={classes.teamSwitch}>
                    <img className={classes.teamSwitchIcon} src={arrowBtnL} alt=""/>
                  </button>
                  <button onClick={() => handleCounter('+')} className={classes.teamSwitch}>
                    <img className={classes.teamSwitchIcon} src={arrowBtnR} alt=""/>
                  </button>
                </div>
                <ul className={classes.teamList}>
                  <li id='team1' className={`${classes.teamItem}${liID === 'team1' ? ' ' + classes.teamItemActive : ''}`} onClick={handleClick}>
                    <div className={classes.teamTitle}>> 40 программистов</div>
                    <div className={classes.teamText}>Каждый час мы создаем и обучаем среду Testing, заботимся о ее поддержании</div>
                  </li>
                  <li id='team2' className={`${classes.teamItem}${liID === 'team2' ? ' ' + classes.teamItemActive : ''}`} onClick={handleClick}>
                    <div className={classes.teamTitle}>> 20 медицинских <br/> технологов и аналитиков</div>
                    <div className={classes.teamText}>Каждую минуту мы подвергаем анализу наши алгоритмы расчета на корректность, создаем персональные решения</div>
                  </li>
                  <li id='team3' className={`${classes.teamItem}${liID === 'team3' ? ' ' + classes.teamItemActive : ''}`} onClick={handleClick}>
                    <div className={classes.teamTitle}>> 50 врачей и ученых</div>
                    <div className={classes.teamText}>Каждый день мы ищем лучшее в медицине, анализируем и проверяем</div>
                  </li>
                  <li id='team4' className={`${classes.teamItem}${liID === 'team4' ? ' ' + classes.teamItemActive : ''}`} onClick={handleClick}>
                    <div className={classes.teamTitle}>> 10 методистов,<br/> юристов и технологов</div>
                    <div className={classes.teamText}>Каждый месяц мы готовим новые материалы для обучения пациентов и врачей</div>
                  </li>
                  <li id='team5' className={`${classes.teamItem}${liID === 'team5' ? ' ' + classes.teamItemActive : ''}`} onClick={handleClick}>
                    <div className={classes.teamTitle}>> 10 дизайнеров</div>
                    <div className={classes.teamText}>Каждую секунду мы думаем как улучшить Testing для наших пользователей</div>
                  </li>
                </ul>
              </div>
              <div className={`${classes.teamBlock} ${classes.teamBlockRight}`}>
                <svg width="100%" height="100%" viewBox="0 0 663 720" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d)">
                    <circle cx="306.5" cy="366.5" r="112.5" fill="white"/>
                  </g>
                  <path d="M351.356 366.16C349.543 365.092 347.171 365.696 346.101 367.508C344.985 369.319 343.078 370.434 340.938 370.434C338.799 370.434 336.892 369.319 335.776 367.508L317.87 337.452C313.87 330.716 308.289 327 302.196 327C296.103 327 290.522 330.716 286.476 337.452L249.547 399.514C248.849 400.722 248.803 402.162 249.501 403.37C250.198 404.578 251.454 405.321 252.849 405.321H289.871C291.22 405.321 292.475 404.624 293.173 403.463L302.847 387.25L307.405 394.869C311.451 401.651 316.986 405.367 323.079 405.367C329.171 405.367 334.752 401.651 338.752 394.869C338.752 394.869 352.426 371.921 352.705 371.456C353.775 369.598 353.17 367.229 351.356 366.16ZM287.685 397.656H259.593L293.126 341.401C295.685 337.08 298.94 334.711 302.196 334.711C305.498 334.711 308.707 337.08 311.265 341.401L321.172 358.078C320.986 358.078 320.846 358.078 320.66 358.078C314.567 358.078 308.986 361.794 304.986 368.576L287.685 397.656ZM332.148 390.92C329.543 395.287 326.334 397.656 323.079 397.656C319.823 397.656 316.567 395.287 314.009 390.92L307.312 379.725L311.637 372.478C314.242 368.112 317.451 365.742 320.707 365.742C323.962 365.742 327.218 368.112 329.776 372.478C330.009 372.85 330.288 373.221 330.613 373.5C332.939 376.148 336.194 377.82 339.776 378.099L332.148 390.92Z" fill="#4CC6F6"/>
                  <path d="M349.728 327C341.868 327 335.497 333.364 335.497 341.215C335.497 349.065 341.868 355.43 349.728 355.43C357.589 355.43 363.96 349.065 363.96 341.215C363.96 333.364 357.589 327 349.728 327ZM349.728 347.718C346.147 347.718 343.217 344.792 343.217 341.215C343.217 337.638 346.147 334.711 349.728 334.711C353.31 334.711 356.24 337.638 356.24 341.215C356.24 344.792 353.356 347.718 349.728 347.718Z" fill="#4CC6F6"/>
                  <path opacity="0.15" d="M302.847 387.204L307.312 379.725L313.963 390.92L307.126 394.45L302.847 387.204Z" fill="url(#paint0_linear)"/>
                  <path opacity="0.15" d="M335.264 366.811C335.45 366.997 335.636 367.229 335.776 367.461L335.822 367.508L326.055 351.063L317.312 351.435L321.218 357.985C326.567 358.263 331.45 361.329 335.264 366.811Z" fill="url(#paint1_linear)"/>
                  <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="354" y="182" width="156" height="354">
                    <path fillRule="evenodd" clipRule="evenodd" d="M403.096 182.204L354.058 239.02L384.461 503.51L433.5 535.837L510 426.122L500.192 255.673L403.096 182.204Z" fill="white"/>
                  </mask>

                  {/*LINE1*/}
                  <g mask="url(#mask0)">
                    <path id="path0" d="M123.596 366.368C123.596 264.129 206.7 181.245 308.942 181.245C411.184 181.245 494.289 264.129 494.289 366.368C494.289 468.606 411.184 551.49 308.942 551.49C206.7 551.49 123.596 468.606 123.596 366.368Z" stroke={liID === 'team1' ? '#3991E4' : '#EAEAEA'} strokeWidth="2"/>
                  </g>
                  <mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="57" y="394" width="499" height="220">
                    <path fillRule="evenodd" clipRule="evenodd" d="M530.596 405.551L555.115 413.388L510 525.061L379.558 613.224L208.904 604.408L95.1345 521.143L57.8652 394.775L114.75 400.653L242.25 556.408L424.673 541.714L530.596 405.551Z" fill="white"/>
                  </mask>
                  {/*LINE2*/}
                  <g mask="url(#mask1)">
                    <path id="path1" d="M74.5576 366.368C74.5576 237.078 179.65 132.266 308.942 132.266C438.235 132.266 543.327 237.078 543.327 366.368C543.327 495.657 438.235 600.47 308.942 600.47C179.65 600.47 74.5576 495.657 74.5576 366.368Z" stroke={liID === 'team2' ? '#3991E4' : '#EAEAEA'} strokeWidth="2"/>
                  </g>
                  <mask id="mask2" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="81" width="231" height="474">
                    <path fillRule="evenodd" clipRule="evenodd" d="M110.827 537.796L73.5577 554.449L0 414.367L30.4038 229.225L104.942 146.939L210.865 81.3062L230.481 140.082L60.8077 280.163L46.0962 447.674L110.827 537.796Z" fill="white"/>
                  </mask>
                  {/*LINE3*/}
                  <g mask="url(#mask2)">
                    <path id="path2" d="M25.5193 366.367C25.5193 210.027 152.599 83.2856 308.942 83.2856C465.286 83.2856 592.365 210.027 592.365 366.367C592.365 522.707 465.286 649.449 308.942 649.449C152.599 649.449 25.5193 522.707 25.5193 366.367Z" stroke={liID === 'team3' ? '#3991E4' : '#EAEAEA'} strokeWidth="2"/>
                  </g>
                  <mask id="mask3" mask-type="alpha" maskUnits="userSpaceOnUse" x="9" y="0" width="654" height="349">
                    <path fillRule="evenodd" clipRule="evenodd" d="M83.3653 99.9184L9.80762 183.184L46.5865 202.776L182.423 83.2653L361.904 74.449L573.75 233.143L612.981 348.735L663 324.245L599.25 87.1837L300.115 0L83.3653 99.9184Z" fill="white"/>
                  </mask>
                  {/*LINE5*/}
                  <g mask="url(#mask3)">
                    <path id="path3" d="M-23.5193 366.367C-23.5193 182.977 125.548 34.3062 308.942 34.3062C492.336 34.3062 641.404 182.977 641.404 366.367C641.404 549.758 492.336 698.429 308.942 698.429C125.548 698.429 -23.5193 549.758 -23.5193 366.367Z" stroke={liID === 'team5' ? '#3991E4' : '#EAEAEA'} strokeWidth="2"/>
                  </g>
                  <mask id="mask4" mask-type="alpha" maskUnits="userSpaceOnUse" x="137" y="527" width="478" height="194">
                    <path fillRule="evenodd" clipRule="evenodd" d="M167.711 636.735L137.308 685.714L293.25 720L549.231 657.306L614.942 561.306L573.75 527.021L391.327 662.204L167.711 636.735Z" fill="white"/>
                  </mask>
                  {/*LINE4*/}
                  <g mask="url(#mask4)">
                    <path id="path4" d="M-23.5193 366.367C-23.5193 182.977 125.548 34.3062 308.942 34.3062C492.336 34.3062 641.404 182.977 641.404 366.367C641.404 549.758 492.336 698.429 308.942 698.429C125.548 698.429 -23.5193 549.758 -23.5193 366.367Z" stroke={liID === 'team4' ? '#3991E4' : '#EAEAEA'} strokeWidth="2"/>
                  </g>
                  {/*stroke={liID === 'team4' ? '#3991E4' : '#EAEAEA'}*/}
                  {/*LINE1*/}
                  (
                    {liID === 'team1' ?
                      (<React.Fragment>
                        <g filter="url(#filter1_d)">
                          <circle cx="411" cy="520" r="10" fill='#3991E4' stroke="#3991E4" strokeWidth="2"/>
                        </g>
                        <g filter="url(#filter2_d)">
                          <circle cx="387" cy="199" r="10" fill='#3991E4' stroke="#3991E4" strokeWidth="2"/>
                        </g>
                      </React.Fragment>):
                      (<React.Fragment>
                        <circle cx="411" cy="520" r="10" fill='white' stroke="#3991E4" strokeWidth="2"/>
                        <circle cx="387" cy="199" r="10" fill='white' stroke="#3991E4" strokeWidth="2"/>
                      </React.Fragment>)
                    }
                    {liID === 'team2' ?
                      (<React.Fragment>
                        <g filter="url(#filter1_d)" >
                          <circle cx="539" cy="407" r="10" fill='#3991E4' stroke="#3991E4" strokeWidth="2"/>
                        </g>
                        <g filter="url(#filter2_d)">
                          <circle cx="77" cy="398" r="10" fill='#3991E4' stroke="#3991E4" strokeWidth="2"/>
                        </g>
                      </React.Fragment>):
                      (<React.Fragment>
                        <circle cx="539" cy="407" r="10" fill='white' stroke="#3991E4" strokeWidth="2"/>
                        <circle cx="77" cy="398" r="10" fill='white' stroke="#3991E4" strokeWidth="2"/>
                      </React.Fragment>)
                    }
                    {liID === 'team3' ?
                      (<React.Fragment>
                        <g filter="url(#filter1_d)" >
                          <circle cx="89" cy="546" r="10" fill='#3991E4' stroke="#3991E4" strokeWidth="2"/>
                        </g>
                        <g filter="url(#filter2_d)">
                          <circle cx="216" cy="99" r="10" fill='#3991E4' stroke="#3991E4" strokeWidth="2"/>
                        </g>
                      </React.Fragment>):
                      (<React.Fragment>
                        <circle cx="89" cy="546" r="10" fill='white' stroke="#3991E4" strokeWidth="2"/>
                        <circle cx="216" cy="99" r="10" fill='white' stroke="#3991E4" strokeWidth="2"/>
                      </React.Fragment>)
                    }
                    {liID === 'team5' ?
                      (<React.Fragment>
                        <g filter="url(#filter1_d)" >
                          <circle cx="28" cy="189" r="10" fill='#3991E4' stroke="#3991E4" strokeWidth="2"/>
                        </g>
                        <g filter="url(#filter2_d)">
                          <circle cx="639" cy="334" r="10" fill='#3991E4' stroke="#3991E4" strokeWidth="2"/>
                        </g>
                      </React.Fragment>):
                      (<React.Fragment>
                        <circle cx="28" cy="189" r="10" fill='white' stroke="#3991E4" strokeWidth="2"/>
                        <circle cx="639" cy="334" r="10" fill='white' stroke="#3991E4" strokeWidth="2"/>
                      </React.Fragment>)
                    }
                    {liID === 'team4' ?
                      (<React.Fragment>
                        <g filter="url(#filter1_d)" >
                          <circle cx="592" cy="539" r="10" fill='#3991E4' stroke="#3991E4" strokeWidth="2"/>
                        </g>
                        <g filter="url(#filter2_d)">
                          <circle cx="148" cy="655" r="10" fill='#3991E4' stroke="#3991E4" strokeWidth="2"/>
                        </g>
                      </React.Fragment>):
                      (<React.Fragment>
                        <circle cx="592" cy="539" r="10" fill='white' stroke="#3991E4" strokeWidth="2"/>
                        <circle cx="148" cy="655" r="10" fill='white' stroke="#3991E4" strokeWidth="2"/>
                      </React.Fragment>)
                    }
                  )


                  {/*<circle cx="411" cy="520" r="10" fill={liID === 'team1' ? '#3991E4' : 'white' } stroke="#3991E4" strokeWidth="2"/>*/}
                  {/*<circle cx="387" cy="199" r="10" fill={liID === 'team1' ? '#3991E4' : 'white' } stroke="#3991E4" strokeWidth="2"/>*/}



                  {/*/!*LINE2*!/*/}
                  {/*<circle cx="539" cy="407" r="10" fill={liID === 'team2' ? '#3991E4' : 'white' } stroke="#3991E4" strokeWidth="2"/>*/}
                  {/*<circle cx="77" cy="398" r="10" fill={liID === 'team2' ? '#3991E4' : 'white' } stroke="#3991E4" strokeWidth="2"/>*/}

                  {/*LINE3*/}
                  {/*<circle cx="89" cy="546" r="10" fill={liID === 'team3' ? '#3991E4' : 'white' } stroke="#3991E4" strokeWidth="2"/>*/}
                  {/*<circle cx="216" cy="99" r="10" fill={liID === 'team3' ? '#3991E4' : 'white' } stroke="#3991E4" strokeWidth="2"/>*/}

                  {/*/!*LINE4*!/*/}
                  {/*<circle cx="28" cy="189" r="10" fill={liID === 'team4' ? '#3991E4' : 'white' } stroke="#3991E4" strokeWidth="2"/>*/}
                  {/*<circle cx="639" cy="334" r="10" fill={liID === 'team4' ? '#3991E4' : 'white' } stroke="#3991E4" strokeWidth="2"/>*/}

                  {/*/!*LINE5*!/*/}
                  {/*<circle cx="592" cy="539" r="10" fill={liID === 'team5' ? '#3991E4' : 'white' } stroke="#3991E4" strokeWidth="2"/>*/}
                  {/*<circle cx="148" cy="655" r="10" fill={liID === 'team5' ? '#3991E4' : 'white' } stroke="#3991E4" strokeWidth="2"/>*/}



                  <defs>
                    <filter id="filter0_d" x="179" y="244" width="255" height="255" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                      <feOffset dy="5"/>
                      <feGaussianBlur stdDeviation="7.5"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0.333333 0 0 0 0 0.843137 0 0 0 0 1 0 0 0 0.07 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    <filter id="filter1_d" x={filterD1X} y={filterD1Y} width="30" height="30" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                      <feOffset dy="4"/>
                      <feGaussianBlur stdDeviation="2"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0.223529 0 0 0 0 0.568627 0 0 0 0 0.894118 0 0 0 0.25 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    <filter id="filter2_d" x={filterD2X} y={filterD2Y} width="30" height="30" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                      <feOffset dy="4"/>
                      <feGaussianBlur stdDeviation="2"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0.223529 0 0 0 0 0.568627 0 0 0 0 0.894118 0 0 0 0.25 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear" x1="310.479" y1="392.688" x2="304.319" y2="381.914" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#4CC6F6"/>
                      <stop offset="1"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="322.36" y1="352.175" x2="329.261" y2="364.309" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#4CC6F6"/>
                      <stop offset="1"/>
                    </linearGradient>
                  </defs>
                </svg>

                {/*{*/}
                  {/*svgObject.map(svgItem => {*/}
                    {/*return (*/}
                      {/*<React.Fragment key={svgItem.id}>*/}
                        {/*{getSvgTeam(svgItem)}*/}
                      {/*</React.Fragment>*/}
                    {/*)*/}
                  {/*})*/}
                {/*}*/}
                {/*{*/}
                  {/*getSvgTeam(svgObject1)*/}
                {/*}*/}
                {/*{*/}
                  {/*getSvgTeam(svgObject2)*/}
                {/*}*/}
              </div>
            </div>
          {/*</div>*/}
        </section>
        </ScrollAnimation>

        {/*STATISTICS*/}
        <ScrollAnimation offset={200} animateOnce={true} animateIn="fadeInUp">
          <section className={customClasses.pageRow}>
            <div className={classes.statisticsWrap}>
              <div className={customClasses.container}>
                <h2 className={customClasses.subHeading}>Мы уже помогаем</h2>
              </div>
              <div className={classes.statisticsBg}>
                <div className={classes.statistics}>
                  <ul className={classes.statisticsList}>
                    <li className={classes.statisticsItem}>
                    <ScrollAnimation offset={200} delay={300} animateOnce={true} animateIn="fadeInUp">
                      <div className={classes.statisticsQuantity}>20 000</div>
                      <p className={classes.statisticsText}>пациентов <br/> доверяют нам</p>
                    </ScrollAnimation>
                    </li>
                    <li className={classes.statisticsItem}>
                    <ScrollAnimation offset={200} delay={500} animateOnce={true} animateIn="fadeInUp">
                      <div className={classes.statisticsQuantity}>5 000</div>
                      <p className={classes.statisticsText}>пациентов используют <br/> онлайн-запись к врачам</p>
                    </ScrollAnimation>
                    </li>
                    <li className={classes.statisticsItem}>
                    <ScrollAnimation offset={200} delay={700} animateOnce={true} animateIn="fadeInUp">
                      <div className={classes.statisticsQuantity}>100</div>
                      <p className={classes.statisticsText}>врачей сопровождают <br/> своих пациентов</p>
                    </ScrollAnimation>
                    </li>
                    <li className={classes.statisticsItem}>
                    <ScrollAnimation offset={200} delay={900} animateOnce={true} animateIn="fadeInUp">
                      <div className={classes.statisticsQuantity}>> 1млн</div>
                      <p className={classes.statisticsText}>медицинских данных <br/> обрабатывается ежедневно</p>
                    </ScrollAnimation>
                    </li>
                    <li className={classes.statisticsItem}>
                    <ScrollAnimation offset={200} delay={1100} animateOnce={true} animateIn="fadeInUp">
                      <div className={classes.statisticsQuantity}>50</div>
                      <p className={classes.statisticsText}>медицинских организаций <br/> используют Testing</p>
                    </ScrollAnimation>
                    </li>
                    <li className={classes.statisticsItem}>
                      <ScrollAnimation offset={200} delay={1300} animateOnce={true} animateIn="fadeInUp">
                        <div className={classes.statisticsQuantity}>10</div>
                        <p className={classes.statisticsText}>научных работ ведется <br/> в среде Testing</p>
                      </ScrollAnimation>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {
          openModal && 
            <ModalTemplates 
              typeOfModal={typeOfModal} 
              setOpenModal={setOpenModal}
              typeOfLogo={ABOUT_LOGO}
            />
        }        

      {form}
      </div>
    </React.Fragment>
  )
};

export default AboutPage;
