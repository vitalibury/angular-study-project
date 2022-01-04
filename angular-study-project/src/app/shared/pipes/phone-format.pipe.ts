import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let result = value;
    return result.split('-').join('');
  }

}
