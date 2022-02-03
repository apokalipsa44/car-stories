import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bankAccount',
})
export class BankAccountPipe implements PipeTransform {
  transform(value: string | undefined, ...args: unknown[]): unknown {
    if (value == null) return null;
    value = value.replace(/ /g, '');
    if (value.length <= 3) return value;
    const controlNo: string = value.substring(0, 2);
    value = value.substring(2);
    const bankAccountNumber = value.match(/.{1,4}/g);
    return controlNo + '  ' + bankAccountNumber?.join('  ');
  }
}
