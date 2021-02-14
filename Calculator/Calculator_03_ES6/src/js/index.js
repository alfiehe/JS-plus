import Calculator from '../modules/Calculator';

;((doc) => {

  // 获取根节点
  const oCalculator = doc.querySelector('.J-calculator');

  const init = () => {
    // 运行实例化计算器
    new Calculator(oCalculator).init();
  }

  init();

})(document);