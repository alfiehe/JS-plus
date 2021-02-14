import tpl from './index.tpl';

export default class BtnGroupComponent {
  constructor() {
    this.name = 'BtnGroupComponent';
  }

  tpl() {
    const oDiv = document.createElement('div');
    oDiv.innerHTML = tpl();
    oDiv.className = 'btn-group';
    return oDiv;
  }
}