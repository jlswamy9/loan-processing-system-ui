import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLoyoutComponent } from './main-loyout-component';

describe('MainLoyoutComponent', () => {
  let component: MainLoyoutComponent;
  let fixture: ComponentFixture<MainLoyoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainLoyoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainLoyoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
