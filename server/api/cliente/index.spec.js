'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var clienteCtrlStub = {
  index: 'clienteCtrl.index'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var clienteIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './cliente.controller': clienteCtrlStub
});

describe('Cliente API Router:', function() {
  it('should return an express router instance', function() {
    clienteIndex.should.equal(routerStub);
  });

  describe('GET /api/clientes', function() {
    it('should route to cliente.controller.index', function() {
      routerStub.get
        .withArgs('/', 'clienteCtrl.index')
        .should.have.been.calledOnce;
    });
  });
});
