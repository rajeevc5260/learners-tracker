import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  title = `LEARNER TRACKER`;
  contentPara = `Monitor the progress of the candidates while they complete their course,
  assign new task, place the candidate according to their perfomance.`;
  login = 'LOGIN';
  cardContents = [
    {'title':'ADMIN', 'icon':'admin_panel_settings'},
    {'title':'TRAINING HEAD', 'icon':'supervisor_account'},
    {'title':'PLACEMENT OFFICER', 'icon':'supervised_user_circle'}
  ];
 

  constructor(private dialogePopUp: MatDialog) {}
  
  logOpen() {
    this.dialogePopUp.open(LoginComponent);
  }
  ngOnInit(): void {
  }
}
