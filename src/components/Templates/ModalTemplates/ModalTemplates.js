import React, {useEffect} from "react";

import useStyles from "./styles";
import TermsOfUse from "../DocumentTemplate/TermsOfUse";
import ConsentToProcessingPatient from "../DocumentTemplate/ConsentToProcessingPatient";
import PersonalData from "../DocumentTemplate/PersonalData";
import btnCancel from '../../../assets/images/svg/cancel.svg';
import { USER_AGREEMENT, CONSENT_TO_PROCESSING, PERSONAL_DATA } from  '../../../config';
import "animate.css/animate.min.css";

const ModalTemplates = (props) => {
  const classes = useStyles();
  const { setOpenModal, typeOfModal, typeOfLogo } = props;

  const handleClick = () => {
    setOpenModal(false);
  };

  const handleClickModal = (event) => {
    const modal = document.querySelector('.isModalOpen');
    const isModal = event.target == modal || modal.contains(event.target);
    !isModal && setOpenModal(false);    
  };

  useEffect(()=>{
    document.addEventListener('mousedown', handleClickModal);
    return () => document.removeEventListener('mousedown', handleClickModal);
  },[]);
  
  return (
    <div className={classes.modalOverlay} >
      <div className={classes.modalBackdrop}></div>
      <div className="fadeInUp animated">
        <div className={classes.modalContainer}>
          <div className={classes.modalWrapContent}>
            <button className={classes.btnCancel} onClick={handleClick}>
              <img src={btnCancel} alt="закрыть"/>
            </button>
            <div className={`${classes.modalContent} isModalOpen`}>
              {
                (typeOfModal === USER_AGREEMENT) && <TermsOfUse typeOfLogo={typeOfLogo}/>
              }
              {
                (typeOfModal === CONSENT_TO_PROCESSING) && <ConsentToProcessingPatient typeOfLogo={typeOfLogo}/>
              }
              {
                (typeOfModal === PERSONAL_DATA) && <PersonalData typeOfLogo={typeOfLogo}/>
              }
            </div>
          </div>
        </div>
      </div>
    </div>

  )
};

export default ModalTemplates;
