```js
import State from 'state';

const state = new State('user');
state.set('name', 'John'); 
// JSON.parse(localStorage.getItem('user')) equal {name: 'John'}
let name = state.get('name');
let age = state.get('age'); // equal undefined
```
