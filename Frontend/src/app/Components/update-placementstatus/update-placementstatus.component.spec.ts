import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlacementstatusComponent } from './update-placementstatus.component';

describe('UpdatePlacementstatusComponent', () => {
  let component: UpdatePlacementstatusComponent;
  let fixture: ComponentFixture<UpdatePlacementstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePlacementstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePlacementstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
