import React, { useEffect, useState, useMemo } from 'react';
import { Link, NavLink} from "react-router-dom";
import logoAbout from "../../../assets/images/svg/logoAbout.svg";
import logoSpecialist from "../../../assets/images/svg/logoSpecialist.svg";
import logoPatient from "../../../assets/images/svg/logoPatient.svg";

import useStyles from "./style";
import rootStyles from "../../Root/style";
import {
  ABOUT_PAGE_LINK,
  PATIENT_PAGE_LINK,
  SPECIALIST_PAGE_LINK,
  LAWYERS_PAGE_LINK, 
  LEGAL_ENTITIES_PAGE_LINK
} from '../../../config/pageLinks';


const HeaderTemplate = props => {
  const classes = useStyles();
  const customClasses = rootStyles();
  const [ navID, setNavID ] = React.useState(null);
  const { setIsHidden } = props;
  const navLink1 = 'navLink1';  
  const navLink2 = 'navLink2';
  const navLink3 = 'navLink3';
  const navLink4 = 'navLink4';

  const handleClick = event => {
    const id = event.target.dataset.id;
   // (id !== navLink1) ? setIsHidden(true) : setIsHidden(false);
    setNavID(id);
  };

  // let indexLink = null;
  // switch (location.pathname) {
  //   case ABOUT_PAGE_LINK: indexLink = 0;
  //     break;
  //   case PATIENT_PAGE_LINK: indexLink = 1;
  //     break;
  //   case SPECIALIST_PAGE_LINK: indexLink = 2;
  //     break;
  //   case LEGAL_ENTITIES_PAGE_LINK: indexLink = 3;
  //     break;
  // }

  // const [ counter, setCounter ] = React.useState(indexLink);

  // useEffect(() => {
  //   handleChangeCounter();
  // }, [counter]);

  // const handleChangeCounter = event => {
  //   switch (counter) {
  //     case 0: setNavID(navLink1);
  //       break;
  //     case 1: setNavID(navLink2);
  //       break;
  //     case 2: setNavID(navLink3);
  //       break;
  //     case 2: setNavID(navLink4);
  //       break;
  //   }
  // };

  // const logoCalculate = useMemo(() => {
  //   let logo = logoAbout;
  //   switch (navID) {
  //     case navLink1: return logo = logoAbout;
  //     break;
  //     case navLink2: return logo = logoPatient;
  //     break;
  //     case navLink3: return logo = logoSpecialist;
  //     break;
  //     default: return logoAbout;
  //   }

  //   return logo
  // }, [navID]);

  const [ srcLogo, setSrcLogo ] = useState(logoAbout);

  useEffect(() => {
    const logoPath = location.pathname;
    setSrcLogo( 
      logoPath === PATIENT_PAGE_LINK ? logoPatient :
      logoPath === SPECIALIST_PAGE_LINK ? logoSpecialist :
      logoAbout
    );
    setNavID(
      logoPath === ABOUT_PAGE_LINK ? navLink1 :
      logoPath === PATIENT_PAGE_LINK ? navLink2 :
      logoPath === SPECIALIST_PAGE_LINK ? navLink3 :
      logoPath === LEGAL_ENTITIES_PAGE_LINK ? navLink4 : 
      null
    );
  });
  

  return (
    // (
    //   window.location.pathname !== LEGAL_ENTITIES_PAGE_LINK ? (
        <div className={classes.wrapHeader}>
          <header className={classes.siteSetup}>
            {/*<div className={classes.siteSetupVisibility}>*/}
            {/*  <Link to="#" className={classes.siteSetupVisibilityVersion}>Версия для слабовидящих</Link>*/}
            {/*</div>*/}
            {/*<div className={classes.siteSetupLanguage}>*/}
            {/*  <div>Ru</div>*/}
            {/*  /!*<div>En</div>*!/*/}
            {/*</div>*/}
            <nav className={classes.navigation}>
              <Link to={ABOUT_PAGE_LINK} className={classes.navigationLogo} data-id="navLink1" onClick={handleClick}>
                {/* <img className={classes.navigationLogoImg} src={logoCalculate} alt="Testing"/> */}
                <img className={classes.navigationLogoImg} src={srcLogo} alt="Testing"/>
              </Link>
              <ul className={classes.navigationList}>
                {/*<li className={classes.navigationItem}>*/}
                {/*  <Link data-id="navLink1" to={ABOUT_PAGE_LINK} className={`${classes.navigationLink}${navID === navLink1 ? ' ' + classes.isActive : ''}`} onClick={handleClick}>О нас</Link>*/}
                {/*</li>*/}
                {/*<li className={classes.navigationItem}>*/}
                {/*  <Link data-id="navLink2" to={PATIENT_PAGE_LINK} className={`${classes.navigationLink}${navID === navLink2 ? ' ' + classes.isActive : ''}`} onClick={handleClick}>Пациентам</Link>*/}
                {/*</li>*/}
                {/*<li className={classes.navigationItem}>*/}
                {/*  <Link data-id="navLink3" to={SPECIALIST_PAGE_LINK} className={`${classes.navigationLink} ${classes.navigationLinkGrn}${navID === navLink3 ? ' ' + classes.isActive : ''}`} onClick={handleClick}>Специалистам</Link>*/}
                {/*</li>*/}
                {/*<li className={classes.navigationItem}>*/}
                {/*  <Link data-id="navLink4" to={LEGAL_ENTITIES_PAGE_LINK} className={`${classes.navigationLink} ${classes.navigationLinkGrn}${navID === navLink4 ? ' ' + classes.isActive : ''}`} onClick={handleClick}>Юридическим лицам</Link>*/}
                {/*</li>*/}

                <li className={classes.navigationItem}>
                  <NavLink data-id="navLink1" exact to={ABOUT_PAGE_LINK} className={classes.navigationLink} onClick={handleClick}>О нас</NavLink>
                </li>
                <li className={classes.navigationItem}>
                  <NavLink data-id="navLink2" to={PATIENT_PAGE_LINK} className={classes.navigationLink} onClick={handleClick}>Пациентам</NavLink>
                </li>
                <li className={classes.navigationItem}>
                  <NavLink data-id="navLink3" to={SPECIALIST_PAGE_LINK} className={`${classes.navigationLink} ${classes.navigationLinkGrn}`} onClick={handleClick}>Специалистам</NavLink>
                </li>
                <li className={classes.navigationItem}>
                  <NavLink data-id="navLink4" to={LEGAL_ENTITIES_PAGE_LINK} className={classes.navigationLink} onClick={handleClick}>Юридическим лицам</NavLink>
                </li>

                {/*<li className={classes.navigationItem}>*/}
                {/*  <Link to={LAWYERS_PAGE_LINK} className={classes.navigationLink}>Юридическим лицам</Link>*/}
                {/*</li>*/}
              </ul>

              {/*{*/}
              {/*  navID !== navLink1 && (*/}
              {/*    <div className={classes.navigationLogin}>*/}
              {/*      <button className={`${customClasses.btn} ${customClasses.btnText}`}>Вход</button>*/}
              {/*      <button className={`${customClasses.btn} ${customClasses.btnMin}`}>Регистрация</button>*/}
              {/*    </div>*/}
              {/*  )*/}
              {/*}*/}
              {
                navID === navLink1 && (
                  <div className={classes.navigationLogin}>
                    {/*<button className={`${customClasses.btn} ${customClasses.btnText}`}>Вход</button>*/}
                    {/*<button className={`${customClasses.btn} ${customClasses.btnMin}`}>Регистрация</button>*/}
                  </div>
                )
              }
              {
                navID === navLink2 && (
                  <div className={classes.navigationLogin}>
                    <a target="_blank" href="https://Testing.net/" className={`${customClasses.btn} ${customClasses.btnText} ${customClasses.btnTextBlu}`}>Вход</a>
                    <a target="_blank" href="https://Testing.net/create_account" className={`${customClasses.btn} ${customClasses.btnMin}`}>Регистрация</a>
                  </div>
                )
              }
              {
                navID === navLink3 && (
                  <div className={classes.navigationLogin}>
                    <a target="_blank" href="https://Testing.pro/" className={`${customClasses.btn} ${customClasses.btnText} ${customClasses.btnTextGrn}`}>Вход</a>
                    <a target="_blank" href="https://Testing.pro/#signup" className={`${customClasses.btn} ${customClasses.btnMin} ${customClasses.btnGrn}`}>Работать с нами</a>
                  </div>
                )
              }

            </nav>
          </header>
        </div>
      // ):false
   // )
  )
};

export default HeaderTemplate;
