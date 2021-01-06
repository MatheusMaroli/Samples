"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
class SingleServiceControl {
    constructor() {
        this.serviceInstances = new Array();
    }
    getServiceControl(name) {
        const serviceControl = this.serviceInstances.filter(f => f.name === name);
        return serviceControl ? serviceControl[0] : null;
    }
    register(service, ...args) {
        const serviceInstanced = this.getServiceControl(service.name);
        if (serviceInstanced) {
            serviceInstanced.addSubscribe();
            return serviceInstanced.service;
        }
        const newInstance = new service(args);
        const serviceControl = new _1.ServiceControl(newInstance, service.name);
        serviceControl.addSubscribe();
        this.serviceInstances.push(serviceControl);
        return serviceControl.service;
    }
    unregister(service) {
        const serviceInstanced = this.getServiceControl(service.name);
        if (serviceInstanced) {
            serviceInstanced.removeSubscribe();
            if (!serviceInstanced.hasSubscribers()) {
                const indexOf = this.serviceInstances.indexOf(serviceInstanced);
                this.serviceInstances.splice(indexOf, 1);
            }
        }
    }
    static instance() {
        if (!this._singleServiceControl)
            this._singleServiceControl = new SingleServiceControl();
        return this._singleServiceControl;
    }
}
exports.default = SingleServiceControl.instance();
//# sourceMappingURL=SingleServiceControl.js.map