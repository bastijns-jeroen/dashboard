import {Component} from "@angular/core";
import {WeatherService} from "./weather.service";
import {Weather} from "./Weather";
import {Observable} from 'rxjs/Observable';
import {WeatherComponent} from "./weather.component";

@Component({
    selector: 'weather-list',
    template: `
        <div *ngFor="let weather of weatherInfo | async" class="col-sm-6 col-md-2">
            <weather [weather]="weather"></weather>
        </div>
    `,
    providers: [WeatherService],
    directives: [WeatherComponent],
})
export class WeatherListComponent {

    private weatherInfo : Observable<Array<Weather>>

    constructor(private _weatherService:WeatherService) {
        this.weatherInfo = _weatherService.getWeather();
    }
}