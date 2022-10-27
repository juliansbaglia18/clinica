import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteSpecialistComponent } from './complete-specialist.component';

describe('CompleteSpecialistComponent', () => {
  let component: CompleteSpecialistComponent;
  let fixture: ComponentFixture<CompleteSpecialistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteSpecialistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteSpecialistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
