import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LearnersDataService } from 'src/app/Services/learners-data.service';
import { LearnerDataModel } from '../../DataModel/learnerData.Model';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.css'],
})
export class DashboardContentComponent implements OnInit {
  learnerDatas: LearnerDataModel[] = []; // Get for learner model
  constructor(
    private learnerServices: LearnersDataService,
    private dialogePopUp: MatDialog
  ) {}

  ngOnInit(): void {
    // Read learners Details with authorization
    this.learnerServices.getLearnerDetails().subscribe(
      (res) => (this.learnerDatas = res),
      (err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.dialogePopUp.open(LoginComponent);
          }
        }
      }
    );
  }
}
