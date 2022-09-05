import { Component, OnInit } from '@angular/core';

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
    {'title':'Admin', 'icon':'admin_panel_settings'},
    {'title':'Training Head', 'icon':'supervisor_account'},
    {'title':'PLacement Officer', 'icon':'supervised_user_circle'}
  ];
  constructor() {}

  ngOnInit(): void {
  }
}
