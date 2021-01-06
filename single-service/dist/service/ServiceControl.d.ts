export default class ServiceControl {
    name: string;
    numberOfSubscribed: number;
    service: any;
    constructor(service: any, name: string);
    addSubscribe(): void;
    removeSubscribe(): void;
    hasSubscribers(): boolean;
}
