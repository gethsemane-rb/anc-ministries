import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastorInfoComponent } from './pastor-info.component';

describe('PastorInfoComponent', () => {
  let component: PastorInfoComponent;
  let fixture: ComponentFixture<PastorInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastorInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
