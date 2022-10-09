import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlacementofficerComponent } from './add-placementofficer.component';

describe('AddPlacementofficerComponent', () => {
  let component: AddPlacementofficerComponent;
  let fixture: ComponentFixture<AddPlacementofficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlacementofficerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPlacementofficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
