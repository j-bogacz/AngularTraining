import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string = 'nic', propertyName: string): any {

    console.log(value + '    filterstr: ' + filterString + ' propertyName: ' + propertyName)
    return value.filter( elem => {
      return elem[propertyName].indexOf(filterString) >= 0;
    });
    // return value.propertyName.includes(filterString);

  }

}
