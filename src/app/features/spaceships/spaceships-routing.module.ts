import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaceshipsComponent } from './spaceships.component';
import { SpaceshipsDetailComponent } from './spaceships-detail/spaceships-detail.component';

const spaceshipslistRoutes: Routes = [
  { path: 'spaceships-list', component: SpaceshipsComponent, children: [
    { path: ':id', component: SpaceshipsDetailComponent },
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(spaceshipslistRoutes)
  ],
  exports: [RouterModule]
})
export class SpaceshipsRoutingModule {}
