import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserOptionsViewRoutingModule } from './user-options-view-routing.module';
import { UserFormComponent } from './user-container/user-form/user-form.component';
import { UserContainerComponent } from './user-container/user-container.component';


@NgModule({
  declarations: [
    UserFormComponent,
    UserContainerComponent
  ],
  imports: [
    CommonModule,
    UserOptionsViewRoutingModule
  ]
})
export class UserOptionsViewModule { }
