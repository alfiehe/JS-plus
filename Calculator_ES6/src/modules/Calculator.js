import compute from '../lib/compute'; // 引入装饰器
import { getEventTarget } from '../utils';

// 导入UI组件
import ResultComponent from '../components/Result';
import InputGroupComponent from '../components/InputGroup';
import BtnGroupComponent from '../components/BtnGroup';

// ES6装饰器
@compute
export default class Calculator {
  constructor(el) {
    this.name = 'Calculator';
    this.el = el; // 从实例化对象中获取el节点

    // 实例化UI组件
    this.resultComponent = new ResultComponent();
    this.inputGroupComponent = new InputGroupComponent();
    this.btnGroupComponent = new BtnGroupComponent();
  }

  init() {
    this.render(); // 渲染UI
    this.bindEvent(); // 渲染UI完成后，才能获取节点操作事件
  }

  render() {
    const oFrag = document.createDocumentFragment();

    // 插入UI组件
    oFrag.appendChild(this.resultComponent.tpl());
    oFrag.appendChild(this.inputGroupComponent.tpl());
    oFrag.appendChild(this.btnGroupComponent.tpl());

    this.el.appendChild(oFrag); // 往根节点里插入
  }

  bindEvent() {
    const el = this.el;
    // render() 完成后才能获取节点
    this.oBtnGroup = el.querySelector('.btn-group');
    this.oResult = el.querySelector('.result');
    this.oInputs = el.querySelectorAll('.input-num');

    this.oBtnGroup.addEventListener('click', this.onBtnClick.bind(this), false);
  }

  onBtnClick(event) {
    const target = getEventTarget(event);
    const targetName = target.tagName.toLowerCase();

    if (targetName === 'button') {
      const method = target.dataset.method;
      const fVal = Number(this.oInputs[0].value.trim()) || 0;
      const sVal = Number(this.oInputs[1].value.trim()) || 0;
      this.setResult(method, fVal, sVal);
    }
  }

  // 计算结果到 result 文本节点中
  setResult(method, val1, val2) {
    this.oResult.textContent = this[method](val1, val2);
  }
}