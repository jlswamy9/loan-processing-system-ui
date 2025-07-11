import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAppForm } from './loan-app-form';

describe('LoanAppForm', () => {
  let component: LoanAppForm;
  let fixture: ComponentFixture<LoanAppForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanAppForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanAppForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
