export const getEventTarget = (event) => {
  const e = event || window.event;
  return e.target || e.srcElement;
}