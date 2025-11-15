import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMinistryComponent } from './team-ministry.component';

describe('TeamMinistryComponent', () => {
  let component: TeamMinistryComponent;
  let fixture: ComponentFixture<TeamMinistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamMinistryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamMinistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
