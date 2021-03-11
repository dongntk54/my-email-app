import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, limit: number, ...args: unknown[]): unknown {
    const defaultLength = 25;
    limit = limit ? limit : defaultLength;
    return value.substr(0, limit) + '....';
  }
}
