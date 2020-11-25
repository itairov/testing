import {createUseStyles} from 'react-jss';
import {N_BLACK, NEW_COLOR_GRN} from "../../../config/variables";


const useStyles = createUseStyles({
  notFoundPage: {
    padding: '86px 0',
    height: 'calc(100vh - 182px)',
  },
  notFoundRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  notFoundLeftCol: {
    width: 421,
  },
  notFoundRightCol: {
    width: '40.8771',
  },
  notFoundText: {
    fontSize: '1rem',
    lineHeight: '20px',
    color: N_BLACK,
    marginBottom: 32,
  },
  notFoundHeading: {
    fontSize: '2.25rem',
    lineHeight: '2.75rem',
    fontWeight: 'bold',
    paddingTop: '1.75rem',
    position: 'relative',
    marginBottom: '1rem',
    '&:before': {
      content: `""`,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '1.5rem',
      height: '0.25rem',
      backgroundColor: '#55D7FF',
    },
  },
});

export default useStyles;