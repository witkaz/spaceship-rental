import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Spaceship, SpaceshipsParams } from '../../shared/models/spaceships/spaceship.model';

@Injectable()
export class SpaceshipService {
    private readonly spaceshipsApi: string = 'http://localhost:3000';
    private readonly spaceshipsList: string = 'spaceships';

    constructor(private http: HttpClient) {}

    getSpaceshipsList(params: SpaceshipsParams): Observable<Spaceship[]> {
        return this.http.get<Spaceship[]>(`${this.spaceshipsApi}/${this.spaceshipsList}`, {params: {...params}});
    }

    getSpaceship(id: number): Observable<Spaceship> {
        return this.http.get<Spaceship>(`${this.spaceshipsApi}/${this.spaceshipsList}/${id}`);
    }
}

