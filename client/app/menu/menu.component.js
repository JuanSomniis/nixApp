'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './menu.routes';

export class MenuComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
  $onInit(){}
}

export default angular.module('nixApp.menu', [uiRouter])
  .config(routes)
  .component('mimenu', {
    template: require('./menu.html'),
    controller: MenuComponent
  })
  .name;
