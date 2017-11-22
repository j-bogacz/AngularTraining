import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterAlbums'
})
export class FilterAlbumsPipe implements PipeTransform {

  transform(items: any[], args: string): any {
    if (!args) {
      return items;
    } else {
      items.filter(t => {
        return t.albums.name.contains(args[0]);
      });
    }
  }

}
