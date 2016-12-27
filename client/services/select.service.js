'use strict'
const angular = require('angular');

/*@ngInject*/
export function selectService() {

  function createFilterFor(query) {
    return function filterFn(item) {
      return (item.indexOf(query) === 0);
    };
  }

  function search(query, _list) {
    let
      lastList = _list ? _list : this.list,
      results = query ? lastList.filter(createFilterFor(query)) : lastList;
    return results;
  }

  this.search = search;
  this.list = new Object();

}

export default angular.module('nixApp.select', [])
  .service('$select', selectService)
  .name;
