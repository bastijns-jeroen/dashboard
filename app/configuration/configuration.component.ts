import {Component} from "@angular/core";
import {WeatherConfiguration} from "../weather/WeatherConfiguration";
import {TrainConfiguration} from "../trains/TrainConfiguration";
import {ConfigurationService} from "./configuration.service";

@Component({
    selector: 'configuration',
    template: `
        <div *ngIf="isConfigurationPossible()" class="container">
            <h1>Configure the dashboard</h1>
            <form (ngSubmit)="saveConfiguration()" #configurationForm="ngForm"> 
                <fieldset>
                    <legend>Weather configuration</legend>
                    <div class="form-group" [ngClass]="{ 'has-error': !apiToken.valid && apiToken.touched}">
                        <label for="apiToken">API Token http://openweathermap.org/</label>
                        <input name="apiToken" type="text" class="form-control" [(ngModel)]="weatherConfiguration.apiToken" ngControl="apiToken" #apiToken="ngForm" required>
                    </div>
                    <div class="form-group" [ngClass]="{ 'has-error': !city.valid && city.touched}">
                        <label for="city">City</label>
                        <input name="city" type="text" class="form-control" [(ngModel)]="weatherConfiguration.city" ngControl="city" #city="ngForm" required>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Train configuration</legend>
                    <div class="form-group" [ngClass]="{ 'has-error': !from.valid && from.touched}">
                        <label for="from">From station</label>
                        <input name="from" type="text" class="form-control" [(ngModel)]="trainConfiguration.from" ngControl="from" #from="ngForm" required>
                    </div>
                    <div class="form-group" [ngClass]="{ 'has-error': !to.valid && to.touched}">
                        <label for="to">To station</label>
                        <input name="to" type="text" class="form-control" [(ngModel)]="trainConfiguration.to" ngControl="to" #to="ngForm" required>
                    </div>
                </fieldset>
                <button type="submit" class="btn btn-default" [disabled]="!configurationForm.form.valid">Save</button>
            </form>
        </div>
        <div *ngIf="!isConfigurationPossible()" class="container">
            <h1>Configuration not possible! Local storage is not supported by your browser, try to update to a newer version.</h1>
        </div>
    `
})
export class ConfigurationComponent {

    private weatherConfiguration:WeatherConfiguration;
    private trainConfiguration:TrainConfiguration;

    constructor(private configurationService:ConfigurationService) {
        this.weatherConfiguration = new WeatherConfiguration();
        this.trainConfiguration = new TrainConfiguration();
    }

    saveConfiguration() : void {
        this.configurationService.setConfiguration(this.weatherConfiguration, this.trainConfiguration);
    }

    isConfigurationPossible() : boolean {
        return this.configurationService.isLocalStorageAvailable();
    }
}