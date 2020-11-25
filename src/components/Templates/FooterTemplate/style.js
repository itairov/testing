import {createUseStyles} from 'react-jss'
import {NEW_COLOR, NEW_COLOR_GRN} from "../../../config/variables";

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
const useStyles = createUseStyles({
  footer: {
    textAlign: 'center'
  },

  footerWrap: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    borderTop: '2px solid #eaeaea',
    fontSize: 14,
    padding: '40px 0',
    '& $politics, $agreement': {
      '&:hover': {
        color: NEW_COLOR,
      }
    }
  },
  footerWrapGrn: {
    '& $politics, $agreement': {
      '&:hover': {
        color: NEW_COLOR_GRN,
      }
    }
  },
  copyright: {
    // marginBottom: 16,
  },
  agreement: {
    marginTop: 16,
    cursor: 'pointer',
  },
  politics: {
    marginTop: 16,
    cursor: 'pointer',
  },

});

export default useStyles;
