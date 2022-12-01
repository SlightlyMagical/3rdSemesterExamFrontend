import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachViewComponent } from './coach-view.component';

describe('CoachViewComponent', () => {
  let component: CoachViewComponent;
  let fixture: ComponentFixture<CoachViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
