import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/story', pathMatch: 'full' },
  {
    path: '/story',
    loadChildren: () =>
      import('./../app/UI/story-view/story-view.module').then(
        (m) => m.StoryViewModule
      ),
  },
  {
    path: '/user',
    loadChildren: () =>
      import('./../app/UI/user-options-view/user-options-view.module').then(
        (m) => m.UserOptionsViewModule
      ),
  },
  {
    path: '/store',
    loadChildren: () =>
      import('./../app/UI/shop-view/shop-view.module').then(
        (m) => m.ShopViewModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
