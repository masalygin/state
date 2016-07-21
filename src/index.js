export default class State {

  constructor(key, type = 'local') {
    this._key = key;
    this._storage = window[type + 'Storage'];
    let value = this._storage.getItem(key);
    this._value = value ? JSON.parse(value) : {};
  }

  _save() {
    this._storage.setItem(this._key, JSON.stringify(this._value));
  }

  clear() {
    this._value = {};
    this._save();
    return this;
  }

  get value() {
    return {...this._value};
  }

  get isEmpty() {
    return Object.keys(this._value).length === 0;
  }

  get(key) {
    return this._value[key];
  }

  set(key, value) {
    this._value[key] = value;
    this._save();
    return this;
  }


  delete(key) {
    delete this._value[key];
    this._save();
    return this;
  }

}
