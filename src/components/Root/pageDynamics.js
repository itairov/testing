import React, { lazy } from 'react';

import { retry } from '../../helpers';

export const GetStartedPage = lazy(() => retry(() => import('../Pages/GetStartedPage/GetStarted.page')));
export const AboutPage = lazy(() => retry(() => import('../Pages/AboutPage/About.page')));
export const LawyersPage = lazy(() => retry(() => import('../Pages/LawyersPage/Lawyers.page')));
export const PatientPage = lazy(() => retry(() => import('../Pages/PatientPage/Patient.page')));
export const SpecialistPage = lazy(() => retry(() => import('../Pages/SpecialistPage/Specialist.page')));
export const LegalEntitiesPage = lazy(() => retry(() => import('../Pages/LegalEntitiesPage/LegalEntities.page')));
export const SpecialistEducationPage = lazy(() => retry(() => import('../Pages/SpecialistEducationPage/SpecialistEducation.page')));
export const PatientEducationPage = lazy(() => retry(() => import('../Pages/PatientEducationPage/PatientEducation.page')));
export const NotFound404Page = lazy(() => retry(() => import('../Pages/NotFound404Page/NotFound404.page')));
export const NotFound502Page = lazy(() => retry(() => import('../Pages/NotFound502Page/NotFound502.page')));
