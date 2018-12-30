import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpaceshipsComponent } from './spaceships.component';

describe('SpaceshipsComponent', () => {
  let component: SpaceshipsComponent;
  let fixture: ComponentFixture<SpaceshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
