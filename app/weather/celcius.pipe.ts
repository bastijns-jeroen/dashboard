import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'celcius'})
export class CelciusPipe implements PipeTransform {
    
    transform(value:number) : string {
        return value + '℃';
    }
}