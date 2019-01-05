import { Component, Input } from '@angular/core';
import { Spaceship } from '../../../../shared/models/spaceships/spaceship.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spaceship-item',
  templateUrl: './spaceship-item.component.html',
  styleUrls: ['./spaceship-item.component.scss']
})
export class SpaceshipItemComponent {
  @Input() spaceship: Spaceship;
  @Input() index: number;

  constructor(private router: Router) {}

  spaceshipDetails(id: number): void {
    this.router.navigate(['spaceships-list', id]);
  }
}
