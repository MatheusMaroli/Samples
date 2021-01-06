"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("../service");
class FakeService {
    constructor() {
        this.counterProperty = new service_1.BindingNotifyProperty(0);
    }
    fakeServiceMethod() {
        console.log("I Am fakeServiceMethod");
    }
    getValue() {
        return this.counterProperty.value;
    }
    setValue() {
        this.counterProperty.setValue(this.counterProperty.value + 1);
        this.counterProperty.notify();
    }
}
exports.default = FakeService;
//# sourceMappingURL=FakeService.js.map