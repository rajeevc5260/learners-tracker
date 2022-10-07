import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerUpdateComponent } from './learner-update.component';

describe('LearnerUpdateComponent', () => {
  let component: LearnerUpdateComponent;
  let fixture: ComponentFixture<LearnerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnerUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
