import { Component, OnInit } from '@angular/core';
import { LearnersDataService } from 'src/app/Services/learners-data.service';
import { LearnerDataModel } from "../../DataModel/learnerData.Model";
@Component({
  selector: 'app-placements',
  templateUrl: './placements.component.html',
  styleUrls: ['./placements.component.css']
})
export class PlacementsComponent implements OnInit {
  learnerDatas: LearnerDataModel[] = []; // Get for learner model

  constructor(private learnerServices:LearnersDataService) { }

  ngOnInit(): void {
     // Read learners Details
     this.learnerServices.getLearnerDetails().subscribe((data) => {
      this.learnerDatas = JSON.parse(JSON.stringify(data));
    });
  }

}
