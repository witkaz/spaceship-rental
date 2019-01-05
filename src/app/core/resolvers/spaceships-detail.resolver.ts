import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { SpaceshipService } from '../services/spaceship.service';
import { Observable } from 'rxjs';
import { Spaceship } from '../../shared/models/spaceships/spaceship.model';

@Injectable()
export class SpaceshipsDetailResolver implements Resolve<Spaceship> {

  constructor(private spaceshipService: SpaceshipService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Spaceship> {
    const params = route.params;
    return this.spaceshipService.getSpaceship(+params.id);
  }
}
