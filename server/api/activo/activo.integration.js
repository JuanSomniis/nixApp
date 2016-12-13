'use strict';

var app = require('../..');
import request from 'supertest';

describe('Activo API:', function() {
  describe('GET /api/activos', function() {
    var activos;

    beforeEach(function(done) {
      request(app)
        .get('/api/activos')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          activos = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      activos.should.be.instanceOf(Array);
    });
  });
});
