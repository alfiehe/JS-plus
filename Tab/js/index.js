;(function(doc, tools) {

  const Tab = function(options) {
    const oTab = doc.querySelector(options.el);

    this.oNav = oTab.querySelector('.tab-nav');
    this.oNavItems = this.oNav.querySelectorAll('li');
    this.oContent = oTab.querySelector('.tab-content');
    this.oContentItems = this.oContent.querySelectorAll('.tab-item');

    this.currentIndex = 0;
  }

  Tab.prototype.init = function() {
    console.log(this.oContentItems);
    this.bindEvent();
  }

  Tab.prototype.bindEvent = function() {
    this.oNav.addEventListener('click', this.onNavClick.bind(this), false);
  }

  Tab.prototype.onNavClick = function(event) {
    const target = tools.getTarget(event);
    const className = target.className;

    if (className === 'tab-nav-label') {
      this.setCurrent(this.currentIndex, 'hide');
      this.currentIndex = [].indexOf.call(this.oNavItems, target);
      this.setCurrent(this.currentIndex, 'show');
    }
  }

  Tab.prototype.setCurrent = function(index, action) {
    switch(action) {
      case 'show':
        this.oNavItems[index].className += ' current';
        this.oContentItems[index].className += ' current';
        break;
      case 'hide':
        this.oNavItems[index].className = 'tab-nav-label';
        this.oContentItems[index].className = 'tab-item';
        break;
      default:
        break;
    }
  }
  
  window.Tab = Tab;

})(document, initToolModules);