import weathericons from './weathericons.json!';

export class Weather {
    
    public icon:string
    public date:Date;
    public temperatureMin:number;
    public temperatureMax:number;

    constructor(externalWeather:any) {
        this.icon = 'wi-' + weathericons[externalWeather.weather[0].id + ''];
        this.date = new Date(externalWeather.dt * 1000);
        this.temperatureMin = Math.round(externalWeather.main.temp_min);
        this.temperatureMax = Math.round(externalWeather.main.temp_max);
    }
}