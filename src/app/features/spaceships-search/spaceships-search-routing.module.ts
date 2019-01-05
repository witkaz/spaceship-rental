import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpaceshipsSearchComponent } from './spaceships-search.component';

const spaceshipsSearchRoutes: Routes = [
  {
    path: '',
    component: SpaceshipsSearchComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(spaceshipsSearchRoutes)
  ]
})
export class SpaceshipsSearchRoutingModule {}
