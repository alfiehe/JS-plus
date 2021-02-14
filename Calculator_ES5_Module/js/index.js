;(function(doc, tools, compute) {

  // 获取页面无素节点
  const oResult = doc.querySelector('#result');
  const oFInput = doc.querySelector('#fInput');
  const oSInput = doc.querySelector('#sInput');
  const oBtnGroup = doc.querySelector('.btn-group');

  // 初始化管理
  function init() {
    bindEvent();
  }

  // 事件绑定源
  function bindEvent() {
    oBtnGroup.addEventListener('click', onBtnClick, false);
  }

  // 事件处理函数
  function onBtnClick(event) {

    // 获取点击元素
    const target = tools.getEventTarget(event);
    const targetName = target.tagName.toLowerCase();
    const method = target.dataset.method; // 获取button绑定的data-method属性值

    // 如果不是button元素，不往下执行了
    if (targetName !== 'button') {
      return false;
    }

    // 获取数字化input输入
    const fVal = tools.digitalize(oFInput.value);
    const sVal = tools.digitalize(oSInput.value);

    // 计算结果
    const result = compute[method](fVal, sVal);

    // 渲染结果到页面
    renderResult(result);
  }

  // 渲染结果值函数
  function renderResult(result) {
    oResult.textContent = result;
  }

  // 运行程序
  init();

})(document, tools, compute);
