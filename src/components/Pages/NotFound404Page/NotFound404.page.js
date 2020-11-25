import React, {Suspense} from 'react';
import {Link} from "react-router-dom";
import useStyles from "./style";
import rootStyles from "../../Root/style"

import bgError from "../../../assets/images/png/errorPng.png";
import {ABOUT_PAGE_LINK} from "../../../config/pageLinks";

const NotFound404Page = props => {
  const classes = useStyles();
  const customClasses = rootStyles();

  return (
    <React.Fragment>
      <div className={classes.notFoundPage}>
        <div className={customClasses.container}>
          <div className={classes.notFoundRow}>
            <div className={classes.notFoundLeftCol}>
              <h1 className={classes.notFoundHeading}>Ошибка 404,<br/> страница не найдена</h1>
              <p className={classes.notFoundText}>Возможно, введен некорректный <br/> адрес или страница была удалена</p>
              <Link to={ABOUT_PAGE_LINK} className={`${customClasses.btn} ${customClasses.btnMid}`}>Вернуться на главную</Link>
            </div>
            <div className={classes.notFoundRightCol}>
              <div className={classes.notFoundImage}>
                <img src={bgError} alt="картинка ошибки"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
};

export default NotFound404Page;