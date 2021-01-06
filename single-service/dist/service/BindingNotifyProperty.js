"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BindingNotifyProperty {
    constructor(v = null) {
        this.listeners = new Array();
        this.setValue(v);
    }
    setListener(fn) {
        this.listeners.push(fn);
    }
    setValue(v) {
        this._value = v;
    }
    setValueAndNotify(v) {
        this.setValue(v);
        this.notify();
    }
    get value() {
        return this._value;
    }
    notify() {
        this.listeners && this.listeners.map(fn => fn(this._value));
    }
}
exports.default = BindingNotifyProperty;
//# sourceMappingURL=BindingNotifyProperty.js.map