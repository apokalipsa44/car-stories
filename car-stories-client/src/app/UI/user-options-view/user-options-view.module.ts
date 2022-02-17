import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserOptionsViewRoutingModule } from './user-options-view-routing.module';
import { UserFormComponent } from './user-container/user-form/user-form.component';
import { UserContainerComponent } from './user-container/user-container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrimeNgModule } from 'src/app/shared/primeNg.module';

@NgModule({
  declarations: [UserFormComponent, UserContainerComponent],
  imports: [CommonModule, UserOptionsViewRoutingModule, SharedModule, PrimeNgModule],
})
export class UserOptionsViewModule {}
