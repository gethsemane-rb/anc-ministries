import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBeliefComponent } from './our-belief.component';

describe('OurBeliefComponent', () => {
  let component: OurBeliefComponent;
  let fixture: ComponentFixture<OurBeliefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurBeliefComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurBeliefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
