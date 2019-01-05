import { NgModule } from '@angular/core';
import { SpaceshipsDetailComponent } from './spaceships-detail.component';
import { SharedModule } from '../../../../shared/shared.module';
import { SpaceshipsDetailRoutingModule } from './spaceships-detail-routing.module';

const declarations = [
  SpaceshipsDetailComponent
];
const imports = [
  SharedModule,
  SpaceshipsDetailRoutingModule
];

@NgModule({
  declarations,
  imports
})

export class SpaceshipsDetailModule {}
