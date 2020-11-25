import {createUseStyles} from 'react-jss';
import React from 'react';
import {NEW_COLOR, NEW_COLOR_GRN, WHITE} from "../../../config/variables";
import documentFooter from '../../../assets/images/svg/documentFooter.svg';

const useStyles = createUseStyles({
  documentWrap: {
    maxWidth: 1140,
    backgroundColor: WHITE,
    zIndex: 99999,
    borderRadius: 10,
    overflow: 'hidden',
    textAlign: 'left',

    color: '#123066',
    lineHeight: '20px',
    '& b': {
      fontWeight: 600,
    },
    '& a': {
      color: NEW_COLOR,
      fontWeight: '600',
    },
    '&$Specialist': {
      '& a' : {
        color: NEW_COLOR_GRN,
      }
    }
  },
  Specialist: {},
  documentContainer: {
    padding: 80,
    paddingBottom: 30,
    maxHeight: 'calc(100vh - 200px)',
    overflowY: 'overlay'
  },
  docLogo: {
    width: 233,
    height: 48,
    marginBottom: 120,
  },
  contentBox: {
    marginBottom: 64,
    '& > ul': {
      position: 'relative',
    },
    '& > ul > li': {
      listStyle: 'none',
      paddingLeft: 30,
    },
    '& >  ul > li > ul > li': {
      listStyleType: `'—   '`,
      marginLeft: 30,
    },

    '& ol > li': {
      listStyle: 'none',
      paddingLeft: 40,
      position: 'relative',
    },

  },
  header: {
    marginBottom: 24,
    borderBottom: '2px solid #E0E0E0',

    '& h1, h2': {
      fontSize: 36,
      lineHeight: '44px',
      fontWeight: 'bold',
      color: '#123066',
      marginBottom: 16,
    }
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 16,
    fontWeight: 600,
    color: '#123066',
    lineHeight: '20px',
  },
  rightText: {
    marginBottom: 24,
    textAlign: 'right',
    fontWeight: 600,
  },
  text: {
    marginBottom: 24,
    fontSize: 16,
  },
  counter: {
    position: 'absolute',
    left: 0,
  },
  row: {
    display: 'flex',
    marginBottom: 16,
  },
  colL: {
    width: 300,
  },
  documentFooter: {
    width: '100%',
    height: 100,
    // background: `url(${documentFooter}),linear-gradient(176.23deg, #55D7FF 0%, #1E42C0 100%)`,
  },
  documentFooterGrn: {
    // background: `url(${documentFooter}),linear-gradient(173.22deg, #73FFC7 20.18%, #05A19A 79.6%)`
  },
  documentBg: {
    height: '100%',
  },
});

export default useStyles;
