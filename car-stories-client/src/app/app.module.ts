import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankAccountPipe } from './shared/pipes/bank-account.pipe';
import { EnumPipe } from './shared/pipes/enum.pipe';
import { UserOptionsViewModule } from './UI/user-options-view/user-options-view.module';
import { StoryViewModule } from './UI/story-view/story-view.module';
import { ShopViewModule } from './UI/shop-view/shop-view.module';




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
    StoryViewModule,
    ShopViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
