import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SpaceshipsParams } from '../../shared/models/spaceships/spaceship.model';
import * as moment from 'moment';

@Component({
  templateUrl: './spaceships-search.component.html',
  styleUrls: ['./spaceships-search.component.scss']
})
export class SpaceshipsSearchComponent implements OnInit {
  hoveredDate: NgbDate;
  fromDate: NgbDate;
  toDate: NgbDate;
  spaceshipForm: FormGroup;
  inputErrorMessage = 'Please provide planet name';


  constructor(calendar: NgbCalendar,
              private formBuilder: FormBuilder,
              private router: Router) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 5);
  }

  ngOnInit(): void {
    this.initForm();
  }

  get pickupLocation(): FormControl {
    return this.spaceshipForm.get('pickupLocation') as FormControl;
  }

  get dropoffLocation(): FormControl {
    return this.spaceshipForm.get('dropoffLocation') as FormControl;
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }

  filterSpaceship() {
    if (this.spaceshipForm.valid) {
      const queryParams = this.buildParams(this.spaceshipForm.getRawValue());
      this.router.navigate(['spaceships-list'], {queryParams});
    }
  }

  private buildParams(formValue: SpaceshipsParams): SpaceshipsParams {
    const params = {
      pickupLocation: formValue.pickupLocation,
      dropoffLocation: formValue.dropoffLocation
    };

    if (formValue.engine !== '') {
      params['engine'] = formValue.engine;
    }
    if (formValue.size !== '') {
      params['size'] = formValue.size;
    }
    if (formValue.color !== '') {
      params['color'] = formValue.color;
    }
    if (formValue.wings !== '') {
      params['wings'] = formValue.wings;
    }

    params['availableFrom_gte'] = this.formatDate(this.fromDate);
    params['availableTo_lte'] = this.formatDate(this.toDate);

    return params;
  }

  private initForm() {
    this.spaceshipForm = this.formBuilder.group({
      pickupLocation: ['', Validators.required],
      dropoffLocation: ['', Validators.required],
      color: [''],
      wings: [''],
      engine: [''],
      size: ['']
    });
  }

  private formatDate(date: NgbDate): string {
    const format = 'YYYYMMDD';
    return moment([date.year, date.month - 1, date.day]).format(format);
  }
}
