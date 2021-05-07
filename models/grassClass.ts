export class grassClass {
    source: string;
    inSpot: boolean;

    constructor(source: string, inSpot: boolean){
        this.source = source;
        this.inSpot = inSpot;
    }

    getInSpot() : boolean{
        return this.inSpot;
    }
}