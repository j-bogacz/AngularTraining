import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propertyName: string): any {
    return value.filter(v => {
      return v[propertyName].indexOf(filterString) >= 0;
    });
  }
}
