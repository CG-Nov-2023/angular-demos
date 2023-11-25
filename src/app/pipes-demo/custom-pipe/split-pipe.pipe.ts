import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitPipe'
})
export class SplitPipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.substring(0,3);
  }

}
