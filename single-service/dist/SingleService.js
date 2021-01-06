"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("./service");
class SingleService {
    constructor() {
        this.serviceControls = new Array();
    }
    getServiceControl(name) {
        const serviceControl = this.serviceControls.filter(f => f.name === name);
        return serviceControl ? serviceControl[0] : null;
    }
    register(service, ...args) {
        const serviceInstanced = this.getServiceControl(service.name);
        if (serviceInstanced) {
            serviceInstanced.addSubscribe();
            return serviceInstanced.service;
        }
        const newInstance = new service(args);
        const serviceControl = new service_1.ServiceControl(newInstance, service.name);
        serviceControl.addSubscribe();
        this.serviceControls.push(serviceControl);
        return serviceControl.service;
    }
    unregister(service) {
        const serviceInstanced = this.getServiceControl(service.name);
        if (serviceInstanced) {
            serviceInstanced.removeSubscribe();
            if (!serviceInstanced.hasSubscribers()) {
                const indexOf = this.serviceControls.indexOf(serviceInstanced);
                this.serviceControls.splice(indexOf, 1);
            }
        }
    }
}
exports.default = SingleService;
//# sourceMappingURL=SingleService.js.map