import { Pipe, PipeTransform } from '@angular/core';
import {Playlist} from "../playlist";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Playlist[], filterString: string = '', propertyName: string): any {
    return value.filter(e=> e[propertyName].includes(filterString));
  }

}
