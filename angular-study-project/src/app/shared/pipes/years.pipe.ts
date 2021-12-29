import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'years'
})
export class YearsPipe implements PipeTransform {

  transform(value: string | number, ...args: unknown[]): string {
    let result = Number.parseInt(`${value}`);
    if (result > 1) {
      return result.toString().concat(' years')
    }
    return result.toString().concat(' year');
  }

}
