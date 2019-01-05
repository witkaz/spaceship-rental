import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Spaceship } from '../../../../shared/models/spaceships/spaceship.model';

@Component({
  templateUrl: './spaceships-detail.component.html',
  styleUrls: ['./spaceships-detail.component.scss']
})
export class SpaceshipsDetailComponent implements OnInit {
  spaceship: Spaceship;
  showBtn = false;
  btnName = 'Summary & order my spaceship';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.spaceship = this.route.snapshot.data.spaceship;
  }

  showSummary() {
    this.showBtn = !this.showBtn;
    if (this.showBtn) {
      this.btnName = 'Hide summary';
    } else {
      this.btnName = 'Summary & order my spaceship';
    }
  }
}
