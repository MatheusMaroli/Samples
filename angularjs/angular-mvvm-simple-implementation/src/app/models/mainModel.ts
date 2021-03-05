export default class MainModel {
    id: number;
    name: string;

  
    constructor(id: number, name: string)
    {
        this.id = id;
        this.name = name;
    }
    reset()
    {
        this.id=0;
        this.name = '';
    }
}