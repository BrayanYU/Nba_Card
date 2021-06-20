export default class AlterInfo {
  constructor(arrayInfo, controls, gradients) {
    this.arrayInfo = arrayInfo;
    this.controls = document.querySelectorAll(controls);
    this.gradients = document.querySelectorAll(gradients);
    this.activeClass = 'active';
    this.prevGradient = this.gradients[0];
  }

  configGradient(arrayInfo) {
    arrayInfo.forEach((info, index) => {
      this.gradients[index].style.backgroundImage = `linear-gradient(90deg, ${info.firstColor} 70%, ${info.secondColor} 30%)`;
    })
  }

  alterGradient(index) {
    let gradient = this.gradients[index];
    let prevGradient = this.prevGradient;
    this.gradients.forEach(g => g.classList.remove('first', 'second'));
    gradient.classList.add('first');
    prevGradient.classList.add('second');

    this.prevGradient = gradient;
  }

  alterVariable(index) {
    const primary = this.arrayInfo[index].firstColor;
    const secondy = this.arrayInfo[index].secondColor;
    document.documentElement.style.setProperty('--primary', primary);
    document.documentElement.style.setProperty('--secondy', secondy);
  }

  alterLogo(index) {
    const logo = document.querySelector('.logo');
    logo.setAttribute('src', `img/logos/logo_${this.arrayInfo[index].name}.png`);
  }

  alterImage(index) {
    const player = document.querySelector('.player');
    player.setAttribute('src', `img/players/player_${this.arrayInfo[index].name}.png`);    
    if (player.classList.contains(null)) player.classList.remove(null);
    else if (player.classList.contains("medium")) player.classList.remove("medium");
    else if (player.classList.contains("large")) player.classList.remove("large");
    player.classList.add(this.arrayInfo[index].sizeImage);
  }

  alterInfo(index) {
    const city = document.querySelector('.city');
    const nameTeam = document.querySelector('.name');
    const nameTeamBackground = document.querySelector('.nameTeam');
    city.innerText = this.arrayInfo[index].city;
    nameTeam.innerText = this.arrayInfo[index].name;
    nameTeamBackground.innerText = this.arrayInfo[index].name;
  }
  
  activeControl(control) {
    this.controls.forEach(control => {
      control.classList.remove(this.activeClass);
    });
    control.classList.add(this.activeClass);
  }

  addControlsEvent() {
    this.controls.forEach((control, index) => {
      control.addEventListener('click', () => {
        this.alterInfo(index);
        this.alterImage(index);
        this.alterLogo(index);
        this.alterVariable(index);
        this.alterGradient(index);
        this.activeControl(control);
    });
  });
  }

  init() {
    this.activeControl(this.controls[0]);
    this.alterInfo(0);
    this.alterImage(0);
    this.alterLogo(0);
    this.configGradient(this.arrayInfo);
    this.prevGradient.classList.add('first');
    this.addControlsEvent();
    return this;
  }
}