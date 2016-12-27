'use strict';

var express = require('express');
var controller = require('./activo.controller');

var router = express.Router();

router.get('/', controller.index);
router.post('/find', controller.find);
router.post('/', controller.insert);

module.exports = router;
