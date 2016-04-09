export class Train {

    public departureDate:Date;
    public platform:string
    public delay:number;
    public from:string;
    public to:string;
    
    constructor(externalTrain:any) {
        this.departureDate = new Date(externalTrain.departure.time * 1000);
        this.platform = externalTrain.departure.platform;
        this.delay = externalTrain.departure.delay / 60;
        this.from = externalTrain.departure.station;
        this.to = externalTrain.arrival.station;
    }
}