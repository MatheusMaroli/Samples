export default class ServiceControl  {

    public name: string;
    public numberOfSubscribed: number;
    public service: any;

    constructor(service: any, name: string) {
        this.numberOfSubscribed = 0;
        this.service = service;
        this.name = name;
    }

    addSubscribe(): void
    {
        this.numberOfSubscribed = this.numberOfSubscribed + 1;
    }

    removeSubscribe(): void
    {
        this.numberOfSubscribed = this.numberOfSubscribed - 1;

    }

    hasSubscribers(): boolean {
        return this.numberOfSubscribed > 0;
    }
}