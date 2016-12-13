'use strict';
const angular = require('angular');

/*@ngInject*/
export function hummerService() {
	// AngularJS will instantiate a singleton by calling "new" on this function
}

export default angular.module('projectApp.hummer', [])
  .service('hummer', hummerService)
  .name;
