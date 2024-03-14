import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;
  // }

  transform(items: any[], property: string, value: any): any[] {
    if (!items || !property || value === undefined) {
      return items;
    }

    return items.filter(item => item[property] === value);
  }

}
