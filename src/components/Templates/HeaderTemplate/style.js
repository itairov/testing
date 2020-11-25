import {createUseStyles} from 'react-jss'
import logoPage from "../../../assets/images/svg/logoAbout.svg";
import {N_BLACK, NEW_COLOR_GRN, WHITE} from "../../../config/variables";
import versionSvg from "../../../assets/images/svg/version.svg";

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
const useStyles = createUseStyles({
  wrapHeader: {
    backgroundColor: WHITE,
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 9999,
    boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.05)',
    '& + div': {
      marginTop: 80,
    }
  },
  siteSetup: {
    // textAlign: 'right',
    // borderBottom: '1px solid #eaeaea',
    // padding: '12px 40px',
  },
  siteSetupVisibility: {
    display: 'inline-block',
    marginRight: 40,
  },
  siteSetupVisibilityVersion: {
    textDecoration: 'none',
    position: 'relative',
    paddingLeft: 32,
    color: N_BLACK,
    '&:before': {
      content: `""`,
      width: 20,
      height: 12,
      backgroundImage: `url(${versionSvg})`,
      position: 'absolute',
      left: 0,
      top: 4,
    }
  },
  siteSetupLanguage: {
    display: 'inline-block',
  },
  navigation: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.9375rem 2.5rem',
  },
  navigationLogo: {
    display: 'block',
    width: '12.25rem',
    height: '3.125rem',
    marginRight: '10rem',
  },
  navigationLogoImg: {
    height: '100%',
  },
  navigationList: {
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  navigationItem: {
    listStyle: 'none',
    marginRight: 40,
  },
  navigationLink: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontWeight: 500,
    fontSize: '1rem',
    lineHeight: '1.25rem',
    color: '#333333',
    '&.active': {
      color: '#3991E4'
    },
    '&$isActive': {
      color: '#3991E4',
    },
    '&$navigationLinkGrn': {
      '&$isActive': {
        color: '#21B9A5',
      },
      '&.active': {
        color: '#21B9A5'
      }
    },
  },
  navigationLinkGrn: {

  },
  isActive: {
    color: 'red',
  },
  navigationLogin: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'flex-end',
  },

});

export default useStyles;
