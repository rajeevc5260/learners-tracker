import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTrainerheadComponent } from './update-trainerhead.component';

describe('UpdateTrainerheadComponent', () => {
  let component: UpdateTrainerheadComponent;
  let fixture: ComponentFixture<UpdateTrainerheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTrainerheadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTrainerheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
