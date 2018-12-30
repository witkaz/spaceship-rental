import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Spaceship } from './../spaceship.model';
import { SpaceshipService } from './../spaceship.service';

@Component({
  selector: 'app-spaceships-detail',
  templateUrl: './spaceships-detail.component.html',
  styleUrls: ['./spaceships-detail.component.scss']
})
export class SpaceshipsDetailComponent implements OnInit {
  spaceship: Spaceship;
  id: number;

  constructor(private spaceshipService: SpaceshipService,
              private route: ActivatedRoute,
              ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.spaceship = this.spaceshipService.getSpaceship(this.id);
        }
      );
  }
}