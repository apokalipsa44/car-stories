import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enum',
})
export class EnumPipe implements PipeTransform {
  transform(value: string | undefined, ...enumList: unknown[]): unknown {
    if (!value || !enumList) return null;
    const enums: any = enumList[0];
    return enums[value];
  }
}
