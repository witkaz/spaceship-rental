import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpaceshipsSearchRoutingModule } from './spaceships-search-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { SpaceshipsSearchComponent } from './spaceships-search.component';

const declarations = [
  SpaceshipsSearchComponent
];
const imports = [
  NgbModule,
  FormsModule,
  SharedModule,
  SpaceshipsSearchRoutingModule,
  ReactiveFormsModule
];

@NgModule({
  declarations,
  imports
})
export class SpaceshipsSearchModule {}
