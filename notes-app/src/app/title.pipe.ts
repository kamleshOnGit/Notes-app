import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value: any, body: any): any {
    const titlearr = value.split('.');
    const title = titlearr[0].length > 20 ? titlearr[0].substr(0, 19 ).concat('...') : titlearr[0] ;
    const bodytext =  () => { if ( typeof titlearr[1] === 'string') {
                        return   titlearr[1].length > 50 ? titlearr[1].substr(19, 40 ).concat('...') : titlearr[1];
                    } else {
                      return   titlearr[0].length > 50 ? titlearr[0].substr(19, 40 ).concat('...') : titlearr[0];
                    } };
    if (!body) {
      return title;
    } else {
      return bodytext();
    }

  }

}
