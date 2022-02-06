import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankAccountPipe } from './shared/pipes/bank-account.pipe';
import { EnumPipe } from './shared/pipes/enum.pipe';
import { CarStoryViewModule } from './UI/car-story-view/car-story-view.module';
import { StoreViewModule } from './UI/store-view/store-view.module';
import { UserOptionsViewModule } from './UI/user-options-view/user-options-view.module';

@NgModule({
  declarations: [
    AppComponent,
    BankAccountPipe,
    EnumPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserOptionsViewModule,
    CarStoryViewModule,
    StoreViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
