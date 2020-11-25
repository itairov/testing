import React from 'react';

import useStyles from "./style";
import rootStyles from "../../Root/style";
import {Link} from "react-router-dom";
import {PATIENT_PAGE_LINK, SPECIALIST_PAGE_LINK} from "../../../config/pageLinks";
import notificIcon from "../../../assets/images/svg/notificIcon.svg";
import skeletonImg from "../../../assets/images/png/skeletonImg.png";
import eductionDoctor from "../../../assets/images/png/eductionDoctor.png";
import  ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const SpecialistEducationPage = props => {
  window.scrollTo( 0, 0 );
  const classes = useStyles();
  const customClasses = rootStyles();
  return (
    <React.Fragment>
      <div className={classes.educationSpecialist}>
        <div className={customClasses.container}>
          <Link to={SPECIALIST_PAGE_LINK} className={customClasses.comeBackBtn}>Вернуться назад</Link>
        </div>


          <div className={customClasses.container}>
            <div className={customClasses.educationHeadingBox}>
              <h2 className={`${customClasses.subHeading} ${customClasses.subHeadingGrn}`}>Одна из страниц белой книги по рассеянному склерозу</h2>
              <p>Врачу часто приходится сталкиваться с тем, что одну и ту же информацию нужно несколько десятков раз в день объяснять разным пациентам. Чтобы не упустить ничего важного, а у пациента была бы возможность всегда вернуться к этой информации — используйте Белую книгу. Это помогает во многом.</p>
            </div>
          </div>


          <div className={customClasses.container}>
            <div className={customClasses.educationPresent}>
              <div className={customClasses.educationPresentHeader}>
               
                  <article className={classes.educationCloud}>Один из самых частых вопросов, который задают пациенты, в ситуации, когда врач предлагает инвазивное исследование. Например, при подозрении на РС.</article>
                
                <div className={customClasses.educationPresentTitle}>Для чего выполнять люмбальную пункцию при подозрении на РС?</div>
              </div>
              <div className={`${customClasses.educationPresentationBody} ${classes.educationPresentationBody}`}>
                <div className={classes.educationPosition}>
                 
                    <article className={classes.educationCloud}>Мы адаптировали медицинскую информацию для пациентов, при этом отвечаем конкретно на вопрос в очень конкретной ситуации. На каждую ситуацию своя карточка Белой книги.</article>
                  
                  <div className={customClasses.educationHeading}><span>Люмбальная пункция (ЛП)</span> служит для подтверждения воспаления внутри нервной системы, характерного для рассеянного склероза (РС) и позволяет ускорить процесс постановки диагноза у <span>50%</span> пациентов<sup>1</sup>.</div>
                  <div className={customClasses.educationHeading}>Ранняя диагностика поможет быстрее начать лечение. Более раннее начало терапии может значительно улучшить долгосрочный прогноз заболевания и предотвратить появление стойких проблем со здоровьем.</div>
                </div>
                <div className={classes.educationPosition}>
                 
                    <article className={classes.educationCloud}>Вся информация имеет свой уровень доказательности. По ссылкам можно перейти к первоисточнику. Описаны самые острые вопросы и даны на них максимально емко ответы.</article>
                  
                  <div className={classes.educationQuestionWrap}>
                    <div className={classes.educationQuestion}>
                      <div className={classes.educationQuestionList}>
                        <div className={classes.educationQuestionItem}>
                          <div className={classes.educationQuestionHeading}>Что такое люмбальная пункция?</div>
                          <div className={classes.educationQuestionText}>
                            <p>Люмбальная пункция (ЛП) – процедура, которую выполняет врач, для получения небольшого количества жидкости (ликвор), омывающей спинной и головной мозг. <span>Только так можно напрямую (не косвенно) определить наличие атаки иммунной системы на нервную систему при РС</span></p>
                          </div>
                        </div>
                        <div className={classes.educationQuestionItem}>
                          <div className={classes.educationQuestionHeading}>Что опасна ЛП?</div>
                          <div className={classes.educationQuestionText}>
                            <p className={classes.indent}><span>Каждый десятый</span> после ЛП испытывают <span>головную боль</span>, которая появляется только в вертикальном положении и может сопровождаться тош- нотой и рвотой. Эта головная боль полностью <span>прекратится</span> в течение максимум <span>2-3 недель</span><sup>7</sup></p>
                            <p className={classes.indent}>Имеются <span>минимальные риски</span> серьёзных осложнений - инфекции или кровотечения в месте пункции <span>(примерно 1 случай на 100000 пункций)</span>. Но при соблюдении техники безопасности они значительно снижаются<sup>6</sup></p>
                          </div>
                        </div>
                        <div className={classes.educationQuestionItem}>
                          <div className={classes.educationQuestionHeading}>Заблуждения о ЛП</div>
                          <div className={classes.educationQuestionText}>
                            <p className={classes.indent}>Место прокола располагается ниже окончания спинного мозга, его невозможно травмировать при ЛП</p>
                          </div>
                          <div className={classes.educationQuestionText}>
                            <p className={classes.indent}><span>Серьёзные осложнения</span> при ЛП – <span>огромная редкость</span>. ЛП – относительно безопасная процедура, если соблюдать правила выполнения ЛП<sup>6</sup></p>
                          </div>
                        </div>
                        <div className={classes.educationQuestionItem}>
                          <div className={classes.educationQuestionHeading}>Как понять – происходит ли аттака иммунной системы?</div>
                          <div className={classes.educationQuestionText}>
                            <p>Будет выполнен специальный тест на <b>олигоклональные иммуноглобулины (OCB)</b> – это белки, появляющиеся в ликворе у 90% людей с РС<sup>2</sup>.</p>
                          </div>
                          <div className={classes.educationQuestionText}>
                            <div className={classes.educationQuestionTitle}>Положительный результат теста - второй тип синтеза:</div>
                            <p className={classes.indent}><b>Равнозначен критерию «диссеминации во времени»</b>, и при определенных условиях можно будет поставить диагноз РС, не проводя больше допол- нительных обследований. Это свидетельствует о наличии хронического воспалительного процесса в нервной системе3 - Если диагноз нельзя будет поставить сразу же, то данный результат говорит о <b>высоком риске развития РС в течение 2 лет в 8 раз</b><sup>4,</sup><sup>5</sup></p>
                            <p className={classes.indent}>Нужно знать, что в 14% случаев встречается при других воспали- тельных заболеваниях нервной системы<sup>8</sup></p>
                          </div>
                          <div className={classes.educationQuestionText}>
                            <div className={classes.educationQuestionTitle}>Отрицательный результат теста: </div>
                            <p className={classes.indent}>Не исключает полностью РС. Встречается у <b>10-15%</b> людей с РС. Если диагноз РС всё же будет установлен – отрицательный результат будет фактором более легкого течения заболевания в дальнейшем<sup>2</sup></p>
                          </div>
                        </div>
                        <div className={classes.educationQuestionItem}>
                          <div className={classes.educationQuestionHeading}>Можно ли выполнить этот анализ в крови?</div>
                          <div className={classes.educationQuestionText}>
                            <p>Олигоклональные иммуноглобу- лины при РС находятся именно в нервной системе, не попадая в кровь. Определить воспаление по крови в этом случае <span>не получится</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={classes.educationPosition}>
                  
                    <article className={classes.educationCloud}>Мы стараемся визуализировать основные не понятные для пациентов ситуации.</article>
                  
                  <div className={classes.educationImageBlock}>
                    <img src={skeletonImg} alt=""/>
                  </div>
                </div>

                <div className={classes.educationPosition}>
                    
                      <div className={classes.educationWrapCloud}>
                          <article className={classes.educationCloud}>Краткий тезис из всей карточки Белой книги позволит использовать информацию правильно.</article>
                          <article className={classes.educationCloud}>Пациент сможет перейти по ссылке в своем кабинете на необходимые тесты, сохранить результаты обследований. Правильно подготовиться к процедуре.</article>
                      </div>
                    
                  <div className={classes.educationPresentRow}>
                    <div className={classes.educationDoctor}>
                      <img src={eductionDoctor} alt=""/>
                    </div>
                    <div className={classes.educationPresentCol}>
                      <div className={customClasses.educationHeading}>ЛП показана не всем пациентам с РС, однако незаменима для установки быстрого и правильного диагноза в некоторых случаях.</div>
                      <div className={customClasses.educationHeading}>Риски выполнения пункции значи- тельно ниже, чем польза от инфор- мации полученной в результате.</div>
                      <div className={customClasses.educationHeading}><span>Уточнить показания для люмбаль- ной пункции, сохранить и проверить её результаты можно на Testing.</span> Это позволит избежать повторного проведения люмбальной пункции!</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={customClasses.educationPresentationFooter}>
                1. Lorem ipsum dolor sit amet, quis nostrum exercitationem ullam corporis suscipit laboriosam, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                1. Lorem ipsum dolor sit amet, quis nostrum exercitationem ullam corporis suscipit laboriosam, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                1. Lorem ipsum dolor sit amet, quis nostrum exercitationem ullam corporis suscipit laboriosam, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
              </div>
            </div>
          </div>

      </div>

    </React.Fragment>
  )
};

export default SpecialistEducationPage;