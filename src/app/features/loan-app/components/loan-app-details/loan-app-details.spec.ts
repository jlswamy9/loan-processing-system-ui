import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAppDetails } from './loan-app-details';

describe('LoanAppDetails', () => {
  let component: LoanAppDetails;
  let fixture: ComponentFixture<LoanAppDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanAppDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanAppDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
