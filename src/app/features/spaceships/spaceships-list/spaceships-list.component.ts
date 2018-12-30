import { SpaceshipService } from './../spaceship.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Spaceship } from './../spaceship.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spaceships-list',
  templateUrl: './spaceships-list.component.html',
  styleUrls: ['./spaceships-list.component.scss']
})
export class SpaceshipsListComponent implements OnInit {
  spaceships: Spaceship[];
  subscription: Subscription;

  constructor(private spaceshipService: SpaceshipService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.spaceships = this.spaceshipService.getSpaceships();
  }

  // onNewSpaceship() {
  //   this.router.navigate(['new'], {relativeTo: this.route});
  // }
}
