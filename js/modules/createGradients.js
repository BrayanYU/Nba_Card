export default class CreateGradients {
  constructor(arrayInfo, target) {
    this.arrayInfo = arrayInfo;
    this.target = document.querySelector(target);
  }

  fillGradient(info) {
    const item = this.createGradients(info);
    this.target.appendChild(item);
  }

  createGradients(info) {
    const div = document.createElement('div');
    div.classList.add('gradient');
    div.setAttribute('color', `${info.firstColor}, ${info.secondColor}`);
    return div;
  }
  init() {
    this.arrayInfo.forEach(info => this.fillGradient(info));
    return this;
  }
}