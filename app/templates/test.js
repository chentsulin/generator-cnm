import { expect } from 'chai';
var <%= camelModuleName %> = require('../');

describe('<%= camelModuleName %>', () => {
  it('should ', () => {
    expect(<%= camelModuleName %>('unicorns')).to.equal('unicorns & rainbows');
  });
});

