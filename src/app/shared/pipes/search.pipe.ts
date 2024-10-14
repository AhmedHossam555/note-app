import { Pipe, PipeTransform } from '@angular/core';
import { Notes } from '../interfaces/notes';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(notes: Notes[], title: string): Notes[] {
    return notes.filter((ele)=>{
      return ele.title.toLocaleLowerCase().includes(title.toLocaleLowerCase());
    });
  }

}
