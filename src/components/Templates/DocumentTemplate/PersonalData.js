import React from "react";
import useStyles from "./style";

import logoAbout from "../../../assets/images/svg/logoAbout.svg";
import logoPatient from "../../../assets/images/svg/logoPatient.svg";
import logoSpecialist from "../../../assets/images/svg/logoSpecialist.svg";
import { SPECIALIST_LOGO, PATIENT_LOGO } from "../../../config";

import docBgFoot from "../../../assets/images/png/documentFootBg.png";
import docBgFootGrn from "../../../assets/images/png/documentFootBgGrn.png";

const PersonalData = ({typeOfLogo}) => {
  const classes = useStyles();
  const docFooterBg = typeOfLogo === SPECIALIST_LOGO ? docBgFootGrn : docBgFoot;
  const logoHeader = typeOfLogo === PATIENT_LOGO ? logoPatient :
    typeOfLogo === SPECIALIST_LOGO ? logoSpecialist : logoAbout;

  return (
    <div>
      <div className={`${classes.documentWrap} ${classes.PersonalData}`}>
        <article className={classes.documentContainer}>
          <div className={classes.docLogo}>
            <img src={logoHeader} alt="logo"/>
          </div>

          <section className={classes.contentBox}>
            <div className={classes.header}>
              <h1>Политика в отношении обработки персональных данных</h1>
              <div className={classes.subHeader}>Версия №2, утверждена 14.04.2020 г.</div>
            </div>
            <div className={classes.contentBox}>
              <div className={classes.rightText}>
                <p>г. Москва</p>
                <p>Дата публикации: 14.04.2020 г.</p>
              </div>
              <div>Настоящее Пользовательское соглашение (далее – <b>«Соглашение»</b>) регулирует отношения между Правообладате- лем и Пользователем (далее – <b>«Стороны»</b>), возникающие при использовании Программного обеспечения.</div>
            </div>
          </section>

          <section className={classes.contentBox}>
            <div className={classes.header}>
              <h2>1. Общие положения</h2>
            </div>
            <ul>
              <li>
                <span className={classes.counter}>1.1</span>
                <p className={classes.text}>Lorem ipsum dolor sit amet, quis nostrum exercitationem ullam corporis suscipit laboriosam, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.– <b>«Компания»</b> или <b>«Оператор»</b>).</p>
              </li>
              <li>
                <span className={classes.counter}>1.2</span>
                <p className={classes.text}>Lorem ipsum dolor sit amet, quis nostrum exercitationem ullam corporis suscipit laboriosam, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
              </li>
              <li>
                <span className={classes.counter}>1.3</span>
                <p className={classes.text}>Lorem ipsum dolor sit amet, quis nostrum exercitationem ullam corporis suscipit laboriosam, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
              </li>
              <li>
                <span className={classes.counter}>1.4</span>
                <p className={classes.text}>Lorem ipsum dolor sit amet, quis nostrum exercitationem ullam corporis suscipit laboriosam, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
              </li>
              <li>
                <span className={classes.counter}>1.5</span>
                <p className={classes.text}>Lorem ipsum dolor sit amet, quis nostrum exercitationem ullam corporis suscipit laboriosam, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
              </li>
              <li>
                <span className={classes.counter}>1.6</span>
                <p className={classes.text}>Lorem ipsum dolor sit amet, quis nostrum exercitationem ullam corporis suscipit laboriosam, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
              </li>
            </ul>
          </section>

          <section className={classes.contentBox}>
            <div className={classes.header}>
              <h2>2. Принципы обработки персональных данных</h2>
            </div>
            <ul>
              <li>
                <span className={classes.counter}>2.1</span>
                <p className={classes.text}>Оператор в своей деятельности обеспечивает соблюдение принципов обработки персональных данных, указанных в ФЗ-152, в частности:</p>
              </li>
              <li>
                <span className={classes.counter}>2.1.1</span>
                <p className={classes.text}>Законность и справедливость обработки персональных данных;</p>
              </li>
              <li>
                <ol>
                  <li>
                    <span className={classes.counter}>2.1.2</span>
                    <p className={classes.text}>Соответствие целей обработки персональных данных целям, заранее определенным и заявленным при сборе персональных данных, а также полномочиям Компании;</p>
                  </li>
                  <li>
                    <span className={classes.counter}>2.1.3</span>
                    <p className={classes.text}>Lorem ipsum dolor sit amet, quis nostrum exercitationem ullam corporis suscipit laboriosam, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                  </li>
                  <li>
                    <span className={classes.counter}>2.1.4</span>
                    <p className={classes.text}>Достоверность персональных данных, их актуальность и достаточность для целей обработки, недопустимость обработки избыточных по отношению к целям сбора персональных данных;</p>
                  </li>
                  <li>
                    <span className={classes.counter}>2.1.5</span>
                    <p className={classes.text}>Недопущение объединения баз данных, содержащих персональные данные, обработка которых осуществляется в целях, несовместимых между собой;</p>
                  </li>
                  <li>
                    <span className={classes.counter}>2.1.6</span>
                    <p className={classes.text}>Законность организационных и технических мер по обеспечению безопасности персональных данных;</p>
                  </li>
                  <li>
                    <span className={classes.counter}>2.1.7</span>
                    <p className={classes.text}>Уничтожение или обезличивание персональных данных по достижении целей обработки или в случае утраты необходимости в их достижении, если иное не предусмотрено законодательством;</p>
                  </li>
                  <li>
                    <span className={classes.counter}>2.1.8</span>
                    <p className={classes.text}>Непрерывность повышения уровня знаний работников Компании в сфере обеспечения безопасности персональных данных при их обработке;</p>
                  </li>
                  <li>
                    <span className={classes.counter}>2.1.9</span>
                    <p className={classes.text}>Lorem ipsum dolor sit amet, quis nostrum exercitationem ullam corporis suscipit laboriosam, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                  </li>
                </ol>
              </li>
            </ul>
          </section>

          <section className={classes.contentBox}>
            <div className={classes.header}>
              <h2>3. Цели обработки персональных данных</h2>
            </div>
            <ul>
              <li>
                <span className={classes.counter}>3.1</span>
                <p className={classes.text}>В Компании определены следующие цели обработки персональных данных:</p>
              </li>
              <li>
                <ul>
                  <li>
                    <p className={classes.text}>выполнение требований трудового законодательства РФ, включая заключение, сопровождение, изменение, расторжение трудовых договоров, которые являются основанием для возникновения или прекращения трудовых отношений между Компанией и ее работниками;</p>
                  </li>
                  <li>
                    <p className={classes.text}>предоставление информационных сервисов третьим лицам для оказания и / или получения медицинской помощи, в соответствии с требованиями законодательства РФ;</p>
                  </li>
                  <li>
                    <p className={classes.text}>Lorem ipsum dolor sit amet, quis nostrum exercitationem ullam corporis suscipit laboriosam, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                  </li>
                  <li>
                    <p className={classes.text}>заключение и выполнение обязательств по договорам с контрагентами, а также осуществление преддоговорных отношений;</p>
                  </li>
                  <li>
                    <p className={classes.text}>осуществление видов деятельности, предусмотренных учредительными документами Компании;</p>
                  </li>
                  <li>
                    <p className={classes.text}>взаимодействие с пользователями сервисов Оператора;</p>
                  </li>
                  <li>
                    <p className={classes.text}>направление пользователям сервисов Оператора уведомлений и сообщений, в том числе рекламного и маркетингового характера;</p>
                  </li>
                  <li>
                    <p className={classes.text}>выполнение Оператором требований, предусмотренных федеральным законодательством и иными нормативными правовыми актами Российской Федерации;</p>
                  </li>
                  <li>
                    <p className={classes.text}>иные цели, направленные на соблюдение действующего законодательства Российской Федерации.</p>
                  </li>
                </ul>
              </li>
            </ul>
          </section>

          <section className={classes.contentBox}>
            <div className={classes.header}>
              <h2>4. Правила обработки персональных данных</h2>
            </div>
            <ul>
              <li>
                <span className={classes.counter}>4.1</span>
                <p className={classes.text}>Lorem ipsum dolor sit amet, quis nostrum exercitationem ullam corporis suscipit laboriosam, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
              </li>
              <li>
                <span className={classes.counter}>4.2</span>
                <p className={classes.text}>Обработка Компанией специальных категорий персональных данных, касающихся расовой, национальной принадлежности, состояния здоровья, интимной жизни, допускается в случаях предусмотренных законодательством и при условии выполнения установленных законодательством РФ требований.</p>
              </li>
              <li>
                <span className={classes.counter}>4.3</span>
                <p className={classes.text}>Правовыми основаниями для обработки персональных данных являются:</p>
              </li>
              <li>
                <ul>
                  <li>
                    <p className={classes.text}>Конституция РФ;</p>
                  </li>
                  <li>
                    <p className={classes.text}>Трудовой Кодекс РФ;</p>
                  </li>
                  <li>
                    <p className={classes.text}>Федеральный закон от 27.07.2006 г. № 152-ФЗ «О персональных данных»;</p>
                  </li>
                  <li>
                    <p className={classes.text}>Постановление Правительства Российской Федерации от 1 ноября 2012 г. N 1119 "Об утверждении требований к защите персональных данных при их обработке в информационных системах персональных данных";</p>
                  </li>
                  <li>
                    <p className={classes.text}>Постановление Правительства Российской Федерации от 15.09.2008 г. №687 «Об утверждении Положения об особенностях обработки персональных данных, осуществляемой без использования средств автоматизации»;</p>
                  </li>
                  <li>
                    <p className={classes.text}>Приказ ФСТЭК России от 20.02.2013 N 21 "Об утверждении Состава и содержания организационных и технических мер по обеспечению безопасности персональных данных при их обработке в информационных системах персональных данных";</p>
                  </li>
                  <li>
                    <p className={classes.text}>Базовая модель угроз безопасности персональных данных при их обработке в информационных системах персональных данных (утверждена заместителем директора ФСТЭК России 15.02.2008 г.) (выписка);</p>
                  </li>
                  <li>
                    <p className={classes.text}>Lorem ipsum dolor sit amet, quis nostrum exercitationem ullam corporis suscipit laboriosam, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                  </li>
                  <li>
                    <p className={classes.text}>Постановление Правительства Российской Федерации от 12.04.2020 N 447 «Об утверждении Правил взаимодействия иных информационных систем, предназначенных для сбора, хранения, обработки и предоставления информации, касающейся деятельности медицинских организаций и предоставляемых ими услуг, с информационными системами в сфере здравоохранения и медицинскими организациями»;</p>
                  </li>
                  <li>
                    <p className={classes.text}>Lorem ipsum dolor sit amet, quis nostrum exercitationem ullam corporis suscipit laboriosam, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                  </li>
                </ul>
              </li>
              <li>
                <span className={classes.counter}>4.4</span>
                <p className={classes.text}>Обработка персональных данных в Компании осуществляется с согласия субъекта персональных данных или его уполномоченного представителя на обработку его персональных данных, если иное не предусмотрено законодательством Российской Федерации в области персональных данных. Согласие субъекта персональных данных может быть получено в письменной форме, так и в ином виде, обеспечивающем соблюдение требований законодательства РФ, подзаконных нормативных правовых актов и локальных актов Компании в области обработки и защиты персональных данных субъектов персональных данных, если получение письменного согласия не является в силу закона обязательным.</p>
              </li>
              <li>
                <span className={classes.counter}>4.5</span>
                <p className={classes.text}>Компания не размещает персональные данные субъекта в общедоступных источниках без его предварительного согласия.</p>
              </li>
              <li>
                <span className={classes.counter}>4.6</span>
                <p className={classes.text}>Оператор, с письменного согласия субъекта персональных данных, вправе производить трансграничную передачу персональных данных на территорию иностранного государства, органу власти иностранного государства, иностранному физическому лицу или иностранному юридическому лицу.</p>
              </li>
            </ul>
          </section>

          <section className={classes.contentBox}>
            <div className={classes.header}>
              <h2>5. Сведения о реализуемых мерах по надлежащей организации обработке и обеспечению безопасности персональных данных</h2>
            </div>
            <ul>
              <li>
                <span className={classes.counter}>5.1</span>
                <p className={classes.text}>Руководство Компании осознает необходимость и заинтересовано в обеспечении должного как с точки зрения требований нормативных документов РФ, так и обоснованного с точки зрения оценки рисков для бизнеса уровня безопасности персональных данных, обрабатываемых Компанией.</p>
              </li>
              <li>
                <span className={classes.counter}>5.2</span>
                <p className={classes.text}>Компания проводит оценку вреда, который может быть причинен субъектам персональных данных и определяет угрозы безопасности персональных данных. В соответствии с выявленными актуальными угрозами Компания применяет необходимые и достаточные организационные и технические меры, включающие в себя использование средств защиты информации, обнаружение фактов несанкционированного доступа, восстановление персональных данных, установление правил доступа к персональным данным, а также контроль и оценку эффективности применяемых мер.</p>
              </li>
              <li>
                <span className={classes.counter}>5.3</span>
                <p className={classes.text}>Компания принимает необходимые правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа к ним, уничтожения, изменения, блокирования, копирования, предоставления, распространения персональных данных, а также от иных неправомерных действий в отношении персональных данных, которыми являются в частности (но не ограничиваясь):</p>
              </li>
              <li>
                <ol>
                  <li>
                    <span className={classes.counter}>5.3.1</span>
                    <p className={classes.text}>Назначение ответственного лица за организацию обработки персональных данных и за обеспечение безопасности персональных данных в Компании, которое осуществляет весь комплекс мер необходимых для соблюдения требований закона и иных нормативных правовых актов в области обработки и защиты персональных данных.</p>
                  </li>
                  <li>
                    <span className={classes.counter}>5.3.2</span>
                    <p className={classes.text}>Ограничение и разграничение доступа работников и иных лиц, к персональным данным и средствам их обработки, мониторинг действий с персональными данными.</p>
                  </li>
                  <li>
                    <span className={classes.counter}>5.3.3</span>
                    <p className={classes.text}>Применение программно-технических средств обеспечения безопасности (антивирусных средств, межсетевых экранов, средств защиты от несанкционированного доступа, средств криптографической защиты информации), в том числе прошедших процедуру оценки соответствия в установленном порядке.</p>
                  </li>
                  <li>
                    <span className={classes.counter}>5.3.4</span>
                    <p className={classes.text}>Применение средств резервного копирования и восстановления информации.</p>
                  </li>
                  <li>
                    <span className={classes.counter}>5.3.5</span>
                    <p className={classes.text}>Регулярное обновление программного обеспечения, используемого при обработке персональных данных, для обеспечения безопасности обрабатываемых данных.</p>
                  </li>
                  <li>
                    <span className={classes.counter}>5.3.6</span>
                    <p className={classes.text}>Осуществление шифрования при передаче персональных данных по открытым каналам связи.</p>
                  </li>
                  <li>
                    <span className={classes.counter}>5.3.7</span>
                    <p className={classes.text}>Применение технических средств охраны помещений, в которых расположены технические средства информационных систем персональных данных, и мест хранения материальных носителей персональных данных.</p>
                  </li>
                  <li>
                    <span className={classes.counter}>5.3.8</span>
                    <p className={classes.text}>Ознакомление работников Компании, непосредственно осуществляющих обработку персональных данных, с положениями законодательства Российской Федерации о персональных данных, в том числе с требованиями к защите персональных данных, локальными актами в отношении обработки персональных данных и (или) обучением указанных работников.</p>
                  </li>
                  <li>
                    <span className={classes.counter}>5.3.9</span>
                    <p className={classes.text}>Осуществление внутреннего контроля за соблюдением установленного порядка и/или аудита соответствия обработки персональных данных Федеральному закону от 27.07.2006 № 152-ФЗ «О персональных данных» и принятыми в соответствии с ним нормативными правовыми актами, требованиями к защите персональных данных, локальными актами Компании, проверка эффективности принятых мер реагирования на инциденты.</p>
                  </li>
                  <li>
                    <span className={classes.counter}>5.3.10</span>
                    <p className={classes.text}>Оценка эффективности принимаемых мер по обеспечению безопасности персональных данных до ввода в эксплуатацию информационной системы персональных данных.</p>
                  </li>
                  <li>
                    <span className={classes.counter}>5.3.11</span>
                    <p className={classes.text}>Выявление фактов несанкционированного доступа к персональным данным и принятием соответствующих мер.</p>
                  </li>
                </ol>
              </li>
            </ul>
          </section>

          <section className={classes.contentBox}>
            <div className={classes.header}>
              <h2>6. Конфиденциальность</h2>
            </div>
            <ul>
              <li>
                <span className={classes.counter}>6.1</span>
                <p className={classes.text}>Компания и ее сотрудники, получившие доступ к персональным данным, обязаны не раскрывать третьим лицам и не распространять персональные данные без согласия субъекта обработки персональных данных, за исключением случаев, предусмотренных действующим законодательством РФ.</p>
              </li>
            </ul>
          </section>
          <section className={classes.contentBox}>
            <div className={classes.header}>
              <h2>7. Уничтожение либо обезличивание персональных данных</h2>
            </div>
            <ul>
              <li><span className={classes.counter}>7.1</span>
                <p className={classes.text}>Уничтожение либо обезличивание персональных данных субъекта производится в следующих случаях:</p>
              </li>
              <li>
                <ol>
                  <li>
                    <span className={classes.counter}>7.1.1</span>
                    <p className={classes.text}>по достижении целей их обработки или в случае утраты необходимости в их достижении в срок, не превышающий тридцати дней с момента достижения цели обработки персональных данных, если иное не предусмотрено договором, стороной по которому является субъект, иным соглашением между Компанией и субъектом (его представителем).</p>
                  </li>
                  <li>
                    <span className={classes.counter}>7.1.2</span>
                    <p className={classes.text}>в случаях, предусмотренных соглашениями с Оператором.</p>
                  </li>
                  <li>
                    <span className={classes.counter}>7.1.3</span>
                    <p className={classes.text}>в случае выявления неправомерной обработки персональных данных или правомерного отзыва персональных данных в срок, не превышающий десяти рабочих дней с момента выявления такого случая;</p>
                  </li>
                  <li>
                    <span className={classes.counter}>7.1.4</span>
                    <p className={classes.text}>в случае истечения срока хранения персональных данных, определяемого в соответствии с законодательством РФ и организационно-распорядительными документами Оператора, включая отзыв согласия на обработку персональных данных Пользователя;</p>
                  </li>
                  <li>
                    <span className={classes.counter}>7.1.5</span>
                    <p className={classes.text}>в случае предписания уполномоченного органа по защите прав субъектов персональных данных, Прокуратуры России или решения суда.</p>
                  </li>
                </ol>
              </li>
            </ul>
          </section>

          <section className={classes.contentBox}>
            <div className={classes.header}>
              <h2>8. Права субъектов персональных данных</h2>
            </div>
            <ul>
              <li><span className={classes.counter}>8.1</span>
                <p className={classes.text}>Субъект персональных данных имеет право на получение сведений об обработке его персональных данных Оператором.</p>
              </li>
              <li><span className={classes.counter}>8.2</span>
                <p className={classes.text}>Субъект персональных данных вправе требовать от Оператора уточнения этих персональных данных, их блокирования или уничтожения в случае, если они являются неполными, устаревшими, неточными, незаконно полученными или не могут быть признаны необходимыми для заявленной цели обработки, а также принимать предусмотренные законом меры по защите своих прав.</p>
              </li>
              <li><span className={classes.counter}>8.3</span>
                <p className={classes.text}>Право субъекта персональных данных на доступ к его персональным данным может быть ограничено в соответствии с федеральными законами, в том числе, если доступ субъекта персональных данных к его персональным данным нарушает права и законные интересы третьих лиц.</p>
              </li>
              <li><span className={classes.counter}>8.4</span>
                <p className={classes.text}>Для реализации и защиты своих прав и законных интересов субъект персональных данных имеет право обратиться к Оператору. Оператор рассматривает любые обращения и жалобы со стороны субъектов персональных данных, тщательно расследует факты нарушений и принимает все необходимые меры для их немедленного устранения, наказания виновных лиц и урегулирования спорных и конфликтных ситуаций в досудебном порядке.</p>
              </li>
              <li><span className={classes.counter}>8.5</span>
                <p className={classes.text}>Субъект персональных данных вправе обжаловать действия или бездействие Оператора путем обращения в уполномоченный орган по защите прав субъектов персональных данных.</p>
              </li>
            </ul>
          </section>

          <section className={classes.contentBox}>
            <div className={classes.header}>
              <h2>9. Заключительные положения</h2>
            </div>
            <ul>
              <li><span className={classes.counter}>9.1</span>
                <p className={classes.text}>Срок обработки персональных данных, обрабатываемых Компанией, равен сроку исполнения обязательств Компании или до отзыва согласия субъектом или прекращения деятельности Компании.</p>
              </li>
              <li><span className={classes.counter}>9.2</span>
                <p className={classes.text}>Настоящая Политика подлежит периодическому пересмотру, а также изменению, дополнению в случае появления новых законодательных актов и специальных нормативных актов по обработке и защите персональных данных, а также по решению Компании.</p>
              </li>
              <li><span className={classes.counter}>9.3</span>
                <p className={classes.text}>Вопросы, не урегулированные настоящей Политикой, регулируются действующим законодательством Российской Федерации.</p>
              </li>
              <li><span className={classes.counter}>9.4</span>
                <p className={classes.text}>Действующая редакция Политики на бумажном носителе хранится по месту нахождения Компании. Электронная версия Политики общедоступна на сайте Компании.</p>
              </li>
              <li><span className={classes.counter}>9.5</span>
                <p className={classes.text}>Лица, виновные в нарушении требований, регулирующих обработку и защиту персональных данных, несут ответственность в соответствии с законодательством РФ и локальными актами Компании.</p>
              </li>
            </ul>
          </section>
        </article>
        <div className={classes.documentFooter}>
          <img src={docFooterBg} alt="" className={classes.documentBg}/>
        </div>
      </div>
    </div>
  )
};

export default PersonalData;