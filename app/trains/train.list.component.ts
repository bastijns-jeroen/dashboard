import {Component} from "@angular/core";
import {TrainService} from "./train.service";
import {Train} from "./Train";
import {Observable} from 'rxjs/Observable';
import {TrainComponent} from "./train.component";

@Component({
    selector: 'train-list',
    template: `
        <div class="row">
            <div *ngFor="let train of trains | async" class="col-sm-6 col-md-2">
                <train [train]="train"></train>
            </div>
        </div>
    `,
    providers: [TrainService],
    directives: [TrainComponent]
})
export class TrainListComponent {
    
    private trains : Observable<Array<Train>>;
    
    constructor(private _trainService:TrainService) {
        this.trains = _trainService.getTrains();
    }    
}