import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpCardsComponent } from './help-cards.component';

describe('HelpCardsComponent', () => {
  let component: HelpCardsComponent;
  let fixture: ComponentFixture<HelpCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
