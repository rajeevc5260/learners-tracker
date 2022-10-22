import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoSidenavComponent } from './po-sidenav.component';

describe('PoSidenavComponent', () => {
  let component: PoSidenavComponent;
  let fixture: ComponentFixture<PoSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoSidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
