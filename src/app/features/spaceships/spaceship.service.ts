import { Spaceship } from './spaceship.model';
import { Injectable } from '@angular/core';

@Injectable()

export class SpaceshipService {

    private spaceships: Spaceship[] = [
        new Spaceship('Earth', 'Venus', 'Joel','Red', 'Eagle', 'Medium', 'Fast', 'The best spaceship', 'Really comfortable and safety lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', '../assets/img/spaceships/spaceship-ethan.png'),
        new Spaceship('Earth', 'Jupiter', 'Ethan', 'Blue', 'Eagle', 'Medium', 'Slow (economical)', 'The best spaceship', 'Really comfortable and safety lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s comfortable and safety', '../assets/img/spaceships/spaceship-joel.png'),
        new Spaceship('Jupiter', 'Mars', 'Jim', 'Red', 'Eagle', 'Small', 'Superfast', 'The best spaceship', 'Really comfortable and safety lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s comfortable and safety', '../assets/img/spaceships/spaceship-jim.png'),
        new Spaceship('Mars', 'Pluto', 'Carrey', 'Red', 'Sparrow', 'Medium', 'Fast', 'The best spaceship', 'Really comfortable and safety lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s comfortable and safety', '../assets/img/spaceships/spaceship-carrey.png'),
        new Spaceship('Neptune', 'Saturn', 'Carrey', 'Black', 'Pterodactyl', 'Big', 'Fast', 'The best spaceship', 'Really comfortable and safety lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s comfortable and safety', '../assets/img/spaceships/spaceship-carrey.png'),
        new Spaceship('Earth', 'Mercury', 'Joel','Black', 'Sparrow', 'Medium', 'Fast', 'The best spaceship', 'Really comfortable and safety lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', '../assets/img/spaceships/spaceship-ethan.png'),
        new Spaceship('Uranus', 'Earth', 'Ethan', 'Red', 'Pterodactyl', 'Small', 'Slow (economical)', 'The best spaceship', 'Really comfortable and safety lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s comfortable and safety', '../assets/img/spaceships/spaceship-joel.png'),
        new Spaceship('Mars', 'Pluto', 'Carrey', 'Red', 'Sparrow', 'Medium', 'Fast', 'The best spaceship', 'Really comfortable and safety lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s comfortable and safety', '../assets/img/spaceships/spaceship-carrey.png')
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

