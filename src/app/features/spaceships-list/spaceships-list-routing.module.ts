import { RouterModule, Routes } from '@angular/router';
import { SpaceshipsListResolver } from '../../core/resolvers/spaceships-list.resolver';
import { NgModule } from '@angular/core';
import { SpaceshipsListComponent } from './spaceships-list.component';


const spaceshipsListRoutes: Routes = [
  {
    path: '',
    component: SpaceshipsListComponent,
    resolve: {
      spaceships: SpaceshipsListResolver
    }
  },
  {
    path: ':id',
    loadChildren: './features/spaceships-detail/spaceships-detail.module#SpaceshipsDetailModule',
  }
];

@NgModule({
  imports: [RouterModule.forChild(spaceshipsListRoutes)],
  exports: [RouterModule]
})
export class SpaceshipsListRoutingModule {}
