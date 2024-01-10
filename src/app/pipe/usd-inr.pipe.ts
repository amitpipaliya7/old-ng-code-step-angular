import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdInr'
})
export class UsdInrPipe implements PipeTransform {

  transform(value: any, ...args: number[]): unknown {
    let [x]=args;
    console.log(args);
    
    return value*x;
  }

}
