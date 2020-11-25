import {createUseStyles} from "react-jss";
import React from 'react';

const useStyles = createUseStyles({
  heartRate: {
    width: 150,
    height: 'calc(100vh - 250px)',
    position: 'relative',
    margin: '20px auto',
  },
  fadeIn: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#F6F8FA',
    top: 0,
    right: 0,
    animation: '$heartRateIn 1s linear infinite',
  },
  fadeOut: {
    position: 'absolute',
    width: '120%',
    height: '100%',
    top: 0,
    left: '-120%',
    animation: '$heartRateOut 1s linear infinite',
    background: '#F6F8FA',

  },
  '@keyframes heartRateIn': {
    '0%': {
      width: '100%',
    },
    '50%': {
      width: 0,
    },
    '100%': {
      width: 0,
    }
  },

  '@keyframes heartRateOut': {
    '0%': {
        left: '-120%',
    },
      '30%': {
        left: '-120%',
    },
      '100%': {
        left: 0,
    }
  }
});


export default useStyles;