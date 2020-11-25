import {createUseStyles} from "react-jss";
import React from 'react';
//IMAGE
import versionSvg from '../../../assets/images/svg/version.svg';
import logoPage from '../../../assets/images/svg/logoAbout.svg';
import bgPromo from '../../../assets/images/jpg/bgPromoAbout.jpg';
import bgStatistics from '../../../assets/images/svg/bgStatistics.svg';
import bgFeedback from '../../../assets/images/svg/bgFeedback.svg';
import doctorBg from '../../../assets/images/png/doctorBg.png';


import {N_BLACK, NEW_COLOR, SMALL, WHITE, X_LARGE, X_LARGE_S, X_MEDIUM, XXX_MEDIUM} from "../../../config/variables";

const useStyles = createUseStyles({
  root: {
    fontFamily: '"Montserrat",arial,sans-serif',
  },
  pageRow: {
    marginBottom: "9.875rem",
  },





  information: {
    // marginBottom: "9.875rem",
    '& $boxCol': {
      // maxWidth: '35.1875rem',
      // width: '50%',
      // width: '100%',
    },
  },
  informationLeft: {
    '& $boxColRight': {
      width: 'calc(100% - 40.877% - 9.824%)',
      marginLeft: '7rem',
    }
  },
  informationRight: {
    '& $boxColLeft': {
      width: 'calc(100% - 40.877% - 9.824%)',
      marginRight: '7rem',
    }
  },
  informationList: {
    '& > div': {
      marginBottom: '1.5rem',

      '&:last-child': {
        marginBottom: 0,
      }
    }
  },
  informationItem: {
    backgroundColor: WHITE,
    borderRadius: '0.625rem',
    padding: X_LARGE,
  },
  informationTitle:{
    fontSize: XXX_MEDIUM,
    fontWeight: 600,
    lineHeight: '1.5rem',
    marginBottom: SMALL,
  },
  informationText: {
    fontSize: X_MEDIUM,
    lineHeight: XXX_MEDIUM,
  },

  //CLIENT
  infoClient: {
    // maxWidth: '83.75rem',
    maxWidth: 1333,
    width: '100%',
    margin: '0 auto',
    '& $boxRow': {
      paddingTop: 0,
      alignItems: 'normal',
    },
    '& $boxColRight': {
      '& h2': {
        marginTop: 22,
      },
    },
    '& $boxColLeft': {
      '& h2': {
        marginTop: 59,
      },
    }
  },
  clientLeft: {
    // marginLeft: '3.125rem',
    '& $boxColRight': {
      width: 'calc(100% - 53.467% - 16.693%)',
      marginLeft: '12.9375rem',
    }
  },
  clientRight: {
    // marginLeft: '6.25rem',
    '& $boxColLeft': {
      width: 'calc(100% - 53.467% - 16.693%)',
      marginRight: '8.5625rem',
    },
    '& $boxColRight': {
      '& $notifications': {
        bottom: -41,
      },
    },
    '& $boxRow': {
      paddingLeft: 100,
    }
  },
  infoClientImg: {
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    height: 440,
  },
  notifications: {
    position: 'absolute',
    right: -50,
    bottom: -27,
    zIndex: 2,
  },
  notificationsItem: {
    backgroundColor: WHITE,
    display: 'flex',
    marginBottom: '1rem',
    borderRadius: '0.625rem',
    width: '21.375rem',
    padding: '1rem',
    '&:last-child': {
      marginBottom: 0,
      marginLeft: 75,
    }
  },
  notificationsImage:{
    marginRight: '1rem',
    // minWidth: '3.1875rem',
    minWidth: 51,
    height: 51,
  },
  notificationsText: {
    fontSize: '0.875rem',
    // maxWidth: '14rem',
    lineHeight: '1.0625rem',
  },
  infoClientList: {
    maxWidth: '23.175rem',
  },
  infoClientItem: {
    marginBottom: X_MEDIUM,
    '&:last-child': {
      marginBottom: X_LARGE_S,
    }
  },
  //END CLIENT

  //----TEAM
  team: {
    width: '100%',
    display: 'flex',
    maxWidth: 1280,
    // marginLeft: 150,
    margin: '0 auto',
    paddingLeft: 70,
    alignItems: 'flex-start',
  },
  teamBlock: {
    width: '100%',
    position: 'relative',
  },
  teamBlockLeft: {
    maxWidth: 579,
  },
  teamBlockRight: {
    maxWidth: 663,
    marginTop: -65,
  },
  teamSwitches: {
    marginBottom: '2rem',
    // paddingTop: '2.5rem',
  },
  teamSwitch: {
    width: '3.375rem',
    height: '3.375rem',
    outline: 'none',
    borderRadius: '50%',
    backgroundColor: WHITE,
    border: 'none',
    marginRight: '1.5rem',
    cursor: 'pointer',
    boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.05)',
  },
  teamSwitchIcon: {
    verticalAlign: 'middle',
  },
  teamList: {
    marginLeft: '-2.5rem',
    maxWidth: '26.6875rem'
  },
  teamItem: {
    borderRadius: '3.125rem',
    // marginBottom: '1.5rem',
    padding: '0.75rem 2.5rem',
    transition: '0.7s',
    cursor: 'pointer',
    // '&:hover': {
    //   backgroundColor: WHITE,
    //   borderBottomLeftRadius: 0,
    //   padding: '1.5rem 2.5rem',
    //   margin: '1.0625rem 0',
    //   '& $teamTitle': {
    //     color: '#ff9f1d',
    //     marginBottom: '0.5rem'
    //   },
    //   '& $teamText': {
    //     height: 'auto',
    //     overflow: 'visible',
    //   },
    // }
  },
  teamItemActive: {
    backgroundColor: WHITE,
    borderBottomLeftRadius: 0,
    padding: '1.5rem 2.5rem',
    margin: '0.7625rem 0',
    transition: '0.9s',
    '& $teamTitle': {
      color: '#ff9f1d',
      marginBottom: '0.5rem'
    },
    '& $teamText': {
      height: 'auto',
      overflow: 'visible',
      pointerEvents: 'none',
    },
  },
  teamTitle: {
    fontSize: XXX_MEDIUM,
    lineHeight: 1.2,
    color: N_BLACK,
    fontWeight: 600,
    pointerEvents: 'none',

  },
  teamText: {
    fontSize: '1rem',
    color: N_BLACK,
    // display: 'none',
    overflow: 'hidden',
    height: 0,
  },

  //----end TEAM


  //STATISTICS
  statisticsBg: {
    width: '100%',
    backgroundImage: `url(${bgStatistics}),linear-gradient(161.99deg, #55D7FF 0%, #1E42C0 100%)`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    marginTop: 68,
  },
  statistics: {
    width: '100%',
  },
  statisticsList: {
    // width: 'calc(100% - 39.583%)',
    paddingLeft: '33.958%',
    display: 'flex',
    flexWrap: 'wrap',
    padding: '5.5rem 0',
    maxWidth: '53.25rem',
    boxSizing: 'content-box',
    // minHeight: 336,
    // alignContent: 'space-between',
    // boxSizing: 'content-box',
    position: 'relative',
    '&:before': {
      content: `""`,
      position: 'absolute',
      backgroundImage: `url(${doctorBg})`,
      backgroundSize: '100%',
      height: 538,
      width: 370,
      left: 55,
      bottom: 0,
    }
  },
  statisticsItem: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 284,
    width: '100%',
    alignItems: 'center',
    margin: '3.5rem 0',
  },
  statisticsQuantity: {
    fontSize: '3.4375rem',
    color: WHITE,
    lineHeight: '4.1875rem',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  statisticsText: {
    fontSize: X_MEDIUM,
    color: WHITE,
    lineHeight: XXX_MEDIUM,
    textAlign: 'center',
  },
  //END STATISTICS

  //FEEDBACK
  feedback: {
    minHeight: '41.375rem',
    width: '100%',
    backgroundColor: '#eaeaea',
    backgroundImage: `url(${bgFeedback})`,
    display: 'flex',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    borderRadius: 10,
  },
  feedbackWrap: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '4rem 6rem',
  },
  feedbackBlock: {
    width: '50%',
  },
  feedbackBox: {
    maxWidth: '19.25rem',
    marginTop: 1,
    '& h2': {
      marginBottom: '1rem',
    }
  },
  feedbackFormWrap: {
    backgroundColor: WHITE,
    padding: '2.5rem 4rem',
    borderRadius: 10,
    width: '100%',
    maxWidth: 498,
    '& button': {
      marginTop: 12,
    }
  },
  feedbackAgreement: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: 9,
    '& p': {
      fontSize: 14,
      lineHeight: '17px',
    },
    '& span': {
      color: '#FF9F1D',
      cursor: 'pointer',
    },

  },
  //END FEEDBACK




  //////ОБЩИЕ


  boxRow: {
    display: 'flex',
    // justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '2.5rem',
    width: '100%',
  },
  boxCol: {
    position: 'relative',
    '&$boxColLeft': {
      order: 1,
    },
    '&$boxColRight': {
      order: 2,
    },
    '& h2': {
      marginBottom: '2.5rem',
    }
  },
  boxColLeft: {},
  boxColRight: {},


  // INPUT GROUP
  inputGroup: {
    position: 'relative',
    marginBottom: 10,
    '& textarea': {
      resize: 'none',
      marginBottom: '1.55rem',
    }
  },
  input: {
    width: '100%',
    fontSize: '1rem',
    padding: '24px 5px 6px 20px',
    color: '#333333',
    display: 'block',
    border: '2px solid #eaeaea',
    borderRadius: 10,
    lineHeight: '20px',
    '&:focus': {
      outline: 'none',
    },
    '&:focus ~ $inputLabel, &:valid ~ $inputLabel': {
      top: 10,
      left: 19,
      fontSize: 12,
      color: '#888888',
      lineHeight: '15px',
    },
  },
  inputBar: {
    position: 'relative',
    display: 'block',
    width: '100%',
    '&:before, &after': {
      content: `""`,
      height: 2,
      width: 0,
      bottom: 0,
      position: 'absolute',
      background: '#5264AE',
      transition: '0.2s ease all',
    },
    '&:before': {
      left: '50%',
    },
    '&:after': {
      right: '50%',
    },
    '&:focus ~ &bar:before, &:focus ~ &bar:after': {
      width: '50%'
    },
  },
  inputLabel: {
    color: '#999',
    fontSize: 16,
    position: 'absolute',
    pointerEvents: 'none',
    left: 19,
    top: 19,
    transition: '0.2s ease all',
    display: 'block',
  },
  aaaaa: {
    width: 15,
    height: 15,
  },
  // INPUT GROUP

});

export default useStyles;