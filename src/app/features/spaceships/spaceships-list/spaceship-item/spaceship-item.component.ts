import { Component, Input } from '@angular/core';
import { Spaceship } from '../../spaceship.model';

@Component({
  selector: 'app-spaceship-item',
  templateUrl: './spaceship-item.component.html',
  styleUrls: ['./spaceship-item.component.scss']
})
export class SpaceshipItemComponent {
  @Input() spaceship: Spaceship;
  @Input() index: number;
}
