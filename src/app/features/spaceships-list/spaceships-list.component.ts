import { SpaceshipService } from '../../core/services/spaceship.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Spaceship } from '../../shared/models/spaceships/spaceship.model';

@Component({
  templateUrl: './spaceships-list.component.html',
  styleUrls: ['./spaceships-list.component.scss']
})
export class SpaceshipsListComponent implements OnInit {
  spaceships: Spaceship[] = [];

  constructor(private spaceshipService: SpaceshipService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.spaceships = this.route.snapshot.data.spaceships;
  }

  // onNewSpaceship() {
  //   this.router.navigate(['new'], {relativeTo: this.route});
  // }
}
