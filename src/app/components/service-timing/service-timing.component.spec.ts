import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTimingComponent } from './service-timing.component';

describe('ServiceTimingComponent', () => {
  let component: ServiceTimingComponent;
  let fixture: ComponentFixture<ServiceTimingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceTimingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceTimingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
