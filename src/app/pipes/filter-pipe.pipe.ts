import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct } from '../shared/interface';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipe implements PipeTransform {
  transform(value: Iproduct[], search: string): Iproduct[] {
    return value.filter((pr) =>
      pr.title.toLowerCase().includes(search.toLowerCase())
    );
  }
}
