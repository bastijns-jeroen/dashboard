import {Component, Input} from "@angular/core";
import {Train} from "./Train";

@Component({
    selector: 'train',
    template: `
        <div class="thumbnail tile tile-large tile-pomegranate">
            <br/>
            <div>
                <h3>
                    <span>{{ train.from }}</span>
                </h3>
                <h1><i class="fa fa-train fa-2x"></i></h1>
                 &nbsp;
                <h3>
                    <span>{{ train.to }}</span>
                </h3>
            </div>
            <br/><br/>
            <div>
                <h2>
                    <span>{{ train.departureDate | date:hourFormat }}</span>
                    &nbsp;
                    <span><i class="fa fa-clock-o"></i> {{ train.delay }}</span>
                </h2>
            </div>
            <br/>
            <div>
                <h2>
                    <span>Platform {{ train.platform }}</span>
                </h2>
            </div>
        </div>
    `
})
export class TrainComponent {

    @Input() train:Train;

    get hourFormat() {
        return 'H:m';
    }
}