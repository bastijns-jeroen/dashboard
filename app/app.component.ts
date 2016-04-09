import {Component} from 'angular2/core';
import {WeatherListComponent} from "./weather/weather.list.component.ts";
import {TrainListComponent} from "./trains/train.list.component.ts";

@Component({
  selector: 'dashboard',
  template: `
    <weather-list></weather-list>
    <train-list></train-list>
  `,
  directives: [WeatherListComponent, TrainListComponent]
})
export class AppComponent {}
