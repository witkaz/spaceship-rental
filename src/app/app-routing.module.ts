import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'spaceships-search',
    pathMatch: 'full'
  },
  {
    path: 'spaceships-search',
    loadChildren: './features/spaceships-search/spaceships-search.module#SpaceshipsSearchModule'
  },
  {
    path: 'spaceships-list',
    loadChildren: './features/spaceships-list/spaceships-list.module#SpaceshipsListModule'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
