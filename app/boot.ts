import 'bootstrap/css/bootstrap.min.css!';
import 'weathericons/css/weather-icons.css!';
import 'metro-bootstrap/dist/css/metro-bootstrap.min.css!';
import 'FortAwesome/Font-Awesome/css/font-awesome.min.css!';

import 'angular2/bundles/angular2-polyfills';
import 'rxjs/Rx';

import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AppComponent} from './app.component';

bootstrap(AppComponent, [HTTP_PROVIDERS]);
