import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyPromiseComponent } from './monthly-promise.component';

describe('MonthlyPromiseComponent', () => {
  let component: MonthlyPromiseComponent;
  let fixture: ComponentFixture<MonthlyPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlyPromiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
