import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletePatientComponent } from './complete-patient.component';

describe('CompletePatientComponent', () => {
  let component: CompletePatientComponent;
  let fixture: ComponentFixture<CompletePatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletePatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
