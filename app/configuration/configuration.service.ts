import {TrainConfiguration} from "../trains/TrainConfiguration";
import {WeatherConfiguration} from "../weather/WeatherConfiguration";

const WEATHER_CONFIGURATION = 'weatherConfiguration';
const TRAIN_CONFIGURATION = 'trainConfiguration';

export class ConfigurationService {


    isLocalStorageAvailable() : boolean {
        const localStorageTest = 'test';
        
        try {
            localStorage.setItem(localStorageTest, localStorageTest);
            localStorage.removeItem(localStorageTest);
            return true;
        } catch(e) {
            return false;
        }
    }

    isConfigurationAvailable() : boolean {
        return !!(this.isLocalStorageAvailable() && localStorage.getItem(WEATHER_CONFIGURATION) && localStorage.getItem(TRAIN_CONFIGURATION));
        
    }

    setConfiguration(weatherConfiguration:WeatherConfiguration, trainConfiguration:TrainConfiguration) : void {
        localStorage.setItem(WEATHER_CONFIGURATION, JSON.stringify(weatherConfiguration));
        localStorage.setItem(TRAIN_CONFIGURATION, JSON.stringify(trainConfiguration));
    }

    get weatherConfiguration() : WeatherConfiguration {
        let weatherConfiguration = localStorage.getItem(WEATHER_CONFIGURATION);
        if(weatherConfiguration) {
            return JSON.parse(weatherConfiguration);
        }
        throw new Error('weather configuration not available');
    }

    get trainConfiguration() : TrainConfiguration {
        let trainConfiguration = localStorage.getItem(TRAIN_CONFIGURATION);
        if(trainConfiguration) {
            return JSON.parse(trainConfiguration);
        }
        throw new Error('train configuration not available');
    }
}