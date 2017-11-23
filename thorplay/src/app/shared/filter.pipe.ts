import {Pipe, PipeTransform} from '@angular/core';
import {isString} from "util";
import {isArray} from "rxjs/util/isArray";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterValue: string = '', propertyName: string = ''): any {
    if (!value) {
      console.error('Pusty obiekt!');
      return null;
    }

    if (!isArray(value)) {
      console.error('Obiekt nie jest tablicą');
      return null;
    }

    if (value.length === 0) {
      console.error('Pusta tablica!');
      return null;
    }

    if (propertyName === '') {
      console.error('Brak podanego propertyName!');
      return null;
    }

    if (filterValue === '') {
      return value;
    }

    if (!value[0][propertyName]) {
      console.error('Tablica nie zawiera pola [' + propertyName + ']');
      return null;
    }

    return value.filter(f => {
      return isString(f[propertyName]) && f[propertyName].indexOf(filterValue) > -1;
    });
  }
}
