import { SpaceshipService } from '../../core/services/spaceship.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Spaceship, SpaceshipsParams } from '../../shared/models/spaceships/spaceship.model';

// interface SpaceshipInterface {
//   engine: string;
//   color: string;
//   wings: string;
// }

interface SpaceshipInterfaceFilters {
  engine: string;
  color: string;
  wings: string;
}


@Component({
  templateUrl: './spaceships-list.component.html',
  styleUrls: ['./spaceships-list.component.scss']
})
export class SpaceshipsListComponent implements OnInit {
  spaceships: Spaceship[] = [];
  spaceshipsParams: SpaceshipsParams[] = [];

  constructor(private spaceshipService: SpaceshipService,
              private router: Router,
              private route: ActivatedRoute) { }

  // data: SpaceshipInterface[] = [
  //   {
  //     engine: 'Fast',
  //     color: 'Blue',
  //     wings: 'Eagle'
  //   },
  //   {
  //     engine: 'Fast',
  //     color: 'Red',
  //     wings: 'Eagle'
  //   },
  //   {
  //     engine: 'Fast',
  //     color: 'Black',
  //     wings: 'ddd'
  //   },
  // ];

  dataFiltered: SpaceshipsParams[] = [];
  filters: SpaceshipInterfaceFilters;

  private defaultFilters: SpaceshipInterfaceFilters = {
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
        obj => this.containsProperty(obj.engine.toString(), this.filters.engine) &&
          this.containsProperty(obj.color, this.filters.color) &&
          this.containsProperty(obj.wings, this.filters.wings)
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
