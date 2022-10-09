import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrainerheadComponent } from './add-trainerhead.component';

describe('AddTrainerheadComponent', () => {
  let component: AddTrainerheadComponent;
  let fixture: ComponentFixture<AddTrainerheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTrainerheadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTrainerheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
