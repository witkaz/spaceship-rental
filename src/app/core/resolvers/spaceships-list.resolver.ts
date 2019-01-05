import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { SpaceshipService } from '../services/spaceship.service';
import { Observable } from 'rxjs';
import { Spaceship, SpaceshipsParams } from '../../shared/models/spaceships/spaceship.model';

@Injectable()
export class SpaceshipsListResolver implements Resolve<Spaceship[]> {

  constructor(private spaceshipService: SpaceshipService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Spaceship[]> {
    const queryParams = route.queryParams as SpaceshipsParams;
    console.log(queryParams);
    return this.spaceshipService.getSpaceshipsList(queryParams);
  }
}
