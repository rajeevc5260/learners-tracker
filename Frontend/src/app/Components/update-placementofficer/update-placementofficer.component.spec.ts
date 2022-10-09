import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlacementofficerComponent } from './update-placementofficer.component';

describe('UpdatePlacementofficerComponent', () => {
  let component: UpdatePlacementofficerComponent;
  let fixture: ComponentFixture<UpdatePlacementofficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePlacementofficerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePlacementofficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
