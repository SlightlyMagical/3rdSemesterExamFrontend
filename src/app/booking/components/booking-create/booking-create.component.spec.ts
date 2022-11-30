import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingCreateComponent } from './booking-create.component';

describe('BookingCreateComponent', () => {
  let component: BookingCreateComponent;
  let fixture: ComponentFixture<BookingCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
