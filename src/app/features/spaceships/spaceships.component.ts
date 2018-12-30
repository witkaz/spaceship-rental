import { SpaceshipService } from './spaceship.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spaceships',
  templateUrl: './spaceships.component.html',
  styleUrls: ['./spaceships.component.scss'],
  providers: [SpaceshipService]
})
export class SpaceshipsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
