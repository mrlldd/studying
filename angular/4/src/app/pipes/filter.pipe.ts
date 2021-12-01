import {Pipe, PipeTransform} from '@angular/core';
import {Post, SearchKey} from "../types";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(posts: Post[], searchString: string, key: SearchKey): Post[] {
    return searchString.trim()
      ? posts.filter(item => item[key].toLowerCase().includes(searchString.toLowerCase()))
      : posts;
  }
}
