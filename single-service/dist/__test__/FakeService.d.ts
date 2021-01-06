import { BindingNotifyProperty } from '../service';
export default class FakeService {
    counterProperty: BindingNotifyProperty<number>;
    constructor();
    fakeServiceMethod(): void;
    getValue(): number;
    setValue(): void;
}
