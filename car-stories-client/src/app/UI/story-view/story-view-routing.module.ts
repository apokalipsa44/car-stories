import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryDashboardComponent } from './story-dashboard/story-dashboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', pathMatch: 'full', component: StoryDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoryViewRoutingModule {}
