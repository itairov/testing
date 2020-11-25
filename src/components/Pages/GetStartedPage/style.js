import {createUseStyles} from 'react-jss'
import {WHITE} from "../../../config/variables";

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
const useStyles = createUseStyles({
  getStartedPage: {
    marginTop: 80,
  },
  getStarted: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  getStartedReg: {
    position: 'relative',
    width: 'calc((100% - 15px) / 3)',
    borderRadius: 10,
    overflow: 'hidden',
    cursor: 'pointer',
    '& img': {
      width: '100%',
      height: '100%',
    }
  },
  getStartedHeading: {
    position: 'absolute',
    top: '47%',
    left: '50%',
    fontSize: '2.25rem',
    color: WHITE,
    fontWeight: 'bold',
    transform: 'translate(-50%)',
    lineHeight: '2.75rem',
    textAlign: 'center'
  },

 /* myButton: {
    color: 'green',
    margin: {
      // jss-plugin-expand gives more readable syntax
      top: 5, // jss-plugin-default-unit makes this 5px
      right: 0,
      bottom: 0,
      left: '1rem'
    },
    '& span': {
      // jss-plugin-nested applies this to a child span
      fontWeight: 'bold' // jss-plugin-camel-case turns this into 'font-weight'
    }
  },
  myLabel: {
    fontStyle: 'italic'
  }*/
});

export default useStyles;
