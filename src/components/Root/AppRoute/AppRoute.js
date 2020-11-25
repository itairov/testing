import React, {Suspense, useState, useEffect} from 'react';
import useStyles from "./style";
import HeaderTemplate from "../../Templates/HeaderTemplate/HeaderTemplate";
import FooterTemplate from "../../Templates/FooterTemplate/FooterTemplate";
import { 
  LEGAL_ENTITIES_PAGE_LINK,
  PATIENT_PAGE_LINK,
  SPECIALIST_PAGE_LINK,
  GET_STARTED,
  PATIENT_EDUCATION_PAGE_LINK,
  SPECIALIST_EDUCATION_PAGE_LINK,
  LAWYERS_PAGE_LINK,
} from "../../../config/pageLinks";
import { ABOUT_LOGO, SPECIALIST_LOGO, PATIENT_LOGO } from "../../../config";

const AppRoute = props => {
  const { component } = props;
  const classes = useStyles();
  const [ isHidden, setIsHidden ] = useState(null);
  const [ typeOfLogo, setTypeOfLogo ] = useState(null);
  const links2 = [ 
    PATIENT_PAGE_LINK,
    SPECIALIST_PAGE_LINK, 
    LEGAL_ENTITIES_PAGE_LINK,
    PATIENT_EDUCATION_PAGE_LINK,
    SPECIALIST_EDUCATION_PAGE_LINK,
    LAWYERS_PAGE_LINK,

  ];
  const links1= [ 
    GET_STARTED,
    LEGAL_ENTITIES_PAGE_LINK,
   ];

  useEffect(() => {
    links2.includes(location.pathname) ? setIsHidden(true) : setIsHidden(false);
    location.pathname === PATIENT_PAGE_LINK ? setTypeOfLogo(PATIENT_LOGO) :
      location.pathname === SPECIALIST_PAGE_LINK ? setTypeOfLogo(SPECIALIST_LOGO) :
      setTypeOfLogo(ABOUT_LOGO);

  });  

  return (
    <Suspense {...props} fallback={
      <React.Fragment>
        <div className={classes.heartRate}>
          <svg  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
               width="150px" height="73px" viewBox="0 0 150 73" enableBackground="new 0 0 150 73">
          <polyline fill="none" stroke="#009B9E" strokeWidth="3" strokeMiterlimit="10"
                    points="0,45.486 38.514,45.486 44.595,33.324 50.676,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,63.729 84.122,45.486 97.297,45.486 103.379,40.419 110.473,45.486 150,45.486"/>
        </svg>
          <div className={classes.fadeIn}></div>
          <div className={classes.fadeOut}></div>
        </div>
      </React.Fragment>
    }>
      {
        location.pathname !== LEGAL_ENTITIES_PAGE_LINK && 
          <HeaderTemplate setIsHidden={setIsHidden} />
      }      
      {component}
      {
        !links1.includes(location.pathname) &&
          <FooterTemplate isHidden={isHidden} typeOfLogo={typeOfLogo}/>
      }
      
    </Suspense>
  )
};

export default AppRoute;
