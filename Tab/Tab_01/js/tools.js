var initToolModules = (function() {

  var getTarget = function(event) {
    const ev = event || window.event;
    return ev.target || ev.srcElement;
  }

  return {
    getTarget: getTarget
  }

})();