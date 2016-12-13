'use strict';
var ructor = require('../ructor');

//Set the table to the crud
let entity ='usuario';
ructor.inner(entity);

export function index(req, res) {
   ructor.all().then(response=>{
      res.json(response.recordset);
   });
}

export function find (req,res){
  var where =req.body.where;
  ructor.findBy(where).then(response=>{
    console.log(response);
     res.json(response.recordset);
  }).catch(err=>{
    console.log(err);
  });
}
