import {createUseStyles} from "react-jss";
import {
  DARK_GRAY,
  N_ACCENT,
  N_BLACK, N_MAIN,
  NEW_COLOR,
  NEW_COLOR_GRN, NEW_COLOR_GRN_HOVER, NEW_COLOR_HOVER, SMALL,
  WHITE,
  X_MEDIUM,
  XXX_MEDIUM
} from "../../config/variables";
import bgPromoAb from "../../assets/images/jpg/optimization/bgPromoAbout.jpg";
import bgPromoPat from "../../assets/images/jpg/optimization/bgPromoPatient.jpg";
import bgPromoPatFoot from "../../assets/images/jpg/optimization/bgPromoPatientFooter.jpg";
import bgPromoSpec from "../../assets/images/jpg/optimization/bgPromoSpec.jpg";
import bgPromoSpecFoot from "../../assets/images/jpg/optimization/bgPromoSpecFooter.jpg";
import checkPng from "../../assets/images/svg/check.svg";
import arrowWorkIns from "../../assets/images/svg/arrowWorkIns.svg";
import arrowWorkInsS from "../../assets/images/svg/arrowWorkInsS.svg";
import arrowComeBack from "../../assets/images/svg/arrowComeBack.svg";
import doctorBook from "../../assets/images/png/doctorBook.png";



