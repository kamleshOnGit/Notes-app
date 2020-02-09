import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'search'})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchparam?: any): any {

    value.filter(val => {
      if (val.body.indexOf(searchparam)) {
        return val;
      } else {
        console.log(searchparam, value);
        return value;
      }
    });


  }

}
