"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("../service");
class FakeService2 {
    constructor() {
        this.counterWithDisplay = new service_1.BindingNotifyProperty();
    }
    fakeServiceMethod() {
        console.log("I Am fakeServiceMethod 2");
    }
}
exports.default = FakeService2;
//# sourceMappingURL=FakeService2.js.map