import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachesViewComponent } from './coaches-view.component';

describe('CoachesViewComponent', () => {
  let component: CoachesViewComponent;
  let fixture: ComponentFixture<CoachesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachesViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
