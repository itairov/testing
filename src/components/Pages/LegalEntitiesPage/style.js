import {createUseStyles} from 'react-jss';

import bgLegal from "../../../assets/images/jpg/bgLegalEntities.jpg";
import {DARK_GRAY, NEW_COLOR} from "../../../config/variables";

const useStyles = createUseStyles({
  loginPage: {
    width: '100%',
    display: 'flex',
    // height: '100vh',
    minHeight: '100vh',
  },
  loginPageLeft: {
    width: '37.5rem',
    maxWidth: 600,
    minWidth: 600,
    // minWidth: 320,
    // width: 600,

    flexGrow: 1,
    padding: '4.25rem 4.9rem 0 4.9rem',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
  },
  loginPageLeftContent: {
    flex: '1 0 auto',
  },

  loginPageLeftLogo: {
    textAlign: 'center',
    width: 196,
    height: 40,
    margin: '0 auto',
    marginBottom: 70,
  },
  loginPageLeftHeader: {
    fontSize: '2.25rem',
    fontFamily: 'Montserrat,Arial,sans-serif',
    fontWeight: 'normal',
    textAlign: 'center',
    lineHeight: '44px',
    marginBottom: 40,
  },
  loginPageLeftFooter: {
    flex: '0 0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& a': {
      '&:hover': {
        color: NEW_COLOR,
      }
    }
  },
  logFootBlock: {
    marginBottom: 8,
  },
  languageList: {
    display: 'flex',
    padding: 0,
    margin: 0,
  },
  languageItem: {
    listStyle: 'none',
    padding: '0px 4px',
    '&:not(:last-child):after': {
      content: `"|"`,
      paddingLeft: 8,
    }
  },
  logFootText: {
    fontSize: 12,
    color: '#333333',
    textDecoration: 'none',
    padding: 0,
    margin: 0,
    fontFamily: 'Monserrat, Arial, sans-serif',
  },


  loginPageRight: {
    width: '52.5rem',
    flexGrow: 1,
    backgroundImage: `linear-gradient(0deg, rgba(51, 51, 51, 0.5), rgba(51, 51, 51, 0.5)),url(${bgLegal})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  },

  loginForm: {
    maxWidth: 370,
    margin: '0 auto',
    '& button': {
      marginBottom: 24,
    }
  },
  forgotPassword: {
    color: DARK_GRAY,
    textAlign: 'center',
    fontSize: 14,
    lineHeight: '17px',
    display: 'block',
  },

  // INPUT GROUP
  inputGroup: {
    position: 'relative',
    marginBottom: 12,
    '&:nth-child(2)': {
      marginBottom: 20,
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
  // INPUT GROUP
});

export default useStyles;