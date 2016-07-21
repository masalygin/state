var State = require('../src').default;

describe('State', function () {

  let state = new State('user', 'session');

  state.clear();

  it('#set()', function () {
    expect(JSON.parse(sessionStorage.getItem('user'))).to.be.deep.equal({});
    state.set('name', 'John');
    expect(JSON.parse(sessionStorage.getItem('user'))).to.be.deep.equal({name: 'John'});
    state.set('age', 30);
    expect(JSON.parse(sessionStorage.getItem('user'))).to.be.deep.equal({name: 'John', age: 30});
  });


  it('#get()', function () {
    expect(state.get('name')).to.be.equal('John');
  });


  it('#value', function () {
    expect(state.value).to.be.deep.equal({name: 'John', age: 30});
  });


  it('#clear()', function () {
    state.clear();
    expect(JSON.parse(sessionStorage.getItem('user'))).to.be.deep.equal({});
  });

});
