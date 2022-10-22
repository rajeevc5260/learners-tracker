import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-th-sidenav',
  templateUrl: './th-sidenav.component.html',
  styleUrls: ['./th-sidenav.component.css']
})
export class ThSidenavComponent implements OnInit {
  sideNavItems = [
    { icon: 'dashboard', title: 'Dashboard' },
    { icon: 'dashboard', title: 'Dashboard' },
    { icon: 'dashboard', title: 'Dashboard' },
  ];

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  constructor(private observer: BreakpointObserver, public authServices:AuthService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.observer.observe(['(max-width:800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
}
