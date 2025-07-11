import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAppList } from './loan-app-list';

describe('LoanAppList', () => {
  let component: LoanAppList;
  let fixture: ComponentFixture<LoanAppList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanAppList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanAppList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
