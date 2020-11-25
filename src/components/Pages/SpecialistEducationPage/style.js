import {createUseStyles} from "react-jss";
import React from 'react';
import {N_ACCENT, N_BLACK, N_MAIN, WHITE, X_MEDIUM, X_SMALL} from "../../../config/variables";
import questionIcon from "../../../assets/images/svg/questionIcon.svg";

const useStyles = createUseStyles({
  educationQuestionList: {
    columnGap: 16,
    columnFill: 'initial',
    columnCount: 2,
  },
  educationQuestionItem: {
    padding: '3.125rem 1rem 0rem 1rem',
    color: N_MAIN,
    maxWidth: 262,
    backgroundColor: WHITE,
    borderRadius: '0.625rem',
    position: 'relative',
    overflow: 'hidden',
    marginBottom: 16,
    display: 'inline-block',
    verticalAlign: 'top',
    '&:before': {
      content: `""`,
      backgroundImage: `url(${questionIcon})`,
      backgroundRepeat: 'no-repeat',
      position: 'absolute',
      top: 0,
      left: 0,
      width: 56,
      height: 56,
    }
  },
  educationQuestionHeading: {
    fontSize: '1rem',
    lineHeight: '1.25rem',
    fontWeight: 600,
    marginBottom: '0.625rem',
  },
  educationQuestionText: {
    fontSize: X_SMALL,
    lineHeight: X_MEDIUM,
    marginBottom: X_MEDIUM,
    '& $indent': {
      position: 'relative',
      textIndent: 10,
      '&:before': {
        content:  `""`,
        width: 4,
        height: 1,
        backgroundColor: N_MAIN,
        position: 'absolute',
        left: 0,
        top: 8,
      }
    },
    '& span': {
      color: N_ACCENT,
      fontWeight: 'bold',
    },
  },
  educationQuestionTitle: {
    color: N_ACCENT,
    fontWeight: 'bold',
  },
  indent: {},
  educationImageBlock: {
    maxWidth: 456,
    margin: '0 auto',
    marginBottom: 60,
  },
  educationPresentRow: {
    display: 'flex',
    alignItems: 'center',
  },
  educationDoctor: {
    width: 200,
    '& img': {
      maxWidth: 'none',
    }
  },
  educationPosition: {
    position: 'relative',
  },
  educationPresentationBody: {
    '& $educationCloud': {
      right: -637,
    }
  },

  educationWrapCloud: {
    position: 'absolute',
    right: -637,
    top: '50%',
    transform: 'translateY(-50%)',
    height: 276,
    '& $educationCloud': {
      right: 0,
      transform: 'none',

      '&:first-child': {
        top: 0,
      },
      '&:last-child': {
        bottom: 0,
      }
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