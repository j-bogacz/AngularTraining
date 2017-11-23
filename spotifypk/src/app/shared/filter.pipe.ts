import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string = 'Hity', propertyName: string= 'name'): any {
    if(value) {
      return value.filter(elem => {
        return elem[propertyName].indexOf(filterString) >=0;
      });
     }
     return value;
  }
}
