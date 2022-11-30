import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeAvailibleTimesComponent } from './change-availible-times.component';

describe('ChangeAvailibleTimesComponent', () => {
  let component: ChangeAvailibleTimesComponent;
  let fixture: ComponentFixture<ChangeAvailibleTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeAvailibleTimesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeAvailibleTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
