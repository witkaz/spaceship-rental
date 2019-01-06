import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Spaceship } from '../../../../shared/models/spaceships/spaceship.model';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  templateUrl: './spaceships-detail.component.html',
  styleUrls: ['./spaceships-detail.component.scss']
})
export class SpaceshipsDetailComponent implements OnInit {
  spaceship: Spaceship;
  showBtn = false;
  btnName = 'Show order summary';
  summaryOrderForm: FormGroup;
  insurance = 60;
  tourist = 30;
  photoAlbum = 40;
  totalPrice: number;
  packages: string[] = [];
  bookingDaysDiff: number;
  extraPackages = [
    { name: 'insurance', label: `Insurance - (${this.insurance}$)` },
    { name: 'tourist', label: `Tourist ticket discount card - (${this.tourist}$)` },
    { name: 'photoAlbum', label: `Photo album - (${this.photoAlbum}$)` },
  ];

  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.spaceship = this.route.snapshot.data.spaceship;
    this.bookingDaysDiff = +localStorage.getItem('bookingDays');
    this.totalPrice = this.spaceship.price * this.bookingDaysDiff;
    this.summaryOrderForm = this.formBuilder.group({
      extraPackages: this.formBuilder.array([])
    });
  }

  showSummary() {
    this.showBtn = !this.showBtn;
    if (this.showBtn) {
      this.btnName = 'Hide order summary';
    } else {
      this.btnName = 'Show order summary';
    }
  }

  onExtraPackagesChange(name: string, isChecked: boolean) {
    const extraPackagesFormArray = <FormArray>this.summaryOrderForm.controls.extraPackages;

    if (isChecked) {
      extraPackagesFormArray.push(new FormControl(name));
      this.totalPrice += this[name];
      this.packages.push(name.toUpperCase());
    } else {
      const index = extraPackagesFormArray.controls.findIndex(x => x.value === name);
      extraPackagesFormArray.removeAt(index);
      this.totalPrice -= this[name];
      this.packages.splice(index, 1);
    }
  }
}
