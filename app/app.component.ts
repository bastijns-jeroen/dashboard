import {Component} from '@angular/core';
import {WeatherListComponent} from "./weather/weather.list.component.ts";
import {TrainListComponent} from "./trains/train.list.component.ts";
import {ConfigurationComponent} from "./configuration/configuration.component";
import {ConfigurationService} from "./configuration/configuration.service";
import {DateInfoComponent} from "./date/date.info.component";

@Component({
  selector: 'dashboard',
  template: `
    <configuration *ngIf="!isConfigured()"></configuration>
    <div *ngIf="isConfigured()">
      <div class="row">
          <weather-list></weather-list>
          <date-info></date-info>
      </div>
      <train-list></train-list>
    </div>
  `,
  directives: [WeatherListComponent, TrainListComponent, ConfigurationComponent, DateInfoComponent],
  providers: [ConfigurationService]
})
export class AppComponent {
  
  constructor(private configurationService: ConfigurationService) {}

  isConfigured() : boolean {
    return this.configurationService.isConfigurationAvailable();
  }
}
