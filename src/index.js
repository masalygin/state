export default class State {

  constructor(key, type = 'local') {
    this._key = key;
    this._type = type;
    this._storage = window[type + 'Storage'];
    let value = this._storage.getItem(key);
    this._value = value ? JSON.parse(value) : {};
  }

  get all() {
    return {...this._value};
  }

  get(key) {
    return this._value[key];
  }

  set(key, value) {
    this._value[key] = value;
    this._storage.setItem(this._key, JSON.stringify(this._value));
  }

}
