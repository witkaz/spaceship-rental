import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceshipsSearchComponent } from './spaceships-search.component';

describe('SpaceshipsSearchComponent', () => {
  let component: SpaceshipsSearchComponent;
  let fixture: ComponentFixture<SpaceshipsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceshipsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceshipsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
