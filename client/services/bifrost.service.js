'use strict';
const angular = require('angular');
/*@ngInject*/
export function bifrostService($http, $hummer) {
  let
    url = '/api/astral',
    entity = '',
    methods = {
      find: find,
      insert: insert,
      all: all
    };
  /*ACTIONS*/
  function find(valArray, whereArray) {
    let
      where = whereArray ? $hummer.objectToSentence(whereArray) : '1=1',
      val = $hummer.arrayToSentence(valArray),
      dataObject = {
        where: where,
        val: val,
        entity: entity
      };
    return $http.post(url + '/find', dataObject);
  }

  function all(whereArray) {
    let
      where = whereArray ? $hummer.objectToSentence(whereArray) : '1=1';
    return $http.post(url + '/find', {
      where: where,
      entity: entity
    });
  }

  function insert(valArray) {
    let
      _val = $hummer.returnQuotes(valArray);
    return $http.post(url, {
      val: _val,
      entity: entity
    });
  }
  /*PRIVATE FUNCTIONS */



  /*PUBLIC FUNCTIONS */
  function usuario() {
    entity = 'usuario';
    return methods;
  }

  function cliente(vista) {
    entity = vista ? vista : 'cliente';
    return methods;
  }

  function activo() {
    entity = 'activo';
    return methods;
  }

  function area() {
    entity = 'area';
    return methods;
  }

  this.area = area;
  this.usuario = usuario;
  this.cliente = cliente;
  this.activo = activo;
}

export default angular.module('nixApp.bifrost', [])
  .service('$bi', bifrostService)
  .name;