const useStyles = createUseStyles(
  {
    '@global': {
      '*, *::before, *::after':{
        boxSizing: 'border-box',
      },
      html: {
        fontSize: 16,
      },
      body: {
        margin: '0 auto',
        fontFamily: '"Montserrat",Arial,sans-serif',
        // maxWidth: '90rem',
        backgroundColor: '#F6F8FA',
        color: '#333333',
        fontStyle: 'normal',
        fontSize: X_MEDIUM,
        lineHeight: XXX_MEDIUM,
        minHeight: 'calc(100vh - 80px)',
        scrollBehavior: 'smooth',
        textRendering: 'optimizeSpeed',
      },
      a: {
        textDecoration: 'none'
      },
      'a:not([class])': {
        textDecorationSkipInk: 'auto',
      },
      'ul,ol': {
        padding: 0,
        margin: 0,
      },
      'body,h1,h2,h3,h4,p,li,figure,figcaption,blockquote,dl,dd': {
        margin: 0,
      },
      'li[class]': {
        listStyle: 'none',
      },
      img: {
        maxWidth: '100%',
        // display: 'block',
        display: 'inline-block',
      },
      'input,button,textarea,select': {
          font: 'inherit',
      },
      // '@media (prefers-reduced-motion: reduce)': {
      //   '*':{
      //     animationDuration: '0.01ms !important',
      //     animationIterationCount: '1 !important',
      //     transitionDuration: '0.01ms !important',
      //     scrollBehavior: 'auto !important',
      //   }
      // }
      'input[type="checkbox"]': {
        position: 'absolute',
        left: '-9999px'
      },
      'input[type="checkbox"] + label:before': {
        content: `""`,
        display: 'inline-block',
        width: 16,
        height: 16,
        backgroundImage: `url(${checkPng})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: -30,
        border: '2px solid #eaeaea',
        borderRadius: 4,
        marginRight: 8,
        cursor: 'pointer',
      },
      'input[type="checkbox"]:checked + label:before': {
        backgroundPosition: 'center',
        backgroundColor: '#ff9f1d',
        borderColor: '#ff9f1d',

      }

    },

    ////////
    patientPage: {
      overflow: 'hidden',
      '& $subHeading': {
        '&:before': {
          backgroundColor: '#55D7FF'
        }
      }
    },
    ////////

    ////////
    specialistPage: {
      overflow: 'hidden',
      '& $subHeading': {
        '&:before': {
          backgroundColor: '#21B9A5',
        }
      }
    },
    ////////

    pageRow: {
      marginBottom:'10rem'
    },

    container: {
      // width: 100%
      maxWidth: '90rem',
      padding: '0 9.375rem',
      margin: '0 auto',
    },

    //----PROMO
    promoOverflow: {
      maxHeight: 'calc(100vh - 80px)',
      overflow: 'hidden',
      marginBottom: "9.875rem",
    },
    promo: {
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%',
      height: 0,
      overflow: 'hidden',
      paddingTop: '52.25%',
      position: 'relative',
      // backgroundSize: '100% 100%',
      // backgroundAttachment: 'fixed',
      // backgroundPosition: 'center center',
      // padding: '223px 150px',
      // minHeight: 750,
      // maxHeight: 750,

      // '& $btn': {
      //   padding: '21px 0',
      //   fontSize: XXX_MEDIUM,
      //   lineHeight: '22px',
      // },
      '& $btnMid': {
        padding: '1.3125rem',
        fontSize: '1.125rem',
        '&:hover': {
          backgroundColor: NEW_COLOR,
          color: WHITE,
        }
      },
      '&$promoFooter': {
        // maxHeight: '32.125rem',
        minHeight: 'auto',
        // padding: '10rem 9.375rem',
        paddingTop: '35.75%',
      },
    },
    promoPosition: {
      position: 'absolute',
      top: '15vw',
      left: '10.5vw',
      // paddingLeft: '10.416vw',
      // paddingTop: '15.4vw',
    },
    promoAbout: {
      // backgroundImage: `linear-gradient(0deg, rgba(57, 145, 228, 0.3), rgba(57, 145, 228, 0.3)), linear-gradient(0deg, rgba(51, 51, 51, 0.2), rgba(51, 51, 51, 0.2)), url(${bgPromoAb}) `,
      backgroundImage: `url(${bgPromoAb}) `,
    },
    promoPatient: {
      // backgroundImage: `linear-gradient(0deg, rgba(57, 145, 228, 0.3), rgba(57, 145, 228, 0.3)), linear-gradient(0deg, rgba(51, 51, 51, 0.3), rgba(51, 51, 51, 0.3)), url(${bgPromoPat}) `,
      backgroundImage: `url(${bgPromoPat}) `,
      '&$promoFooter': {
        backgroundImage: `url(${bgPromoPatFoot}) `,
      },
      '& $btn': {
        backgroundColor: WHITE,
        color: NEW_COLOR,
      }
    },
    promoSpec: {
      // backgroundImage: `linear-gradient(0deg, rgba(33, 185, 165, 0.3), rgba(33, 185, 165, 0.3)), linear-gradient(0deg, rgba(51, 51, 51, 0.3), rgba(51, 51, 51, 0.3)), url(${bgPromoSpec}) `,
      // backgroundImage: `linear-gradient(0deg, rgba(33, 185, 165, 0.25), rgba(33, 185, 165, 0.25)), linear-gradient(0deg, rgba(51, 51, 51, 0.35), rgba(51, 51, 51, 0.35)), url(${bgPromoSpec}) `,
      backgroundImage: `url(${bgPromoSpec})`,
      '&$promoFooter': {
        backgroundImage: `url(${bgPromoSpecFoot}) `,
      },
      '& $btn': {
        backgroundColor: WHITE,
        color: NEW_COLOR_GRN,
        '&:hover': {
          backgroundColor: NEW_COLOR_GRN,
          color: WHITE,
        }
      }
    },
    promoFooter: {
      '& $promoTitle':{
        fontSize: '2.25rem'
      },
      '& $promoSubtitle': {
        fontSize: '1.125rem'
      },
      '& $promoPosition': {
        top: '11vh',
      },
      '& $btnMid': {
        padding: '1rem 10px',
        fontSize: '1rem',
      },
    },
    promoTitle: {
      margin: 0,
      padding: 0,
      fontSize: '3rem',
      color: WHITE,
      fontWeight: 600,
      lineHeight: '59px',
      marginBottom: '1.5rem'
    },
    promoSubtitle: {
      fontSize: '1.5rem',
      lineHeight: '29px',
      color: WHITE,
      fontWeight: 500,
      marginBottom: '2.5rem',
    },
    //----end PROMO

    //----HEADERS
    subHeading: {
      fontSize: '2.25rem',
      lineHeight: '2.75rem',
      fontWeight: 'bold',
      paddingTop: '1.75rem',
      position: 'relative',
      marginBottom: '5rem',
      '&:before': {
        content: `""`,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '1.5rem',
        height: '0.25rem',
        backgroundColor: '#55D7FF',
      },

      '&$subHeadingGrn': {
        '&:before': {
          backgroundColor: NEW_COLOR_GRN,
        }
      },
    },
    subHeadingGrn: {},
    //----end HEADERS


    //----CHOICE
    choice: {},
    choiceList: {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    },
    choiceItem: {
      // width:
      width: 'calc((100% - 15px)/ 2)',
      marginBottom: '0.9375rem  ',
    },
    choiceItemWrap: {
      width: '100%',
      backgroundColor: WHITE,
      textAlign: 'center',
      padding: '3.75rem 1.75rem',
      minHeight: '34.75rem',
      borderRadius: 10,
    },
    choiceImage: {
      display: 'flex',
      height: '15.625rem',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '2.5rem',
    },
    choiceImg: {},
    choiceDescription: {
      textAlign: 'center',
    },
    choiceTitle: {
      fontSize: '1.25rem',
      lineHeight: '1.5rem',
      color: N_BLACK,
      fontWeight: 600,
      marginBottom: '1rem'
    },
    choiceTexts: {},
    choiceText: {
      marginBottom: '0.75rem',
      '&:last-child': {
        marginBottom: 0,
      }
    },
    //----end CHOICE

    //----WHITE_BOOK
    whiteBook: {
      display: 'flex',
      backgroundColor: WHITE,
      padding: '7.5rem 6.25rem',
      borderRadius: 10,
    },
    whiteBookBlock: {
      '& $subHeading': {
        marginTop: '3.125rem',
      }
    },
    whiteBookImage: {
      width: 370,
      height: 370,
      borderRadius: '50%',
      backgroundImage: `url(${doctorBook}),linear-gradient(143.12deg, #55D7FF 0%, #1E42C0 100%)`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom',
      marginRight: '7rem',
    },
    whiteBookText: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      marginBottom: '2rem',
    },
    //----end WHITE_BOOK

    //----TABLE SERVICES
    tableBg: {
      backgroundColor: NEW_COLOR,
      padding: '6.25rem 0',
      '&$tableBgGrn': {
        backgroundColor: NEW_COLOR_GRN,
      }
    },
    tableBgGrn: {},
    tableServices: {
      fontFamily: 'inherit',
      fontSize: '1.125rem',
      // background: white;
      // max-width: 70%;
      width: '100%',
      borderCollapse: 'collapse',
      textAlign: 'left',

      '& th, & td': {
        color: WHITE,
        fontSize: '1.125rem',
        fontWeight: 600,
        padding: '1.5rem 0',


        '&:first-child': {
          width: '37%'
        },
        '&:nth-child(2),&:nth-child(3)': {
          textAlign: 'center'
        },
        '&:nth-child(2)': {
          width: '32.456%',
        }
      },
      '& td': {
        borderBottom: '1px solid #ffffff',
      },
      '& th': {
        paddingTop: 0,
      }
    },
    //----end TABLE SERVICES

    //----PARTNERS
    partners: {},
    partnersList: {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    partnersItem: {
      width: 'calc((100% - 30px) / 3)',
      backgroundColor: WHITE,
      borderRadius: '0.625rem',
      marginBottom:  '0.9375rem',
      minHeight: 211,
      textAlign: 'center',
      padding: '0 28px',
      filter: 'grayscale(100%)',
      '&:hover': {
        cursor: 'pointer',
        filter: 'grayscale(0%)',
      }
    },
    partnersImage: {
      height: 144,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    partnersName: {
      fontSize: '0.875rem',
    },
    //----end PARTNERS

    //----WORK INSTRUCTION
    workInstruction: {
      display: 'flex',
      width: '100%',
      minHeight: 495,
    },
    workInstructionPatient: {
      '& $workInstructionSwitch': {
        '&$isActive': {
          '&:before': {
            color: NEW_COLOR,
          },
        },
        '&:after': {
          backgroundImage: `url(${arrowWorkIns})`,
        },
      },
      '& $workInstructionViewItem': {
        '&:before': {
          border: '1px solid #3991E4',
          color: NEW_COLOR,
        },
        '&:after': {
          backgroundColor: NEW_COLOR,
        }
      }
    },
    workInstructionSpecialist: {
      '& $workInstructionSwitch': {
        '&$isActive': {
          '&:before': {
            color: NEW_COLOR_GRN,
          },
        },
        '&:after': {
          backgroundImage: `url(${arrowWorkInsS})`,
        }
      },
      '& $workInstructionViewItem': {
        '&:before': {
          border: '1px solid #21B9A5',
          color: NEW_COLOR_GRN,
        },
        '&:after': {
          backgroundColor: NEW_COLOR_GRN,
        }
      },
    },
    workInstructionBlock: {
      paddingTop: '1.5rem',
      '&:first-child': {
        width: '45%',
        borderRight: '2px solid #eaeaea',
      },
      '&:last-child': {
        width: '55%',
        marginLeft: '4.5rem'
      },
    },
    workInstructionSwitches: {
      marginRight: 15,
      counterReset: 'li',
    },
    workInstructionSwitch: {
      fontSize: '1.25rem',
      lineHeight: '1.5rem',
      // padding: '1.875rem 0',
      marginBottom: '3.75rem',
      color: DARK_GRAY,
      maxWidth: '26.625rem',
      paddingRight: '0.5625rem',
      position: 'relative',
      cursor: 'pointer',
      paddingLeft: 21,
      fontWeight: 600,
      '&:before': {
        content: `counter(li) '.'`,
        counterIncrement: 'li',
        position: 'absolute',
        color: DARK_GRAY,
        left: 0,
        top: 0,
        fontSize: '1.25rem',
        fontWeight: 600,
      },
      '&$isActive': {
        // '&:before': {
        //   color: NEW_COLOR_GRN,
        // },
        color: N_BLACK,
        '&:after': {
          content: `""`,
          position: 'absolute',
          width: 9,
          height: 15,
          // backgroundImage: `url(${arrowWorkIns})`,
          backgroundRepeat: 'no-repeat',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
        },
      }
    },
    // workInstructionSwitchActive: {
    //   '&:after': {
    //     content: `""`,
    //     position: 'absolute',
    //     width: 9,
    //     height: 15,
    //     backgroundImage: `url(${arrowWorkIns})`,
    //     backgroundRepeat: 'no-repeat',
    //     right: 0,
    //     top: '50%',
    //     transform: 'translateY(-50%)',
    //   },
    // },

    workInstructionList: {
    },
    workInstructionItem: {
      opacity: 0,
      height: 0,
      '&$isActive': {
        opacity: 1,
        height: 'auto',
      },
    },
    isActive: {},

    workInstructionViewList: {
      counterReset: 'li',
},
    workInstructionViewItem: {
      position: 'relative',
      paddingLeft: 56,
      fontSize: '1rem',
      lineHeight: '1.25rem',
      color: N_BLACK,
      marginBottom: '1.5rem',
      '&:before': {
        content: `counter(li)`,
        counterIncrement: 'li',
        position: 'absolute',
        width: 32,
        height: 32,
        borderRadius: '50%',
        // border: '1px solid #3991E4',
        // color: NEW_COLOR,
        backgroundColor: WHITE,
        textAlign: 'center',
        lineHeight: '31px',
        left: 0,
        top: -5,
      },
      '&:after': {
        content: `" "`,
        position: 'absolute',
        height: '100%',
        width: 1,
        left: 16,
        top: 22,
        zIndex: -1,
      },
      '&:last-child': {
        '&:after': {
          display: 'none',
        }
      }
    },
    workInstructionViewTitle: {
      marginBottom: '0.5rem',
      fontWeight: 600,
    },
    workInstructionViewText: {

    },

    //----end WORK INSTRUCTION


    //----EDUCATION
    educationHeadingBox: {
      maxWidth: '39.375rem',
      marginBottom: 80,
      '& $subHeading': {
        marginBottom: '1.4rem',
      },
    },
    educationPresent: {
      width: 'calc(100% - 32.5rem)',
      minWidth: 500,
    },
    educationPresentHeader: {
      backgroundColor: '#123066',
      borderRadius: '0.625rem 0.625rem 0px 0px',
      borderLeft: '1rem solid #FF9F1D',
      padding: '1.25rem 3.5625rem',
      textAlign: 'center',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      minHeight: 144,
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    educationPresentTitle: {
      fontSize: '1.625rem',
      color: WHITE,
      lineHeight: '2rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem'
    },
    educationPresentSubTitle: {
      fontSize: '0.8125rem',
      lineHeight: '1rem',
      color: N_ACCENT,
    },
    educationPresentationBody: {
      padding: '3.75rem 2.5rem',
      backgroundColor: '#F0F4FF',
      position: 'relative',
    },
    educationPresentationFooter: {
      backgroundColor: '#B6C2D0',
      borderRadius: '0px 0px 10px 10px',
      fontSize: '0.625rem',
      lineHeight: SMALL,
      color: WHITE,
      padding: '1rem',
      position: 'relative',
      marginBottom: 132,
    },
    educationHeading: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: '1.25rem',
      color:  N_MAIN,
      marginBottom: 12,
      '& span': {
        color: N_ACCENT,
      }
    },
    //----end EDUCATION

    //----BUTTON
    btn: {
      border: 'none',
      // maxWidth: 274,
      width: '100%',
      outline: 'none',
      fontSize: X_MEDIUM,
      lineHeight: '20px',
      fontWeight: 'bold',
      padding: '1rem 10px',
      color: WHITE,
      borderRadius: 10,
      backgroundColor: NEW_COLOR,
      display: 'inline-flex',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'background-color 0.25s',
      '&:hover': {
        backgroundColor: NEW_COLOR_HOVER,
        color: WHITE,
      }
    },
    btnMin: {
      maxWidth: '11.0625rem',
      padding: '0.875rem 10px',
      fontWeight: 500,
      '&:hover': {
        backgroundColor: '#1E42BD',
      }
    },
    btnMid: {
      maxWidth: '17.125rem',
    },
    btnMax: {
      maxWidth: '100%',
    },
    btnGrn: {
      backgroundColor: NEW_COLOR_GRN,
      '&:hover': {
        backgroundColor: NEW_COLOR_GRN_HOVER,
      }
    },
    // btnBlu: {
    //   backgroundColor: NEW_COLOR,
    //   '&:hover': {
    //     // backgroundColor: NEW_COLOR_GRN_HOVER,
    //   }
    // },
    btnText: {
      backgroundColor: 'transparent',
      width: 'auto',
      color: N_BLACK,
      padding: '14px 30px',
      marginRight: 10,
      fontWeight: 500,
      '&$btnTextBlu': {
        '&:hover': {
          backgroundColor: WHITE,
          color: NEW_COLOR,
        }
      },
      '&$btnTextGrn': {
        '&:hover': {
          backgroundColor: WHITE,
          color: NEW_COLOR_GRN_HOVER,
        }
      },
    },
    btnTextBlu: {},
    btnTextGrn:{},
    comeBackBtn: {
      paddingLeft: '1.375rem',
      fontWeight: 500,
      position: 'relative',
      color: N_BLACK,
      margin: '5rem 0',
      display: 'inline-block',
      '&:before': {
        content: `""`,
        position: 'absolute',
        width: 9,
        height: 16,
        backgroundImage: `url(${arrowComeBack})`,
        backgroundRepeat: 'no-repeat',
        left: 0,
        top: 1,
      },
    },
    //----end BUTTON

  }
) ;

export default useStyles;