import {Component} from 'angular2/core';
import {WeatherListComponent} from "./weather/weather.list.component.ts";
import {TrainListComponent} from "./trains/train.list.component.ts";
import {ConfigurationComponent} from "./configuration/configuration.component";
import {ConfigurationService} from "./configuration/configuration.service";

@Component({
  selector: 'dashboard',
  template: `
    <configuration *ngIf="!isConfigured()"></configuration>
    <weather-list *ngIf="isConfigured()"></weather-list>
    <train-list *ngIf="isConfigured()"></train-list>
  `,
  directives: [WeatherListComponent, TrainListComponent, ConfigurationComponent],
  providers: [ConfigurationService]
})
export class AppComponent {
  
  constructor(private configurationService: ConfigurationService) {}

  isConfigured() : boolean {
    return this.configurationService.isConfigurationAvailable();
  }
}
