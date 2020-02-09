import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showtime'
})
export class ShowtimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const todayDate = new Date();
    let showtime;
    let abbr;
    const weekday = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday'];

    if (todayDate.getHours() < 12) {
      abbr = 'AM';
    } else {
      abbr = 'PM';
    }
    if ( todayDate.getDate() === value.date) {
        showtime = `${value.time} ${abbr}` ;
   } else if ( value === `${new Date().getHours()}:${new Date().getMinutes()} `  ) {
        showtime = `${new Date().getHours()}:${new Date().getMinutes()} ${abbr} `;
   } else {
        showtime =  weekday[todayDate.getDay()]; }

    return showtime;
  }

}
