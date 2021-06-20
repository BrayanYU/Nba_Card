import CreateControls from './createControls.js';
import CreateGradients from './createGradients.js';
import AlterInfo from './alterInfo.js';

export default function infoArray(infoJson) {
  var arrayInfo = [];

  function convertArray(info) {
    info.forEach(i =>  {
      arrayInfo.push(i);
    });
    initInstance();
    return arrayInfo;
  }

  function initInstance() {
    const createControls = new CreateControls(arrayInfo, '.controls');
    createControls.init();
    const createGradients = new CreateGradients(arrayInfo, '.gradients');
    createGradients.init();
    const alterInfo = new AlterInfo(arrayInfo, '.controls li', '.gradient');
    alterInfo.init();
  }

  function processPromise() {
    infoJson.then(info => convertArray(info));
  }
  
  processPromise();
  
  return arrayInfo;
}