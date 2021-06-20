export default class CreateControls {
  constructor(arrayInfo, target) {
    this.arrayInfo = arrayInfo;
    this.target = document.querySelector(target);
  }

  fillControls(info) {
    const item = this.createControls(info);
    this.target.appendChild(item);
  }

  createControls(info) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.setAttribute('src', `img/logos/thumb/thumb_${info.name}.png`);
    li.appendChild(img);
    return li;
  }

  init() {
    this.arrayInfo.forEach(info => this.fillControls(info));
    return this;
  }
}