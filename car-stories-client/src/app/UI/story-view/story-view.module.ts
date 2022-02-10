import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoryViewRoutingModule } from './story-view-routing.module';
import { StoryDashboardComponent } from './story-dashboard/story-dashboard.component';


@NgModule({
  declarations: [
    StoryDashboardComponent
  ],
  imports: [
    CommonModule,
    StoryViewRoutingModule
  ]
})
export class StoryViewModule { }
