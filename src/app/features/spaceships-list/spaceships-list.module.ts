import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SpaceshipsListComponent } from './spaceships-list.component';
import { SpaceshipItemComponent } from './components/spaceship-item/spaceship-item.component';
import { SharedModule } from '../../shared/shared.module';
import { SpaceshipsListRoutingModule } from './spaceships-list-routing.module';

const declarations = [
  SpaceshipsListComponent,
  SpaceshipItemComponent,
];
const imports = [
  SharedModule,
  SpaceshipsListRoutingModule,
  FormsModule
];

@NgModule({
  declarations,
  imports
})

export class SpaceshipsListModule {}
