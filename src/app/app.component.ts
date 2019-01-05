import { Component, OnInit } from '@angular/core';

interface SpaceshipInterface {
  id: number;
  name: string;
  availability: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  data: SpaceshipInterface[] = [
    {
      id: 1,
      name: 'Test1',
      availability: 'None'
    },
    {
      id: 2,
      name: 'Test2',
      availability: 'None'
    },
    {
      id: 3,
      name: 'Test3',
      availability: 'Yes'
    },
    {
      id: 4,
      name: 'Test4',
      availability: 'Yes'
    }
  ];
  dataFiltered: SpaceshipInterface[] = [];

  filters: SpaceshipInterface = {
    id: null,
    name: '',
    availability: ''
  };

  stringAcontainsB = (A: string, B: string) =>
    A.toLowerCase().indexOf(B.toLowerCase()) > -1

  ngOnInit(): void {
    this.filterList(this.filters);
  }

  addFilter(filterName: string, event: any) {
    const value = event.target.value;
    this.filters = {...this.filters, [filterName]: value};
    this.filterList(this.filters);
  }

  filterList(filters?: SpaceshipInterface): void {
    const tmp = [...this.data];

    if (this.filters) {
      this.dataFiltered = tmp.filter(
        obj => this.stringAcontainsB(obj.name, filters.name)
      );
      console.log(this.dataFiltered);
    }
    this.dataFiltered = tmp;
  }
}
