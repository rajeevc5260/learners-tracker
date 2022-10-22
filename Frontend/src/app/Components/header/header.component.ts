import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/Services/auth.service';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'LEARNER TRACKER';
  constructor(private dialogePopUp: MatDialog, public authServices:AuthService) {}

  logOpen() {
    this.dialogePopUp.open(LoginComponent);
  }


  ngOnInit(): void {}
}
