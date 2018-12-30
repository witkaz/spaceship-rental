import { Component, OnInit } from '@angular/core';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-spaceships-search',
  templateUrl: './spaceships-search.component.html',
  styleUrls: ['./spaceships-search.component.scss']
})
export class SpaceshipsSearchComponent implements OnInit {
  hoveredDate: NgbDate;
  fromDate: NgbDate;
  toDate: NgbDate;
  spaceshipForm: FormGroup;

  constructor(calendar: NgbCalendar,
              private formBuilder: FormBuilder) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 5);
  }

  ngOnInit(): void {
    this.spaceshipForm = this.formBuilder.group({
      pickupLocation: ['', Validators.required],
      dropoffLocation: ['', Validators.required]
    });
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

  testSubmit(event: any) {
    console.log(this.fromDate);
    console.log(this.toDate);
    console.log(event);
  }

  // private initForm() {
  //   this.spaceshipForm = new FormGroup({
  //     'name': new FormControl(bookName, Validators.required),
  //     'imagePath': new FormControl(bookImagePath, Validators.required),
  //     'description': new FormControl(bookDescription, Validators.required),
  //     'bookSpecifications': bookSpecification
  //   });
  // }
}
