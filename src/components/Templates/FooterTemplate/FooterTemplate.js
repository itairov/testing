import React, { useState } from 'react';

import useStyles from "./style";
import rootStyles from "../../Root/style";
import ModalTemplates from "../ModalTemplates/ModalTemplates";
import { USER_AGREEMENT, PERSONAL_DATA } from "../../../config";
import {SPECIALIST_PAGE_LINK} from "../../../config/pageLinks";
// import {
//   ABOUT_PAGE_LINK,
//   GET_STARTED,
//   LEGAL_ENTITIES_PAGE_LINK,
//   NOT_FOUND_404_PAGE_LINK,
//   NOT_FOUND_502_PAGE_LINK
// } from "../../../config/pageLinks";

const FooterTemplate = props => {
  const classes = useStyles();
  const customClasses = rootStyles();  
  const { isHidden, typeOfLogo } = props;
  const [ openModal, setOpenModal ] = useState(false);
  const [ typeOfModal, setTypeOfModal ] = useState(null);

  const handleClickAgreement = type =>{    
    setOpenModal(true);
    setTypeOfModal(type);
  };
  
  return (
       // window.location.pathname === GET_STARTED || window.location.pathname === LEGAL_ENTITIES_PAGE_LINK ? false : (
          <footer className={classes.footer}>
            <div className={customClasses.container}>
              <div className={`${classes.footerWrap}${location.pathname === SPECIALIST_PAGE_LINK ? ' ' + classes.footerWrapGrn : ''}`}>
                <span className={classes.copyright}>Testing © Акционерное общество "Компаниятехнологий", 2020</span>
                {
                 // (window.location.pathname !== ABOUT_PAGE_LINK && window.location.pathname !== NOT_FOUND_404_PAGE_LINK && window.location.pathname !== NOT_FOUND_502_PAGE_LINK || 
                  isHidden && (
                    <React.Fragment>
                      <span 
                        className={classes.agreement}
                        onClick={()=>handleClickAgreement(PERSONAL_DATA)}
                      >
                        Политика в отношении обработки персональных данных
                      </span>
                      <span 
                        className={classes.politics} 
                        onClick={()=>handleClickAgreement(USER_AGREEMENT)}
                      >
                        Пользовательское соглашение
                      </span>
                      {
                        openModal && 
                          <ModalTemplates 
                            typeOfModal={typeOfModal} 
                            setOpenModal={setOpenModal}
                            typeOfLogo={typeOfLogo}
                          />
                      } 
                    </React.Fragment>
                  )
                }
              </div>
            </div>
          </footer>
        //)

  )
}; 
 
export default FooterTemplate;
