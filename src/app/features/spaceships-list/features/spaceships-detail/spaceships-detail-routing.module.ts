import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SpaceshipsDetailComponent } from './spaceships-detail.component';
import { SpaceshipsDetailResolver } from '../../../../core/resolvers/spaceships-detail.resolver';


const spaceshipsDetailRoutes: Routes = [
  {
    path: '',
    component: SpaceshipsDetailComponent,
    resolve: {
      spaceship: SpaceshipsDetailResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(spaceshipsDetailRoutes)]
})
export class SpaceshipsDetailRoutingModule {}
