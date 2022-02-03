import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankAccountPipe } from './shared/pipes/bank-account.pipe';
import { EnumPipe } from './shared/pipes/enum.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BankAccountPipe,
    EnumPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
