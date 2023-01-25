import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct } from '../shared/interface';

@Pipe({
  name: 'sorting',
})
export class SortingPipe implements PipeTransform {
  transform(value: Iproduct[], type = ''): Iproduct[] {
    if (type === '') {
      return value;
    }
    return value.filter((pr) => pr.type == type);
  }
}
