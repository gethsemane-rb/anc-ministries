import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBgVideoLoaderComponent } from './home-bg-video-loader.component';

describe('HomeBgVideoLoaderComponent', () => {
  let component: HomeBgVideoLoaderComponent;
  let fixture: ComponentFixture<HomeBgVideoLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBgVideoLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBgVideoLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
