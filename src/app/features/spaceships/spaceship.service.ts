import { Spaceship } from './spaceship.model';
import { Injectable } from '@angular/core';

@Injectable()

export class SpaceshipService {

    private spaceships: Spaceship[] = [
        new Spaceship('Earth', 'Venus', 'Joel','Red', 'Eagle', 'Medium', 'Fast', 'The best spaceship', 'Really comfortable and safety lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', '../assets/img/spaceships/spaceship-ethan.png', 40),
        new Spaceship('Earth', 'Jupiter', 'Ethan', 'Blue', 'Eagle', 'Medium', 'Slow', 'The best spaceship', 'Really comfortable and safety lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s comfortable and safety', '../assets/img/spaceships/spaceship-joel.png', 30),
        new Spaceship('Jupiter', 'Mars', 'Jim', 'Red', 'Eagle', 'Small', 'Superfast', 'The best spaceship', 'Really comfortable and safety lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s comfortable and safety', '../assets/img/spaceships/spaceship-jim.png', 25),
        new Spaceship('Mars', 'Pluto', 'Carrey', 'Red', 'Sparrow', 'Medium', 'Fast', 'The best spaceship', 'Really comfortable and safety lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s comfortable and safety', '../assets/img/spaceships/spaceship-carrey.png', 20),
        new Spaceship('Neptune', 'Saturn', 'Carrey', 'Black', 'Pterodactyl', 'Big', 'Fast', 'The best spaceship', 'Really comfortable and safety lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s comfortable and safety', '../assets/img/spaceships/spaceship-carrey.png', 20),
        new Spaceship('Earth', 'Mercury', 'Joel','Black', 'Sparrow', 'Medium', 'Fast', 'The best spaceship', 'Really comfortable and safety lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s', '../assets/img/spaceships/spaceship-ethan.png', 40),
        new Spaceship('Uranus', 'Earth', 'Ethan', 'Red', 'Pterodactyl', 'Small', 'Slow', 'The best spaceship', 'Really comfortable and safety lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s comfortable and safety', '../assets/img/spaceships/spaceship-joel.png', 30),
        new Spaceship('Mars', 'Pluto', 'Carrey', 'Red', 'Sparrow', 'Medium', 'Fast', 'The best spaceship', 'Really comfortable and safety lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s comfortable and safety', '../assets/img/spaceships/spaceship-carrey.png', 20)
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

