import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceshipItemComponent } from './spaceship-item.component';

describe('SpaceshipItemComponent', () => {
  let component: SpaceshipItemComponent;
  let fixture: ComponentFixture<SpaceshipItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceshipItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceshipItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
