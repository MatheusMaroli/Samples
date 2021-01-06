interface IConstructor<T> {
    new (...args: any[]): T;
}
declare class SingleServiceControl {
    private static _singleServiceControl;
    private serviceInstances;
    constructor();
    private getServiceControl;
    register<TService>(service: IConstructor<TService>, ...args: any[]): TService;
    unregister<TService>(service: IConstructor<TService>): void;
    static instance(): SingleServiceControl;
}
declare const _default: SingleServiceControl;
export default _default;
