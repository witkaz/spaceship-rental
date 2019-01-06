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
  insurancePrice = 50;
  touristCardPrice = 20;
  nutritionalPackagePrice = 30;
  extraPackages = [
    { name: `Insurance - (${this.insurancePrice}$)` },
    { name: `Tourist discount card - each ticket costs 5$ - (${this.touristCardPrice}$)` },
    { name: `Nutritional package - 3 meals/day - (${this.nutritionalPackagePrice}$)` },
  ];

  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // this.initSummaryForm();
    this.spaceship = this.route.snapshot.data.spaceship;
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

  // private initSummaryForm() {
  //   this.summaryOrderForm = this.formBuilder.group({
  //     insurance: [''],
  //     touristCard: [''],
  //     nutritionalPackage: ['']
  //   });
  // }

  onExtraPackagesChange(name: string, isChecked: boolean) {
    const extraPackagesFormArray = <FormArray>this.summaryOrderForm.controls.extraPackages;

    if (isChecked) {
      extraPackagesFormArray.push(new FormControl(name));
    } else {
      const index = extraPackagesFormArray.controls.findIndex(x => x.value === name);
      extraPackagesFormArray.removeAt(index);
      // if empty value === None
    }
  }
}
