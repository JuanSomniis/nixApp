'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './master.routes';

export class MasterComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
  $onInit(){}
}

export default angular.module('nixApp.master', [uiRouter])
  .config(routes)
  .component('master', {
    template: require('./master.html'),
    controller: MasterComponent
  })
  .name;
