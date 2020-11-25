import {createUseStyles} from 'react-jss';
import React from 'react';
import {WHITE} from "../../../config/variables";

const useStyles = createUseStyles({
  // modalOverlay: {
  //   position: 'fixed',
  //   //display: 'none',
  //   width: '100%',
  //   height: '100%',
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   backgroundColor: 'rgba(0,0,0,0.5)',
  //   zIndex: 99,
  //   cursor: 'pointer',
  // },
  // modalWindow: {
  //   position: 'absolute',
  //   top: '100px',
  //   left: '50%',
  //   transform: 'translate(-50%)',
  //   height: 830,
  //   overflow: 'auto',
  //   width: '100%',
  //   maxWidth: 1204,
  //   borderRadius: 10,
  //   paddingRight: 64,
  // },
  //
  // btnCancel: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   width: 40,
  //   height: 40,
  //   position: 'absolute',
  //   top: 24,
  //   right: 0,
  //   backgroundColor: WHITE,
  //   borderRadius: '50%',
  //   outline: 'none',
  //   cursor: 'pointer',
  // },

  modalOverlay: {
    position: 'fixed',
    zIndex: 1300,
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
  },
  modalBackdrop: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    zIndex: -1,
    position: 'fixed',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // -webkit-tap-highlight-color: 'transparent',
    // opacity: 1;
    // transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  },
  modalContainer: {
    // opacity: 1;
    // transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    height: '100%',
    outline: 0,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalWrapContent: {
    maxWidth: 1140,
    // height: 'calc(100vh - 180px)',
    top: 5,
    display: 'flex',
    maxHeight: 'calc(100% - 64px)',
    flexDirection: 'column',
    margin: 84,
    position: 'relative',
    /*   overflow-y: auto; */
    boxShadow: '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)',
    borderRadius: 10,
    // background: '#fff',
  },
  btnCancel: {
    position: 'absolute',
    top: 24,
    right: -64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: WHITE,
    borderRadius: '50%',
    outline: 'none',
    cursor: 'pointer',
    borderStyle: 'none',
  },
  modalContent: {
    // overflowY: 'overlay',
    borderRadius: 10,
    // padding: '16px 24px',
  },
});

export default useStyles;
