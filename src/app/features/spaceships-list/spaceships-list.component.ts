import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Spaceship, SpaceshipsParams } from '../../shared/models/spaceships/spaceship.model';
import { SpaceshipFilters } from './spaceship-list.model';

@Component({
  templateUrl: './spaceships-list.component.html',
  styleUrls: ['./spaceships-list.component.scss']
})
export class SpaceshipsListComponent implements OnInit {
  spaceships: Spaceship[] = [];
  spaceshipsParams: SpaceshipsParams[] = [];

  constructor(private route: ActivatedRoute) { }

  dataFiltered: Spaceship[] = [];
  filters: SpaceshipFilters;

  private defaultFilters: SpaceshipFilters = {
    engine: '',
    color: '',
    wings: ''
  };

  ngOnInit(): void {
    this.spaceships = this.route.snapshot.data.spaceships;
    this.filters = {...this.defaultFilters};
    this.filterList();
  }

  filterList(): void {
    const tmp = [...this.spaceships];

    if (this.filters) {
      this.dataFiltered = tmp.filter(
        spaceshipEl => this.containsProperty(spaceshipEl.engine.toString(), this.filters.engine) &&
          this.containsProperty(spaceshipEl.color, this.filters.color) &&
          this.containsProperty(spaceshipEl.wings, this.filters.wings)
      );
    }
  }

  resetFilters(): void {
    this.filters = {...this.defaultFilters};
    this.filterList();
  }

  private containsProperty(property: string, filter: string): boolean {
   return property.toLowerCase()
     .indexOf(filter.toLowerCase()) > -1;
  }
}
