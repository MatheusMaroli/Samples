"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServiceControl {
    constructor(service, name) {
        this.numberOfSubscribed = 0;
        this.service = service;
        this.name = name;
    }
    addSubscribe() {
        this.numberOfSubscribed = this.numberOfSubscribed + 1;
    }
    removeSubscribe() {
        this.numberOfSubscribed = this.numberOfSubscribed - 1;
    }
    hasSubscribers() {
        return this.numberOfSubscribed > 0;
    }
}
exports.default = ServiceControl;
//# sourceMappingURL=ServiceControl.js.map