'use strict';

var chai    = require('chai');
var expect  = chai.expect;

chai.should();

var Model = require('../model.js');

describe('model tests', function() {

  var model;

  before(function() {
    model = new Model({
      name: 'Ale',
      age: 21
    });
  });

  after(function() {
    model = undefined;
  });

  it('init and get', function() {
    expect(model.get('name')).to.equal('Ale');
  });

  it('set', function() {
    model.set({
      name: 'Dario',
      age: 22
    })

    model.get('name').should.equal('Dario');
    model.get('age').should.equal(22);
  });

});
