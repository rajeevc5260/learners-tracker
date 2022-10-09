import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LearnersDataService } from 'src/app/Services/learners-data.service';
import { AddCandidatesComponent } from '../add-candidates/add-candidates.component';
import { LearnerUpdateComponent } from '../learner-update/learner-update.component';
import { UploadFileComponent } from '../upload-file/upload-file.component';
import { LearnerDataModel } from './learnerData.Model';

@Component({
  selector: 'app-learners-analytics',
  templateUrl: './learners-analytics.component.html',
  styleUrls: ['./learners-analytics.component.css'],
})
export class LearnersAnalyticsComponent implements OnInit {
  learnerDatas: LearnerDataModel[] = []; // Get for learner model
  constructor(
    private dialogePopUp: MatDialog,
    private learnerServices: LearnersDataService
  ) {}

  // Popup Dialoge Tabs UPDATE/ADD/UPLOAD FILE
  updateOpen() {
    this.dialogePopUp.open(LearnerUpdateComponent);
  }
  addOpen() {
    this.dialogePopUp.open(AddCandidatesComponent);
  }
  uploadFile() {
    this.dialogePopUp.open(UploadFileComponent);
  }
  ngOnInit(): void {
    // Read learners Details
    this.learnerServices.getLearnerDetails().subscribe((data) => {
      this.learnerDatas = JSON.parse(JSON.stringify(data));
    });
  }
}
