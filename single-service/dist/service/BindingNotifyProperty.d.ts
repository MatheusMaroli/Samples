export default class BindingNotifyProperty<T> {
    private listeners;
    private _value;
    constructor(v?: any);
    setListener(fn: any): void;
    setValue(v: T): void;
    setValueAndNotify(v: T): void;
    get value(): T;
    notify(): void;
}
