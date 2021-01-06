import {BindingNotifyProperty} from '../service'

export default class FakeService {

    counterProperty: BindingNotifyProperty<number>;
    constructor() {
        this.counterProperty = new BindingNotifyProperty<number>(0);
    }

    fakeServiceMethod(): void
    {
        console.log("I Am fakeServiceMethod");
    }

    getValue(): number {
        return this.counterProperty.value;
    } 

    setValue() {
        this.counterProperty.setValue(this.counterProperty.value + 1);
        this.counterProperty.notify();
    }
}