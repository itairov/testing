export function retry(fn, retriesLeft = 5, interval = 1000) {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            // reject('maximum retries exceeded');
            reject(error);
            return;
          }

          // Passing on "reject" is the important part
          retry(fn, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });
}

export const svgObject1 = {
  id: 'mask0', width: 156, height: 354, viewBox: '0 0 156 354',
  style: { position: 'absolute', right: 0, top: 0},
  mask: {
    x: 0, y: 0, width: 156, height: 354,
    path: { d: 'M49.0961 0.204102L0.0576172 57.0204L30.4615 321.51L79.4999 353.837L156 244.122L146.192 73.6735L49.0961 0.204102Z'}
  },
  g: { path: { d: 'M-230.404 184.368C-230.404 82.1288 -147.3 -0.754883 -45.0576 -0.754883C57.1843 -0.754883 140.289 82.1288 140.289 184.368C140.289 286.606 57.1843 369.49 -45.0576 369.49C-147.3 369.49 -230.404 286.606 -230.404 184.368Z' } },
  circle: [ { cx: 57, cy: 338 }, { cx: 33, cy: 17 } ]
};
export const svgObject2 = {
  id: 'mask1', width: 499, height: 227, viewBox: '0 0 499 227',
  style: { position: 'absolute', right: 0, top: 0},
  mask: {
    x: 0, y: 7, width: 499, height: 220,
    path: { d: 'M473.596 18.5509L498.115 26.3876L453 138.061L322.558 226.224L151.904 217.408L38.1346 134.143L0.865356 7.77539L57.75 13.6529L185.25 169.408L367.673 154.714L473.596 18.5509Z'}
  },
  g: { path: {d: 'M17.5577 -20.6323C17.5577 -149.922 122.65 -254.734 251.942 -254.734C381.235 -254.734 486.327 -149.922 486.327 -20.6323C486.327 108.657 381.235 213.47 251.942 213.47C122.65 213.47 17.5577 108.657 17.5577 -20.6323Z'} },
  circle: [ { cx: 482, cy: 20}, {cx: 20, cy: 11} ]
};
export const svgObject3 = {
  id: 'mask2', width: 231, height: 476, viewBox: '0 0 231 476',
  style: { position: 'absolute', right: 0, top: 0},
  mask: { x: 0, y: 0, width: 231, height: 474,
    path: { d: 'M110.827 456.796L73.5577 473.449L0 333.367L30.4038 148.225L104.942 65.9388L210.865 0.306152L230.481 59.0817L60.8077 199.163L46.0962 366.674L110.827 456.796Z'}
  },
  g: { path: { d: 'M25.5193 285.367C25.5193 129.027 152.599 2.28564 308.942 2.28564C465.286 2.28564 592.365 129.027 592.365 285.367C592.365 441.707 465.286 568.449 308.942 568.449C152.599 568.449 25.5193 441.707 25.5193 285.367Z'} },
  circle: [ { cx: 89, cy: 465}, { cx: 216, cy: 18}]
};
export const svgObject4 = {
  id: 'mask3', width: 641, height: 316, viewBox: '0 0 641 316',
  style: { position: 'absolute', right: 0, top: 0},
  mask: { x: 0, y: -33, width: 654, height: 349,
    path: { d: 'M74.3654 66.9184L0.807678 150.184L37.5865 169.776L173.423 50.2653L352.904 41.449L564.75 200.143L603.981 315.735L654 291.245L590.25 54.1837L291.115 -33L74.3654 66.9184Z'}
  },
  g: { path: {d: 'M-32.5192 333.367C-32.5192 149.977 116.548 1.30615 299.942 1.30615C483.336 1.30615 632.404 149.977 632.404 333.367C632.404 516.758 483.336 665.429 299.942 665.429C116.548 665.429 -32.5192 516.758 -32.5192 333.367Z'} },
  circle: [ { cx: 19,cy: 156}, { cx: 630, cy: 301 } ]
};
export const svgObject5 = {
  id: 'mask4', width: 478, height: 193, viewBox: '0 0 478 193',
  style: { position: 'absolute', right: 0, top: 0},
  mask: { x: 0, y: 0, width: 478, height: 194,
    path: { d: 'M30.7116 109.735L0.307739 158.714L156.25 193L412.231 130.306L477.942 34.3062L436.75 0.0205078L254.327 135.204L30.7116 109.735Z'}
  },
  g: { path: { d: 'M-160.519 -160.633C-160.519 -344.023 -11.4516 -492.694 171.942 -492.694C355.336 -492.694 504.404 -344.023 504.404 -160.633C504.404 22.7582 355.336 171.429 171.942 171.429C-11.4516 171.429 -160.519 22.7582 -160.519 -160.633Z'} },
  circle: [ { cx: 455, cy: 12}, { cx: 11, cy: 128 } ]
};

export const svgObject = [svgObject1, svgObject2, svgObject3, svgObject4, svgObject5];

export function getSvgTeam(svgObject) {
  return (
      <svg style={svgObject.style} width={svgObject.width} height={svgObject.height} viewBox={svgObject.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x={svgObject.mask.x} y={svgObject.mask.y} width={svgObject.mask.width} height={svgObject.mask.height}>
          <path fillRule="evenodd" clipRule="evenodd" d={svgObject.mask.path.d} fill="white"/>
        </mask>
        <g mask="url(#mask0)">
          <path d={svgObject.g.path.d} stroke="#EAEAEA" strokeWidth="2"/>
        </g>
        <circle cx={svgObject.circle[0].cx} cy={svgObject.circle[0].cy} r="10" fill="white" stroke="#3991E4" strokeWidth="2"/>
        <circle cx={svgObject.circle[1].cx} cy={svgObject.circle[1].cy} r="10" fill="white" stroke="#3991E4" strokeWidth="2"/>
      </svg>
  )
}