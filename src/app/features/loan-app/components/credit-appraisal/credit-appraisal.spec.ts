import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditAppraisal } from './credit-appraisal';

describe('CreditAppraisal', () => {
  let component: CreditAppraisal;
  let fixture: ComponentFixture<CreditAppraisal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditAppraisal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditAppraisal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
