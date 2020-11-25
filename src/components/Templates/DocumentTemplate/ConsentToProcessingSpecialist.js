import React from "react";
import useStyles from "./style";

import logoSpecialist from "../../../assets/images/svg/logoSpecialist.svg";
import docFooterBgGrn from "../../../assets/images/png/documentFootBgGrn.png";

const ConsentToProcessingSpecialist = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={`${classes.documentWrap} ${classes.Specialist}`}>
        <article className={classes.documentContainer}>
          <div className={classes.docLogo}>
            <img src={logoSpecialist} alt="logo"/>
          </div>

          <section className={classes.contentBox}>
            <div className={classes.header}>
              <h1>Согласие на обработку персональных данных</h1>
            </div>
            <div className={classes.contentBox}>
              <p className={classes.text}>Физическое лицо (далее – <b>«Субъект»</b>), проставляя соответствующий значок «V» на Сайте <a target="_blank" href="https://Testing.pro">https://Testing.pro</a>, предоставляет настоящее Согласие на обработку персональных данных (далее — <b>«Согласие»</b>).</p>
              <p className={classes.text}>Действуя свободно, в соответствии со своей волей и в своем интересе, а также подтверждая свою дееспособность, Субъект даёт согласие АО «КомпанияТехнологий», ОГРН: 3453453453453, далее – <b>«Оператор»</b>, на обработку своих персональных данных в соответствии со следующими условиями:</p>
            </div>
            <ul>
              <li>
                <span className={classes.counter}>1</span>
                <p className={classes.text}>Согласие дается на обработку следующих персональных данных Субъекта:</p>
              </li>
              <li>
                <ol>
                  <li>
                    <span className={classes.counter}>a</span>
                    <p className={classes.text}>фамилия, имя, отчество;</p>
                  </li>
                  <li>
                    <span className={classes.counter}>b</span>
                    <p className={classes.text}>номер телефона;</p>
                  </li>
                  <li>
                    <span className={classes.counter}>c</span>
                    <p className={classes.text}>адрес электронной почты;</p>
                  </li>
                  <li>
                    <span className={classes.counter}>d</span>
                    <p className={classes.text}>IP-адрес, MAC-адрес, ID устройства, IMEI, MEID, данные из cookies, информация о браузере, операционной системе, времени доступа;</p>
                  </li>
                  <li>
                    <span className={classes.counter}>e</span>
                    <p className={classes.text}>иные данные, которые Субъект самостоятельно предоставит Оператору для использования функционала Платформы Testing по желанию Субъекта (например, СНИЛС, паспортные данные и т.д.).</p>
                  </li>
                  <li>
                    <span className={classes.counter}>f</span>
                    <p className={classes.text}>Иные данные, которые Субъект самостоятельно предоставит Оператору для использования функционала Платформы Testing по желанию Субъекта (например, СНИЛС, паспортные данные и т.д.).</p>
                  </li>
                </ol>
              </li>
              <li>
                <span className={classes.counter}>2</span>
                <p className={classes.text}>В случае, если Субъект примет решение воспользоваться отдельными функциями Платформы Testing и сервисов Оператора фиксирующими иные данные, Субъект предоставляет Согласие на обработку этих данных. Осуществляя ввод или загрузку таких данных, Субъект дает добровольное согласие на обработку данных Оператором исключительно в целях, указанных в Согласии, включая соблюдение Оператором условий Пользовательского соглашения.</p>
              </li>
              <li>
                <span className={classes.counter}>3</span>
                <p className={classes.text}>Под обработкой Оператором персональных данных Субъекта понимается любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу партнерам Оператора (распространение, предоставление, доступ), трансграничную передачу партнерам Оператора на территории любых иностранных государств (в том числе не обеспечивающих адекватной защиты прав субъектов персональных данных), обезличивание, блокирование, удаление, уничтожение персональных данных.</p>
              </li>
              <li>
                <span className={classes.counter}>4</span>
                <p className={classes.text}>Субъект дает свое Согласие на обработку персональных данных для следующих целей:</p>
              </li>
              <li>
                <ol>
                  <li>
                    <span className={classes.counter}>a</span>
                    <p className={classes.text}>Использование Субъектом Платформы Оператора Testing (далее – <b>«Платформа»</b>), которая располагается на Сайте <a target='_blank' href="https://Testing.pro">https://Testing.pro</a> (далее – <b>«Сайт»</b>);</p>
                  </li>
                  <li>
                    <span className={classes.counter}>b</span>
                    <p className={classes.text}>Улучшение качества функционирования Платформы, удобства ее использования;</p>
                  </li>
                  <li>
                    <span className={classes.counter}>c</span>
                    <p className={classes.text}>Исполнение Пользовательского соглашения Оператора, расположенного на Сайте <a target='_blank' href="https://Testing.pro">https://Testing.pro</a> (далее – <b>«Пользовательское соглашение»</b>);</p>
                  </li>
                  <li>
                    <span className={classes.counter}>d</span>
                    <p className={classes.text}>В случае принятия Субъектом решения о реализации отдельных функций Платформы и иных сервисов Оператора – в соответствии с их функциональным значением, сведения о котором доводятся до Субъекта до начала их использования;</p>
                  </li>
                  <li>
                    <span className={classes.counter}>e</span>
                    <p className={classes.text}>Проведение статистических, маркетинговых, аналитических и иных исследований на основе обезличенных данных;</p>
                  </li>
                  <li>
                    <span className={classes.counter}>f</span>
                    <p className={classes.text}>Хранение персональных данных Субъекта полученных из информационных систем третьих лиц в соответствии с определенным сервисом Платформы;</p>
                  </li>
                  <li>
                    <span className={classes.counter}>g</span>
                    <p className={classes.text}>Иные цели, направленные на соблюдение действующего законодательства.</p>
                  </li>
                </ol>
              </li>
              <li>
                <span className={classes.counter}>5</span>
                <p className={classes.text}>Данные, указанные в п.1 (a,b,c,d,f) и в п.2 Согласия могут передаваться партнерам Оператора. К партнерам Оператора относятся организации, физические дица, привлекаемые Оператором, для осуществления предусмотренных целей.</p>
              </li>
              <li>
                <span className={classes.counter}>6</span>
                <p className={classes.text}>Субъект дает согласие на получение информационной, рекламной и маркетинговой рассылки от Оператора. Субъект вправе отказаться от такой рассылки в любое время, направив уведомление Оператору на электронный адрес, указанный в реквизитах Оператора или нажав «Отписаться от рассылки» в письме.</p>
              </li>
              <li>
                <span className={classes.counter}>7</span>
                <p className={classes.text}>Субъект персональных данных вправе направить Оператору запрос на уточнение его персональных данных, требование о блокировании или уничтожении в случае, если персональные данные являются неполными, устаревшими, неточными.</p>
              </li>
              <li>
                <span className={classes.counter}>8</span>
                <p className={classes.text}>Субъект несет ответственность за любые последствия, связанные с предоставлением неполных, недостоверных или неточных сведений, а также сведений, которые не относятся к Субъекту и предоставляются без согласия соответствующего лица.</p>
              </li>
              <li>
                <span className={classes.counter}>9</span>
                <p className={classes.text}>Субъект согласен с тем, что Оператор вправе поручить обработку его персональных данных третьему лицу по договору поручения.</p>
              </li>
              <li>
                <span className={classes.counter}>10</span>
                <p className={classes.text}>Персональные данные Субъекта обрабатываются до даты прекращения деятельности Оператора или даты отзыва согласия Субъектом.</p>
              </li>
              <li>
                <span className={classes.counter}>11</span>
                <p className={classes.text}>Согласие может быть отозвано Субъектом или его представителем путем направления письменного заявления Оператору.</p>
              </li>
              <li>
                <span className={classes.counter}>12</span>
                <p className={classes.text}>Оператор принимает необходимые и достаточные организационные и технические меры для защиты персональных данных Субъекта от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий третьих лиц.</p>
              </li>
              <li>
                <span className={classes.counter}>13</span>
                <p className={classes.text}>В случае отзыва Субъектом персональных данных или его представителем Согласия на обработку персональных данных Оператор вправе продолжить обработку персональных данных без согласия субъекта персональных данных при наличии оснований, указанных в пунктах 2-11 части 1 статьи 6, части 2 статьи 10 Федерального закона №152-ФЗ «О персональных данных» от 27.07.2006 г.</p>
              </li>
              <li>
                <span className={classes.counter}>14</span>
                <p className={classes.text}>Настоящее Согласие действует все время до момента прекращения обработки персональных данных, указанных в пункте 10 настоящего Согласия.</p>
              </li>
              <li>
                <span className={classes.counter}>15</span>
                <p className={classes.text}>Согласие подписывается Субъектом простой электронной подписью в соответствии с Пользовательским соглашением и является равнозначным документу на бумажном носителе, подписанным собственноручной подписью.</p>
              </li>
            </ul>
          </section>

          <section className={classes.contentBox}>
            <div className={classes.header}>
              <h2>Реквизиты оператора</h2>
            </div>
            <div className={classes.tableRow}>
              <div className={classes.row}><b>АО «КомпанияТехнологий»</b></div>
              <div className={classes.row}>Юр.адрес: 123022 г.Москва , ул.1905 года, дом 10-А, стр.1</div>
              <div className={classes.row}>Фактический адрес: 123022 г.Москва , ул.1905 года, дом 10-А, стр.1</div>
              <div className={classes.row}>Телефон: +7 495 118 3559</div>
              <div className={classes.row}>ИНН: 7703441308 КПП: 770301001</div>
              <div className={classes.row}>ОГРН: 1187746106712</div>
              <div className={classes.row}>Адрес электронной почты: <a href="mailto:info@Компания.ru"> &nbsp;info@Компания.ru</a></div>
            </div>
          </section>
        </article>
        <div className={`${classes.documentFooter} ${classes.documentFooterGrn}`}>
          <img src={docFooterBgGrn} alt="" className={classes.documentBg}/>
        </div>
      </div>
    </div>
  )
};

export default ConsentToProcessingSpecialist;