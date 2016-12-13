'use strict';

var app = require('../..');
import request from 'supertest';

describe('Ticket API:', function() {
  describe('GET /api/tickets', function() {
    var tickets;

    beforeEach(function(done) {
      request(app)
        .get('/api/tickets')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          tickets = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      tickets.should.be.instanceOf(Array);
    });
  });
});
