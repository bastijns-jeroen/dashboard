import {Injectable} from "angular2/core";
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {Train} from "./Train";
import {ConfigurationService} from "../configuration/configuration.service";

const BASE_URL = 'http://api.irail.be/connections/';
const POLLING_INTERVAL = 1000 * 30;

@Injectable()
export class TrainService {

    constructor(private http: Http, private configurationService:ConfigurationService) {}

    getTrains() : Observable<Array<Train>> {
        return Observable.interval(POLLING_INTERVAL)
            .startWith('run right away')
            .switchMap(() => this.pollTrains())
    }

    private pollTrains() : Observable{
        const trainConfiguration = this.configurationService.trainConfiguration;
        const TRAIN_URL = `${BASE_URL}?from=${trainConfiguration.from}&to=${trainConfiguration.to}&timeSel=depart&format=json`;

        return this.http.get(TRAIN_URL)
            .map((res:Response) => <Object[]> res.json().connection)
            .flatMap((list:Array<Object>) => Observable.from(list))
            .take(3)
            .map((info:Object) => new Train(info))
            .toArray()
            .catch(this.handleError);
    }

    private handleError (error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}