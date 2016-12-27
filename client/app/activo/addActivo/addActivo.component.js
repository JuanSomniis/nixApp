'use strict';
const angular = require('angular');
const uiRouter = require('angular-ui-router');
import routes from './addActivo.routes';

export class AddActivoComponent {
  constructor(){

  }

  $onInit(){

  }
}


export default angular.module('nixApp.addActivo',[uiRouter])
  .config(routes)
  .component('addActivo',{
    template : require('./addActivo.html'),
    controller :  AddActivoComponent
  })
  .name;
