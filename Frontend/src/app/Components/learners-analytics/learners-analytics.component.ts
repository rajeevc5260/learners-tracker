import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCandidatesComponent } from '../add-candidates/add-candidates.component';
import { LearnerUpdateComponent } from '../learner-update/learner-update.component';
import { UploadFileComponent } from '../upload-file/upload-file.component';

@Component({
  selector: 'app-learners-analytics',
  templateUrl: './learners-analytics.component.html',
  styleUrls: ['./learners-analytics.component.css'],
})
export class LearnersAnalyticsComponent implements OnInit {
  constructor(private dialogePopUp: MatDialog) {}

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
  ngOnInit(): void {}
}
