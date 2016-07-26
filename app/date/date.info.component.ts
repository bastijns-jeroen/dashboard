import {Component, OnInit} from "@angular/core";
import {DateInfoService} from "./date.info.service";
import {DateInfo} from "./DateInfo";

@Component({
    selector: 'date-info',
    template: `
        <div class="col-sm-6 col-md-2">
            <div class="thumbnail tile tile-large tile-blue">
                <br/><br/><br/>
                <div>
                    <h2>{{ dateInfo.date | date:'dd/MM/yyyy' }}</h2>
                    <br/>
                    <h1><strong>{{ dateInfo.date | date:'H:m' }}</strong></h1>
                    <br/><br/><br/>
                    <h2>Week number {{ dateInfo.weekNumber }}</h2>
                </div>
            </div>
        </div>
    `,
    providers: [DateInfoService]
})
export class DateInfoComponent implements OnInit {

    private dateInfo:DateInfo;

    constructor(private dateInfoService:DateInfoService) {
        this.dateInfo = new DateInfo(new Date());
    }

    ngOnInit():any {
        this.dateInfoService.getDateInfo()
            .subscribe(info => this.dateInfo = info);
    }
}