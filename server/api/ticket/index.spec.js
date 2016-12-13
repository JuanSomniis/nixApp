'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var ticketCtrlStub = {
  index: 'ticketCtrl.index'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var ticketIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './ticket.controller': ticketCtrlStub
});

describe('Ticket API Router:', function() {
  it('should return an express router instance', function() {
    ticketIndex.should.equal(routerStub);
  });

  describe('GET /api/tickets', function() {
    it('should route to ticket.controller.index', function() {
      routerStub.get
        .withArgs('/', 'ticketCtrl.index')
        .should.have.been.calledOnce;
    });
  });
});
