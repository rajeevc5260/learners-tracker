import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCandidatesComponent } from '../add-candidates/add-candidates.component';
import { LearnerUpdateComponent } from '../learner-update/learner-update.component';

@Component({
  selector: 'app-learners-analytics',
  templateUrl: './learners-analytics.component.html',
  styleUrls: ['./learners-analytics.component.css']
})
export class LearnersAnalyticsComponent implements OnInit {

  constructor(private dialogePopUp:MatDialog) { }
  updateOpen() {
    this.dialogePopUp.open(LearnerUpdateComponent);
  }

  addOpen(){
    this.dialogePopUp.open(AddCandidatesComponent);
  }
  
  ngOnInit(): void {
  }

}
