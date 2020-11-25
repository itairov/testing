import {createUseStyles} from "react-jss";
import React from 'react';
import {N_ACCENT, N_BLACK, N_MAIN, SMALL, WHITE, X_SMALL} from "../../../config/variables";
import arrowRule from "../../../assets/images/svg/arrowRule.svg";
import educationDocAvatar from "../../../assets/images/png/educationDocAvatar.png";

const useStyles = createUseStyles({
  educationPresentRulesWrap: {
    position: 'relative',
    width: '100%',
  },
  educationPresentRules: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 30,
  },
  educationPresentRule: {
    maxWidth: '16.375rem',
    marginBottom: 13,
    lineHeight: '15px',
    '& $educationPresentRuleTitle, & $educationPresentRuleDescription': {
      fontSize: SMALL,
      padding: '1rem 0.75rem',
      borderRadius: '0.625rem',
    },
    // '&:first-child': {
    //   marginTop: '1.25rem',
    // },
    '&:nth-child(2)': {
      marginTop: 30,
    },
    '&:nth-child(4)': {
      marginTop: 31,
    },
  },

  educationPresentRuleTitle: {
    backgroundColor: N_MAIN,
    color: WHITE,
    marginBottom: '3.25rem',
    position: 'relative',
    '&:after': {
      content: `""`,
      position: 'absolute',
      backgroundImage: `url(${arrowRule})`,
      height: 40,
      width: 40,
      left: '50%',
      bottom: -40,
      transform: 'translateX(-50%)',
    },
  },
  educationPresentRuleDescription: {
    backgroundColor: WHITE,
    color: N_MAIN,
  },
  educationPresentRow: {
    display: 'flex',
    marginBottom: '3.75rem',
    position: 'relative',
  },
  educationDocAvatar: {
    width: 184,
    height: 184,
    backgroundColor: WHITE,
    borderRadius: '50%',
    backgroundImage: `url(${educationDocAvatar})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center bottom',
    marginRight: 29,
  },
  // educationHeading: {
  //   fontSize: '1rem',
  //   fontWeight: 600,
  //   lineHeight: '1.25rem',
  //   color:  N_MAIN,
  //   marginBottom: 12,
  //   '& span': {
  //     color: N_ACCENT,
  //   }
  // },
  educationCharacteristic: {},
  educationCharacteristicItem: {
    fontSize: X_SMALL,
    fontWeight: 'normal',
    color: N_MAIN,
    lineHeight: '1rem',
    position: 'relative',
    paddingLeft: 15,
    '&:before': {
      content:  `""`,
      width: 4,
      height: 1,
      backgroundColor: N_MAIN,
      position: 'absolute',
      left:  0,
      top: '50%',
      transform: 'translateY(-50%)',
    }
  },
  educationNotific: {
    display: "flex",
    borderRadius: '0.625rem',
    overflow: 'hidden',
  },
  educationNotificLeft: {
    width: 112,
    backgroundColor: N_ACCENT,
    padding: '0 28px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  educationNotificIcon: {
    // position: 'absolute',
    width: 56,
    height: 56,
  },
  educationNotificRight: {
    maxWidth: 428,
    padding: '1rem 1.5rem',
    backgroundColor: WHITE,
  },
  educationNotificText: {
    fontSize: X_SMALL,
    color: N_MAIN,
    lineHeight: '1rem',
    fontWeight: 500,
    '& span': {
      color: N_ACCENT,
    }
  },

  educationPresentationBody: {
    '& $educationCloud': {
      right: -637,
    }
  },

  educationCloud: {
    padding: '24px 36px',
    backgroundColor: WHITE,
    borderRadius: '70px 70px 70px 0px',
    fontSize: '1rem',
    color: N_BLACK,
    lineHeight: '20px',
    textAlign: 'left',
    width: 471,
    right: -597,
    top: '50%',
    transform: 'translateY(-50%)',
    position: 'absolute',
    boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.05)',
  },

});

export default useStyles;