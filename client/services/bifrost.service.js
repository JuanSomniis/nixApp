'use strict';
const angular = require('angular');
/*@ngInject*/
export function bifrostService($http) {
  let gUrl = '/api/';
  let entity = '';
  let methods = {
    find:find
  }
  /*ACTIONS*/
  function find(whereArray) {
    let url = gUrl + entity;
    let where = objectToSentence(whereArray);
    return $http.post(url+'/find',{where:where});
  }
  /*PRIVATE FUNCTIONS */
  function objectToSentence(objectArray){
    let sentence  ='' ;
    for (var i = 0; i < objectArray.length; i++) {
      for (var name in objectArray[i]) {
        sentence += " "+ name  +" = '" + objectArray[i][name] + "' and";
      }
    }
    sentence += ' 1= 1';
    return sentence;
  }
  /*PUBLIC FUNCTIONS */
  function usuario () {
    entity = 'usuarios';
    return methods;
  }
  this.usuario = usuario;
}

export default angular.module('nixApp.bifrost', [])
  .service('$bi', bifrostService)
  .name;
