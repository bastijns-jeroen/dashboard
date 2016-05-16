import 'bootstrap/css/bootstrap.min.css!';
import 'weathericons/css/weather-icons.css!';
import 'metro-bootstrap/dist/css/metro-bootstrap.min.css!';
import 'FortAwesome/Font-Awesome/css/font-awesome.min.css!';

// import 'angular2/bundles/angular2-polyfills';
import 'zone';
import 'reflect-metadata';
import 'crypto';
import 'rxjs/Rx';

import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {AppComponent} from './app.component';

bootstrap(AppComponent, [HTTP_PROVIDERS]);
