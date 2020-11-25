import React, { useState } from 'react';

import useStyles from "./style";
import rootStyles from "../../Root/style";
import {ABOUT_PAGE_LINK} from "../../../config/pageLinks";
import logoPage from "../../../assets/images/svg/logoAbout.svg";
import {Link} from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import {API_GOOGLE_SITE} from "../../../config";
import ModalTemplates from "../../Templates/ModalTemplates/ModalTemplates";
import { USER_AGREEMENT, PERSONAL_DATA } from "../../../config";

const LegalEntitiesPage = props => {
  const classes = useStyles();
  const customClasses = rootStyles();
  const [ openModal, setOpenModal ] = useState(false);
  const [ typeOfModal, setTypeOfModal ] = useState(null);

  const handleClickAgreement = type =>{    
    setOpenModal(true);
    setTypeOfModal(type);
  };
  
  const form = (
    <form className={classes.loginForm}>
      <div className={classes.inputGroup}>
        <input
          // onChange={handleChange}
          // value={forRequest.full_name || ''}
          // name="full_name"
          className={classes.input}
          required
          type="text"
        />
        <span className={classes.inputBar}></span>
        <label className={classes.inputLabel} htmlFor="">Телефон или E-mail</label>
      </div>
      <div className={classes.inputGroup}>
        <input
          // onChange={handleChange}
          // value={forRequest.email || ''}
          // name="email"
          className={classes.input}
          required
          type="password"
        />
        <span className={classes.inputBar}></span>
        <label className={classes.inputLabel} htmlFor="">Пароль</label>
      </div>

      <button className={`${customClasses.btn} ${customClasses.btnMax}`}>Войти</button>
      <Link to={""} className={classes.forgotPassword}>Забыли пароль?</Link>
    </form>
  );

  return (
    <main className={classes.loginPage}>
      <div className={classes.loginPageLeft}>
        <div className={classes.loginPageLeftContent}>
          <div className={classes.loginPageLeftLogo}>
            <Link to={ABOUT_PAGE_LINK}>
              <img src={logoPage} alt="Логотип"/>
            </Link>
          </div>
          <h1 className={classes.loginPageLeftHeader}>Вход в личный кабинет для юридических лиц</h1>
          {form}
        </div>

        <div className={classes.loginPageLeftFooter}>
          <div className={classes.logFootBlock}>
            <ul className={classes.languageList}>
              <li className={classes.languageItem}>
                <a className={classes.logFootText} href="#">Russian</a>
              </li>
              <li className={classes.languageItem}>
                <a className={classes.logFootText} href="#">English</a>
              </li>
              <li className={classes.languageItem}>
                <a className={classes.logFootText} href="#">Chinese</a>
              </li>
            </ul>
          </div>
          <div className={classes.logFootBlock} onClick={()=>handleClickAgreement(USER_AGREEMENT)}>
            <a className={classes.logFootText} href="#">Пользовательское соглашение</a>
          </div>
          <div className={classes.logFootBlock} onClick={()=>handleClickAgreement(PERSONAL_DATA)}>
            <a className={classes.logFootText} href="#">Политика в отношении обработки персональных данных</a>
          </div>
          <div className={classes.logFootBlock}>
            <p className={classes.logFootText}>Testing © АО «КомпанияТехнологий», 2020</p>
          </div>
        </div>
      </div>
      <div className={classes.loginPageRight}></div>
      {
        openModal && 
          <ModalTemplates 
            typeOfModal={typeOfModal} 
            setOpenModal={setOpenModal}
          />
      } 
    </main>
  )
};

export default LegalEntitiesPage;