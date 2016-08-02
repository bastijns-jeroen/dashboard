import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Weather} from "./Weather";
import {ConfigurationService} from "../configuration/configuration.service";

const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast';
const POLLING_INTERVAL = 1000 * 60 * 15;

@Injectable()
export class WeatherService {
    
    constructor (private http: Http, private configurationService:ConfigurationService) {}

    getWeather() : Observable<Array<Weather>> {
        return Observable.interval(POLLING_INTERVAL)
            .startWith('run right away')
            .switchMap(() => this.pollWeather())
            .retryWhen(function(errors) {
                //If errors, delay with 200ms and try again
                return errors.delay(200);
            });
    }

    private pollWeather() : Observable{
        const weatherConfiguration = this.configurationService.weatherConfiguration;
        const WEATHER_URL = `${BASE_URL}?q=${weatherConfiguration.city}&units=metric&appid=${weatherConfiguration.apiToken}`;

        return this.http.get(WEATHER_URL)
            .map((res:Response) => <Object[]> res.json().list)
            .flatMap((list:Array<Object>) => Observable.from(list))
            .take(4)
            .map((info:Object) => new Weather(info))
            .toArray()
            .catch(this.handleError);
    }

    private handleError (error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error.toJSON());
        return Observable.throw(error.toJSON() || 'Server error');
    }
}