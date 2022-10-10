import { Component, OnInit } from '@angular/core';
import { LearnersDataService } from 'src/app/Services/learners-data.service';
import { LearnerDataModel } from "../../DataModel/learnerData.Model";

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.css']
})
export class DashboardContentComponent implements OnInit {
  learnerDatas: LearnerDataModel[] = []; // Get for learner model
  constructor(private learnerServices:LearnersDataService) { }

  ngOnInit(): void {
     // Read learners Details
     this.learnerServices.getLearnerDetails().subscribe((data) => {
      this.learnerDatas = JSON.parse(JSON.stringify(data));
    });
  }

}
