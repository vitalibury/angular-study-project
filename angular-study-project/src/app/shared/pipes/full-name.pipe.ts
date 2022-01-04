import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    const params = args;
    params.unshift(value);
    return params.join(' ');
  }

}
