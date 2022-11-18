import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class searchingPipe implements PipeTransform {

  transform(value: any[], filterUsername: string): any {
    if(value.length === 0){
      return value
    } else {
      return value.filter((parse) => {
        return parse.username.toLowerCase().split(' ').join('').indexOf(filterUsername.toLowerCase()) >= 0
      })
    }
  }

}