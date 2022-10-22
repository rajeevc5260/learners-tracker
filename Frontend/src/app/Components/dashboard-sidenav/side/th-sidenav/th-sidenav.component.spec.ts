import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThSidenavComponent } from './th-sidenav.component';

describe('ThSidenavComponent', () => {
  let component: ThSidenavComponent;
  let fixture: ComponentFixture<ThSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThSidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
