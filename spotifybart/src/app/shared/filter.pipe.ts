import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string = '', propertyName:string):any {

    console.log(value);
    return value.filter( x =>  x[propertyName].indexOf(filterString) >= 0) ;
  }

}
