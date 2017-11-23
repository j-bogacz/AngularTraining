import {Pipe, PipeTransform} from '@angular/core';
import {Playlist} from "../playlist";

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: Playlist[], filterString: string = '', propertyName: string): any {
    return value.filter(v => {
      console.log(v[propertyName], filterString, v[propertyName].includes(filterString));
      return v[propertyName].includes(filterString);
    });
  }

}
