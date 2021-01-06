import { BindingNotifyProperty } from '../service'

interface IKeyValuePier<T> {
    key: string,
    value: T
}

export default class FakeService2 {


    counterWithDisplay: BindingNotifyProperty<IKeyValuePier<number>>;
    constructor() {
        this.counterWithDisplay = new BindingNotifyProperty<IKeyValuePier<number>>();
    }


    fakeServiceMethod(): void {
        console.log("I Am fakeServiceMethod 2");
    }
}