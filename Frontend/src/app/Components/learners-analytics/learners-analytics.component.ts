import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LearnersDataService } from 'src/app/Services/learners-data.service';
import { AddCandidatesComponent } from '../add-candidates/add-candidates.component';
import { LearnerUpdateComponent } from '../learner-update/learner-update.component';
import { UploadFileComponent } from '../upload-file/upload-file.component';
import { LearnerDataModel } from '../../DataModel/learnerData.Model';

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

  // Popup Dialoge Tabs for /ADD/UPLOAD FILE
  addOpen() {
    this.dialogePopUp.open(AddCandidatesComponent);
  }
  uploadFile() {
    this.dialogePopUp.open(UploadFileComponent);
  }

  // Update a learner Details
  updateLearner(learnerData: any) {
    localStorage.setItem('editLearnerId', learnerData._id.toString());
    this.dialogePopUp.open(LearnerUpdateComponent);
  }

  // delete a learner
  deleteLearner(learnerData: any) {
    this.learnerServices.deleteLearner(learnerData._id).subscribe((data) => {
      this.learnerDatas = this.learnerDatas.filter((learner) => learner !== learnerData);
    });
  }

  ngOnInit(): void {
    // Read learners Details
    this.learnerServices.getLearnerDetails().subscribe((data) => {
      this.learnerDatas = JSON.parse(JSON.stringify(data));
    });
  }
}
