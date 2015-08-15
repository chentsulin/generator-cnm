'use strict';

var expect = require('chai').expect;
var <%= camelModuleName %> = require('./');

it('should ', function() {
	expect(<%= camelModuleName %>('unicorns')).to.equal('unicorns & rainbows');
});
