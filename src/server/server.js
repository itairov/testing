import path from 'path';
import fs from 'fs';

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Root from "../components/Root/Root";
import AboutPage from "../components/Pages/AboutPage/About.page";
import GetStartedPage from "../components/Pages/GetStartedPage/GetStarted.page";
import LawyersPage from "../components/Pages/LawyersPage/Lawyers.page";
import PatientPage from "../components/Pages/PatientPage/Patient.page";
import SpecialistPage from "../components/Pages/SpecialistPage/Specialist.page";
import LegalEntitiesPage from "../components/Pages/LegalEntitiesPage/LegalEntities.page";
import NotFound404Page from "../components/Pages/NotFound404Page/NotFound404.page";
import NotFound502Page from "../components/Pages/NotFound502Page/NotFound502.page";

import {
  ABOUT_PAGE_LINK,
  GET_STARTED,
  LAWYERS_PAGE_LINK,
  PATIENT_PAGE_LINK,
  SPECIALIST_PAGE_LINK,
  LEGAL_ENTITIES_PAGE_LINK,
  NOT_FOUND_404_PAGE_LINK,
  NOT_FOUND_502_PAGE_LINK
} from '../config/pageLinks';


const PORT = 8080;
const app = express();

const router = express.Router();

const getServerRenderer = component => {
  return (req, res, next) => {
    fs.readFile(path.resolve('dist/index.html'), 'utf-8', (err, data) => {
      if(err) {
        console.error(err.message)
      }

      return res.send(
        data.replace(
          '<div id="root"></div>',
          `<div id="root">${ReactDOMServer.renderToString(component)}</div>`
        )
      )
    })
  };
};

router.use(`^${ABOUT_PAGE_LINK}$`, getServerRenderer(<AboutPage />));
router.use(`^${LAWYERS_PAGE_LINK}$`, getServerRenderer(<LawyersPage />));
router.use(`^${PATIENT_PAGE_LINK}$`, getServerRenderer(<PatientPage />));
router.use(`^${LEGAL_ENTITIES_PAGE_LINK}$`, getServerRenderer(<LegalEntitiesPage />));
router.use(`^${SPECIALIST_PAGE_LINK}$`, getServerRenderer(<SpecialistPage />));
router.use(`^${GET_STARTED}$`, getServerRenderer(<GetStartedPage />));
router.use(`^${NOT_FOUND_404_PAGE_LINK}$`, getServerRenderer(<NotFound404Page />));
router.use(`^${NOT_FOUND_502_PAGE_LINK}$`, getServerRenderer(<NotFound502Page />));

router.use(
  express.static(path.resolve(__dirname, '..', 'dist'), { maxAge: '30d' })
);

app.use(router);

// app.use(express.static('./dist'))
app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`)
});
