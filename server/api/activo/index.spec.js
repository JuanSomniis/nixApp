'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var activoCtrlStub = {
  index: 'activoCtrl.index'
};

var routerStub = {
  get: sinon.spy()
};

// require the index with our stubbed out modules
var activoIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './activo.controller': activoCtrlStub
});

describe('Activo API Router:', function() {
  it('should return an express router instance', function() {
    activoIndex.should.equal(routerStub);
  });

  describe('GET /api/activos', function() {
    it('should route to activo.controller.index', function() {
      routerStub.get
        .withArgs('/', 'activoCtrl.index')
        .should.have.been.calledOnce;
    });
  });
});
