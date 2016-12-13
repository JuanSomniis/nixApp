'use strict';

var app = require('../..');
import request from 'supertest';

describe('Cliente API:', function() {
  describe('GET /api/clientes', function() {
    var clientes;

    beforeEach(function(done) {
      request(app)
        .get('/api/clientes')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          clientes = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      clientes.should.be.instanceOf(Array);
    });
  });
});
