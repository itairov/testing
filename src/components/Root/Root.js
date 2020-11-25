import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {
  ABOUT_PAGE_LINK,
  LAWYERS_PAGE_LINK,
  PATIENT_PAGE_LINK,
  SPECIALIST_PAGE_LINK,
  GET_STARTED,
  SPECIALIST_EDUCATION_PAGE_LINK,
  PATIENT_EDUCATION_PAGE_LINK,
  LEGAL_ENTITIES_PAGE_LINK,
  NOT_FOUND_404_PAGE_LINK,
  NOT_FOUND_502_PAGE_LINK
} from '../../config/pageLinks';

import {
  AboutPage,
  LawyersPage,
  PatientPage,
  SpecialistPage,
  GetStartedPage,
  SpecialistEducationPage,
  PatientEducationPage,
  LegalEntitiesPage,
  NotFound404Page,
  NotFound502Page
} from './pageDynamics';

import useStyles from "./style";
 
import HeaderTemplate from "../Templates/HeaderTemplate/HeaderTemplate";
import FooterTemplate from "../Templates/FooterTemplate/FooterTemplate";
import AppRoute from "./AppRoute/AppRoute";

const Root = props => {
  const classes = useStyles();
  //const [ isHidden, setIsHidden ] = useState(null);

  return (
    <Router>
      {/* <HeaderTemplate setIsHidden={setIsHidden} /> */}
      <Switch>
        <AppRoute
          exact
          path={ABOUT_PAGE_LINK}
          component={<AboutPage />}
        />
        <AppRoute
          path={LAWYERS_PAGE_LINK}
          component={<LawyersPage />}
        />
        <AppRoute
          path={PATIENT_PAGE_LINK}
          component={<PatientPage />}
        />
        <AppRoute
          path={SPECIALIST_PAGE_LINK}
          component={<SpecialistPage />}
        />
        <AppRoute
          path={LEGAL_ENTITIES_PAGE_LINK}
          component={<LegalEntitiesPage />}
        />
        <AppRoute
          path={SPECIALIST_EDUCATION_PAGE_LINK}
          component={<SpecialistEducationPage />}
        />
        <AppRoute
          path={PATIENT_EDUCATION_PAGE_LINK}
          component={<PatientEducationPage />}
        />
        <AppRoute
          path={GET_STARTED}
          component={<GetStartedPage />}
        />
        <AppRoute
          // path={NOT_FOUND_404_PAGE_LINK}
          component={<NotFound404Page />}
        />
        <AppRoute
          path={NOT_FOUND_502_PAGE_LINK}
          component={<NotFound502Page />}
        />
      </Switch>
      {/* <FooterTemplate 
        isHidden={isHidden}
      /> */}
    </Router>
  )
};
 
export default Root;
