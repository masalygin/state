[![Build Status](https://travis-ci.org/masalygin/state.svg?branch=master)](https://travis-ci.org/masalygin/state)
[![Coverage Status](https://coveralls.io/repos/github/masalygin/state/badge.svg?branch=master)](https://coveralls.io/github/masalygin/state?branch=master)


```js
import State from 'state';

const state = new State('user');
state.set('name', 'John'); 
// JSON.parse(localStorage.getItem('user')) equal {name: 'John'}
let name = state.get('name');
let age = state.get('age'); // equal undefined
```
