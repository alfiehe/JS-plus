// 1 获取需要的 DOM 节点
const result = document.querySelector('#result'); // 展示计算结果
const fInput = document.querySelector('#fInput'); // 第1个输入数值
const sInput = document.querySelector('#sInput'); // 第2个输入数值
const btnGroup = document.querySelector('.btn-group'); // 按钮操作组

// 2 监听事件源
btnGroup.addEventListener('click', handleBtnClick, false);

// 3 捕获事件源
function handleBtnClick(event) {
  const e = event || window.event;
  const target = e.target || e.srcElement;
  const targetName = target.tagName.toLowerCase();
  
  if (targetName !== 'button') {
    return false;
  }

  const fInputValue = Number(fInput.value.trim()) || 0;
  const sInputValue = Number(sInput.value.trim()) || 0;
  const method = target.dataset.method;
  switch(method) {
    case 'plus':
      result.textContent = fInputValue + sInputValue;
      break;
    case 'minus':
      result.textContent = fInputValue - sInputValue;
      break;
    case 'mult':
      result.textContent = fInputValue * sInputValue;
      break;
    case 'div':
      result.textContent = fInputValue / sInputValue;
      break;
    default:
      result.textContent = null;
  }
}

