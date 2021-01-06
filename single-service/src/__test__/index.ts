import { SingleServiceControl } from '../';
import FakeService from './FakeService';
import FakeService2 from './FakeService2';

const service = SingleServiceControl.register(FakeService);
const service2 = SingleServiceControl.register(FakeService);

service.counterProperty.setListener(counter => console.log(`counter is ${counter}`));
service.setValue();
service.setValue();
service.setValue();
service.setValue();
service.setValue();
const value = service2.getValue();
console.log(`value deve ser 5. Value: ===> ${value}`);

SingleServiceControl.unregister(FakeService);
SingleServiceControl.unregister(FakeService);


const service3 = SingleServiceControl.register(FakeService);
console.log(`value deve ser 0. Value: ===> ${service3.getValue()}`);





const fakeService2 = SingleServiceControl.register(FakeService2);
fakeService2.counterWithDisplay.setListener(counter => console.log(`${counter.key}${counter.value}`));
fakeService2.counterWithDisplay.setValueAndNotify({ ...fakeService2.counterWithDisplay.value, key: 'I am Counter with display. My number is: ', value: 0 });
fakeService2.counterWithDisplay.setValueAndNotify({ ...fakeService2.counterWithDisplay.value, key: 'I am Counter with display. My number is: ', value: 1 });
fakeService2.counterWithDisplay.setValueAndNotify({ ...fakeService2.counterWithDisplay.value, key: 'I am Counter with display. My number is: ', value: 2 });
fakeService2.counterWithDisplay.setValueAndNotify({ ...fakeService2.counterWithDisplay.value, key: 'I am Counter with display. My number is: ', value: 3 });

SingleServiceControl.unregister(FakeService2);
