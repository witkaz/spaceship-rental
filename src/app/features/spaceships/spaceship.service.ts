import { Spaceship } from './spaceship.model';
import { Injectable } from '@angular/core';

@Injectable()

export class SpaceshipService {

    private spaceships: Spaceship[] = [
        new Spaceship('Example 1','Red', 'Eagle', 'Medium', 'Fast', 'The best spaceship', 'Really comfortable', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxkNHUlNq25MaTShMEpV0D7nJ7o52OhltE16cqoq29H73Bcnas'),
        new Spaceship('Example 2', 'Red', 'Eagle', 'Medium', 'Fast', 'The best spaceship', 'Really comfortable', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxkNHUlNq25MaTShMEpV0D7nJ7o52OhltE16cqoq29H73Bcnas'),
        new Spaceship('Example 3', 'Red', 'Eagle', 'Medium', 'Fast', 'The best spaceship', 'Really comfortable', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxkNHUlNq25MaTShMEpV0D7nJ7o52OhltE16cqoq29H73Bcnas'),
        new Spaceship('Example 3', 'Red', 'Eagle', 'Medium', 'Fast', 'The best spaceship', 'Really comfortable', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxkNHUlNq25MaTShMEpV0D7nJ7o52OhltE16cqoq29H73Bcnas'),
    ];

    constructor() {}

    setSpaceships(spaceships: Spaceship[]) {
      this.spaceships = spaceships;
    }

    getSpaceships() {
        return this.spaceships.slice();
    }

    getSpaceship(index: number) {
      return this.spaceships[index];
    }
}

