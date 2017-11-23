import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string = '', propertyName: string): any {
    return value.filter( data => data[propertyName].indexOf(filterString) >= 0 );
  }

}
