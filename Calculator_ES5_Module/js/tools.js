var tools = (function() {

  // 根据事件触发获取元素节点
  function getEventTarget (event) {
    const e = event || window.event;
    return e.target || e.srcElement;
  }

  // 处理表单数字输入
  function digitalize(value) {
    return Number(value.trim()) || 0;
  }

  return {
    getEventTarget: getEventTarget,
    digitalize: digitalize,
  }

})();
