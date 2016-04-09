import {Component, Input} from "angular2/core";
import {Weather} from "./Weather";
import {CelciusPipe} from "./celcius.pipe.ts";

@Component({
    selector: 'weather',
    template: `
        <div class="thumbnail tile tile-large tile-orange">
            <br/>
            <div>
                <i class="wi weather-icon" [ngClass]="weather.icon"></i>
            </div>
            <br/><br/><br/>
            <div>
                <h2>
                    <span>{{ weather.temperatureMin | celcius }}</span>
                    <span>{{ weather.temperatureMax | celcius }}</span>
                </h2>
            </div>
            <br/>
            <div>
                <h2>
                    <span>{{ weather.date | date:dayFormat }}</span>
                    <span>{{ weather.date | date:hourFormat }}</span>
                </h2>
            </div>
        </div>
    `,
    pipes: [CelciusPipe],
    styles: [`
        .weather-icon {
          font-size: 120px;
        }
      `]
})
export class WeatherComponent {

    @Input() weather:Weather;

    get dayFormat() {
        return 'EEEE';
    }

    get hourFormat() {
        return 'H:m';
    }
}