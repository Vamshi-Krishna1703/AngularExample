export class Student {
    name : string;
    id : string;
    doj : Date;
    year : number;

    constructor()
    {
        this.name = '';
        this.id = '';
        this.doj = new Date();
        this.year = 0;
    }
}