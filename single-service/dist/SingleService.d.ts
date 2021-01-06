interface IConstructor<T> {
    new (...args: any[]): T;
}
export default class SingleService {
    private serviceControls;
    constructor();
    private getServiceControl;
    register<TService>(service: IConstructor<TService>, ...args: any[]): TService;
    unregister<TService>(service: IConstructor<TService>): void;
}
export {};
