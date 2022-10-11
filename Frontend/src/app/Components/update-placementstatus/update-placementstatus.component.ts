import { Component, OnInit } from '@angular/core';
import { LearnerDataModel } from 'src/app/DataModel/learnerData.Model';
import { LearnersDataService } from 'src/app/Services/learners-data.service';

@Component({
  selector: 'app-update-placementstatus',
  templateUrl: './update-placementstatus.component.html',
  styleUrls: ['./update-placementstatus.component.css'],
})
export class UpdatePlacementstatusComponent implements OnInit {
  learnerDetails = {
    learnerId: '',
    name: '',
    project: '',
    batch: '',
    courseStatus: '',
    placementStatus: '',
  };
  constructor(private learnerServices: LearnersDataService) {}

  ngOnInit(): void {
    // update
    let learnerId = localStorage.getItem('editLearnerId');
    this.learnerServices.getlearner(learnerId).subscribe((data) => {
      this.learnerDetails = JSON.parse(JSON.stringify(data));
    });
  }
  updateLearnerPlacement() {
    this.learnerServices.updateLearnerPlacement(this.learnerDetails);
    alert('updated successfully');
  }
}
