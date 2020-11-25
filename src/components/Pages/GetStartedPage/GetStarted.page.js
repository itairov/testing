import React from 'react';

import image1 from '../../../assets/images/jpg/getStarted1.jpg';
import image2 from '../../../assets/images/jpg/getStarted2.jpg';
import image3 from '../../../assets/images/jpg/getStarted3.jpg';

import useStyles from "./style";
import rootStyles from "../../Root/style";
import {ABOUT_PAGE_LINK} from "../../../config/pageLinks";
import {Link} from "react-router-dom";
const GetStartedPage = props => {
  window.scrollTo( 0, 0 );
  const classes = useStyles();
  const customClasses = rootStyles();

  return (
    <React.Fragment>
      {/*GET STARTED*/}
      <div className={classes.getStartedPage}>
        <section className={customClasses.pageRow}>
          <div className={customClasses.container}>
            <Link to={ABOUT_PAGE_LINK} className={customClasses.comeBackBtn}>Вернуться назад</Link>
            <div className={classes.getStarted}>
              <div className={classes.getStartedReg}>
                <a target="_blank" href="http://Testing.net">
                  <img src={image1} alt=""/>
                  <div className={classes.getStartedHeading}>Пациентам</div>
                </a>
              </div>
              <div className={classes.getStartedReg}>
                <a target="_blank" href="http://Testing.pro">
                  <img src={image2} alt=""/>
                  <div className={classes.getStartedHeading}>Специалистам</div>
                </a>
              </div>
              <div className={classes.getStartedReg}>
                <img src={image3} alt=""/>
                <div className={classes.getStartedHeading}>Юридическим лицам</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
    /*{/!*<button className={classes.myButton}>GetStartedPage</button>*!/}*/
  )
};

export default GetStartedPage;
