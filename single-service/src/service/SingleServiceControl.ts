import {  ServiceControl } from "./";

interface IConstructor<T> {
    new(...args: any[]): T;
}

class SingleServiceControl {

    private static _singleServiceControl: SingleServiceControl;
    private serviceInstances: Array<any>;
    constructor() {
        this.serviceInstances = new Array<any>();
    }
    
    private getServiceControl(name: string): ServiceControl {
        const serviceControl = this.serviceInstances.filter(f => f.name === name);
        return serviceControl ? serviceControl[0] : null;
    }

    register<TService>(service: IConstructor<TService>, ...args: any[]): TService {
        const serviceInstanced = this.getServiceControl(service.name);       
        if (serviceInstanced) {
            serviceInstanced.addSubscribe();
            return serviceInstanced.service;
        }
        const newInstance = new service(args);
        const serviceControl = new ServiceControl(newInstance, service.name);
        serviceControl.addSubscribe();
        this.serviceInstances.push(serviceControl);
        return serviceControl.service;
    }

    unregister<TService>(service: IConstructor<TService>) {
        const serviceInstanced = this.getServiceControl(service.name);
        if (serviceInstanced) {
            serviceInstanced.removeSubscribe();
            if (!serviceInstanced.hasSubscribers()) {
                const indexOf = this.serviceInstances.indexOf(serviceInstanced);
                this.serviceInstances.splice(indexOf, 1);
            }    
        }
    }

    static  instance(): SingleServiceControl {
        if (!this._singleServiceControl)
            this._singleServiceControl = new SingleServiceControl();
        return this._singleServiceControl;
    }
}

export default SingleServiceControl.instance();