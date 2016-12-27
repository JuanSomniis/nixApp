'use strict';
const angular = require('angular');
/*@ngInject*/
export function bifrostService($http, $hummer) {
  let gUrl = '/api/';
  let entity = '';
  let methods = {
    find: find,
    insert: insert,
    all: all
  };
  /*ACTIONS*/
  function find(valArray, whereArray) {
    let
      url = gUrl + entity,
      where = whereArray ? $hummer.objectToSentence(whereArray) : '1=1',
      val = $hummer.arrayToSentence(valArray),
      dataObject = {
        where: where,
        val: val
      };
    return $http.post(url + '/find', dataObject);
  }

  function all(whereArray) {
    let
      url = gUrl + entity,
      where = whereArray ? $hummer.objectToSentence(whereArray) : '1=1';
    return $http.post(url + '/find', {
      where: where
    });
  }

  function insert(valArray) {
    console.log(valArray);
    let
      url = gUrl + entity,
      _val = $hummer.returnQuotes(valArray);
    return $http.post(url, {
      val: _val
    });
  }
  /*PRIVATE FUNCTIONS */



  /*PUBLIC FUNCTIONS */
  function usuario() {
    entity = 'usuarios';
    return methods;
  }
  function cliente () {
    entity  = 'clientes';
    return methods;
  }
  this.usuario = usuario;
  this.cliente = cliente;
}

export default angular.module('nixApp.bifrost', [])
  .service('$bi', bifrostService)
  .name;
