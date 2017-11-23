import { Pipe, PipeTransform } from '@angular/core';
import {error} from 'selenium-webdriver';
import ElementNotSelectableError = error.ElementNotSelectableError;

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string = '', propertyName: string): any {
    return value.filter(elem => {
      return elem[propertyName].indexOf(filterString) >=0;
    });
  }

}
