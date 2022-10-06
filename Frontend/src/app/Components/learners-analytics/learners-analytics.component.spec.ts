import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnersAnalyticsComponent } from './learners-analytics.component';

describe('LearnersAnalyticsComponent', () => {
  let component: LearnersAnalyticsComponent;
  let fixture: ComponentFixture<LearnersAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnersAnalyticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnersAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
