import {Observable} from 'rxjs/Observable';
import {DateInfo} from "./DateInfo";
import {Injectable} from "@angular/core";

@Injectable()
export class DateInfoService {

    getDateInfo() {
        return Observable.timer(0, 5000)
            .map(() => new DateInfo(new Date()));
    }
}