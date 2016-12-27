'use strict';
var ructor = require('../ructor');

//Set the table to the crud
let entity = 'usuario';
ructor.inner(entity);

export function index(req, res) {
  ructor.all().then(response => res.json(response.recordset));
}

export function find(req, res) {
  let where = req.body.where;
  let val = req.body.val ? req.body.val : '*';
  ructor.findBy(where, val).then(response => res.json(response.recordset));
}

export function insert(req, res) {
  let val = req.body.val;
  ructor.insert(val).then(response => res.send(response));
}
