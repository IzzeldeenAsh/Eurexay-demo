// truncate.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateWords'
})
export class TruncateWordsPipe implements PipeTransform {

  transform(value: string, limit = 60): string {
    if (!value) {
      return '';
    }

    const words = value.split(/\s+/);

    if (words.length <= limit) {
      return value;
    }

    return words.slice(0, limit).join(' ') + '...view more';
  }

}
