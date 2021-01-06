export default class BindingNotifyProperty<T> {

    private listeners: Array<any>;
    private _value: T;
    constructor(v : any = null) {
        this.listeners = new Array<any>();
        this.setValue(v);
    }


    setListener(fn: any) {
        this.listeners.push(fn);
    }

    setValue(v: T) {
        this._value = v;
    }

    setValueAndNotify(v: T) {
        this.setValue(v);
        this.notify();
    }

    public get value(): T {
        return this._value;
    }

    notify() {
        this.listeners && this.listeners.map(fn => fn(this._value));
    }
}