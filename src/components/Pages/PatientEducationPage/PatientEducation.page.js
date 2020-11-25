import React from 'react';

import useStyles from "./style";
import rootStyles from "../../Root/style";
import { Link } from "react-router-dom";
import {PATIENT_PAGE_LINK} from "../../../config/pageLinks";
import notificIcon from "../../../assets/images/svg/notificIcon.svg";
import "animate.css/animate.min.css";
import  ScrollAnimation from 'react-animate-on-scroll';

const PatientEducationPage = props => {
  window.scrollTo( 0, 0 );
  const classes = useStyles();
  const customClasses = rootStyles();
  return (
    <React.Fragment>
      <div className={classes.educationPatient}>
        <div className={customClasses.container}>
          <Link to={PATIENT_PAGE_LINK} className={customClasses.comeBackBtn}>Вернуться назад</Link>
        </div>


          <div className={customClasses.container}>
            <div className={customClasses.educationHeadingBox}>
              <h2 className={customClasses.subHeading}>Одна из страниц белой книги по рассеянному склерозу</h2>
              <p>Прочтение карточки займет у Вас 3 минуты. <br/>Вы сбережете драгоценное время и ресурсы, выполнив 4 простых правила в конкретной ситуации — когда у Вас или Вашего родственника есть подозрение на рассеянный склероз и Вам дали направление на МРТ.</p>
            </div>
          </div>


          <div className={customClasses.container}>
            <div className={customClasses.educationPresent}>
              <div className={customClasses.educationPresentHeader}>
                
                  <article className={classes.educationCloud}>Изучайте самостоятельно или получайте карточки Белой книги накануне обследования в своем кабинете. Актуально. Достоверно. Проверено экспертами.</article>
                
                <div className={customClasses.educationPresentTitle}>4 правила проведения МРТ <br/> при подозрении на РС</div>
                <div className={customClasses.educationPresentSubTitle}>Правильно выполненная МРТ <br/>позволяет быстро диагностировать РС</div>
              </div>
              <div className={`${customClasses.educationPresentationBody} ${classes.educationPresentationBody}`}>
                <div className={classes.educationPresentRules}>
                  
                    <article className={classes.educationCloud}>Факты и аргументы. Каждая фраза, цифра имеет ссылку на первоисточник и проверена. Только самые последние данные и самый высокий уровень доказательности из существующих по данному вопросу. Никаких частных мнений.</article>
                  
                  <div className={classes.educationPresentRule}>
                    <div className={classes.educationPresentRuleTitle}>Выполняйте МРТ с введением контрастного вещества.</div>
                    <div className={classes.educationPresentRuleDescription}>Контрастные очаги возникают в 5-10 раз чаще, чем обострения и часто бессимптомны<sup>5</sup>. Их наличие говорит об активности РС<sup>6</sup>.</div>
                  </div>
                  <div className={classes.educationPresentRule}>
                    <div className={classes.educationPresentRuleTitle}>Выполняйте МРТ на томографах с индукцией магнитного поля не менее 1.5 Тесла.</div>
                    <div className={classes.educationPresentRuleDescription}>31% неконтрастных и 64% контрастных очагов не видно на МРТ менее 1.5 Тесла<sup>1</sup>.</div>
                  </div>
                  <div className={classes.educationPresentRule}>
                    <div className={classes.educationPresentRuleTitle}>При выполнении МРТ в первый раз, обратите внимание на режимы МРТ, которые Вам обязательно должны сделать: Т1-ВИ, Т2-ВИ, FLAIR, ДВИ<sup>2</sup>.</div>
                    <div className={classes.educationPresentRuleDescription}>Очаги в стволе мозга и мозжечке лучше видно в режиме Т2, а в коре головного мозга и вокруг желудочков — в режиме FLAIR<sup>7,8,9</sup>.</div>
                  </div>
                  <div className={classes.educationPresentRule}>
                    <div className={classes.educationPresentRuleTitle}>Выполняйте одновременно МРТ головного и спинного мозга, если: <br/> - Это ваша первая МРТ2 <br/>- Вы старше 40 лет2 <br/>- У Вас есть симптомы поражения спинного мозга<sup>2,4</sup>.</div>
                    <div className={classes.educationPresentRuleDescription}>50%-90% пациентов с РС имеют очаги в спинном мозге<sup>3</sup>. Наличие очагов в спинном мозге помогает поставить диагноз РС<sup>4</sup>.</div>
                  </div>
                </div>
                <div className={classes.educationPresentRow}>
                  
                    <article className={classes.educationCloud}>Сохраните минимальные правила, которые нужно выполнить. Найдите в поиске в личном кабинета МРТ услугу и запишитесь.</article>
                  
                  <div className={classes.educationPresentCol}>
                    <div className={classes.educationDocAvatar}></div>
                  </div>
                  <div className={classes.educationPresentCol}>
                    <div className={customClasses.educationHeading}>Перед проведением МРТ уточните у врача <span>4 характеристики</span> обследова- ния. Это позволит Вам выполнить об- следование правильно и избежать его повторного выполнения.</div>
                    <ul className={classes.educationCharacteristic}>
                      <li className={classes.educationCharacteristicItem}>На томографах >1.5 Тесла</li>
                      <li className={classes.educationCharacteristicItem}>С введением контрастного вещества</li>
                      <li className={classes.educationCharacteristicItem}>В комплексе с МРТ шейного отдела спинного мозга (если Вы старше 40 лет или имеете соответствующие симптомы)</li>
                      <li className={classes.educationCharacteristicItem}>В режимах Т1-ВИ, Т2-ВИ, FLAIR, ДВИ</li>
                    </ul>
                  </div>
                </div>
                <div className={classes.educationNotific}>
                  <div className={classes.educationNotificLeft}>
                    <img className={classes.educationNotificIcon} src={notificIcon} alt=""/>
                  </div>
                  <div className={classes.educationNotificRight}>
                    <div className={customClasses.educationHeading}>Сохраните или распечатайте <span>протокол заключения</span> и <span>нормативные акты</span>. Попросите врача заполнить его, сохраните результаты в своем кабинете и Ваш лечащий врач сразу же их увидит.</div>
                    <p className={classes.educationNotificText}>На <span>Testing</span> Вы сможете записаться на МРТ, хранить данные обследований и своевременно предоставлять их врачу</p>
                  </div>
                </div>
              </div>
              <div className={customClasses.educationPresentationFooter}>
                
                  <article className={classes.educationCloud}>Перейдите по ссылкам и изучите первоисточники. Они подтверждают все вышесказанное и постоянно обновляются при появлении новых данных.</article>
                
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

export default PatientEducationPage;