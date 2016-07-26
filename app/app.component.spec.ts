import { AppComponent } from './app.component';
import {ConfigurationService} from "./configuration/configuration.service";

describe('AppComponent', () =>{

    let appComponent: AppComponent;

    beforeEach(() => {
        appComponent = new AppComponent(new ConfigurationService());
    });

    it('has the correct welcome message', () => {
        expect(appComponent.isConfigured).toEqual(true);
    });
});