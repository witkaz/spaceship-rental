import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Spaceship } from '../../../../shared/models/spaceships/spaceship.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './spaceships-detail.component.html',
  styleUrls: ['./spaceships-detail.component.scss']
})
export class SpaceshipsDetailComponent implements OnInit {
  spaceship: Spaceship;
  showBtn = false;
  btnName = 'Summary & order my spaceship';
  summaryOrderForm: FormGroup;
  insurancePrice = 50;
  touristCardPrice = 20;
  nutritionalPackagePrice = 30;

  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initSummaryForm();
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

  private initSummaryForm() {
    this.summaryOrderForm = this.formBuilder.group({
      insurance: [''],
      touristCard: [''],
      nutritionalPackage: ['']
    });
  }
}
