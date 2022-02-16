import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BankAccountPipe } from './pipes/bank-account.pipe';
import { EnumPipe } from './pipes/enum.pipe';

@NgModule({
  declarations: [BankAccountPipe, EnumPipe],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SharedModule {}
