import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceshipsSearchComponent } from './features/spaceships/spaceships-search/spaceships-search.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'spaceships-search',
    pathMatch: 'full'
  },
  {
    path: 'spaceships-search',
    component: SpaceshipsSearchComponent
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
