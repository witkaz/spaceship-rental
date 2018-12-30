import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpaceshipsSearchComponent } from './spaceships-search/spaceships-search.component';
import { SpaceshipsComponent } from './spaceships.component';
import { SpaceshipsListComponent } from './spaceships-list/spaceships-list.component';
import { SpaceshipItemComponent } from './spaceships-list/spaceship-item/spaceship-item.component';
import { SpaceshipsDetailComponent } from './spaceships-detail/spaceships-detail.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SpaceshipsRoutingModule } from './spaceships-routing.module';

@NgModule({
  declarations: [
    SpaceshipsSearchComponent,
    SpaceshipsComponent,
    SpaceshipsListComponent,
    SpaceshipItemComponent,
    SpaceshipsDetailComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    CommonModule,
    SpaceshipsRoutingModule
  ]
})

export class SpaceshipsModule {}
