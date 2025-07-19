import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityDetailsForm } from './security-details-form';

describe('SecurityDetailsForm', () => {
  let component: SecurityDetailsForm;
  let fixture: ComponentFixture<SecurityDetailsForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityDetailsForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityDetailsForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
