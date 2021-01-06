import { BindingNotifyProperty } from '../service';
interface IKeyValuePier<T> {
    key: string;
    value: T;
}
export default class FakeService2 {
    counterWithDisplay: BindingNotifyProperty<IKeyValuePier<number>>;
    constructor();
    fakeServiceMethod(): void;
}
export {};
