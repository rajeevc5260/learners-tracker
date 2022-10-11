import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LearnersDataService } from 'src/app/Services/learners-data.service';
import { LearnerDataModel } from "../../DataModel/learnerData.Model";
import { UpdatePlacementstatusComponent } from '../update-placementstatus/update-placementstatus.component';
@Component({
  selector: 'app-placements',
  templateUrl: './placements.component.html',
  styleUrls: ['./placements.component.css']
})
export class PlacementsComponent implements OnInit {
  learnerDatas: LearnerDataModel[] = []; // Get for learner model

  constructor(private learnerServices:LearnersDataService, private dialogePopUp:MatDialog) { }
  
  ngOnInit(): void {
     // Read learners Details
     this.learnerServices.getLearnerDetails().subscribe((data) => {
      this.learnerDatas = JSON.parse(JSON.stringify(data));
    });
  }

   // Update a learner Details
   updateLearnerPlacement(learnerData: any) {
    localStorage.setItem('editLearnerId', learnerData._id.toString());
    this.dialogePopUp.open(UpdatePlacementstatusComponent);
  }
  
}
