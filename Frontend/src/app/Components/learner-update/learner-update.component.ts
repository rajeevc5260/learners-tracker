import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LearnersDataService } from 'src/app/Services/learners-data.service';
import { LearnersAnalyticsComponent } from '../learners-analytics/learners-analytics.component';

@Component({
  selector: 'app-learner-update',
  templateUrl: './learner-update.component.html',
  styleUrls: ['./learner-update.component.css'],
})
export class LearnerUpdateComponent implements OnInit {
  learnerDetails = {
    learnerId: '',
    name: '',
    project: '',
    batch: '',
    courseStatus: '',
    placementStatus: '',
  };
  constructor(
    private router: Router,
    private learnerServices: LearnersDataService
  ) {}

  ngOnInit(): void {
    let learnerId = localStorage.getItem('editLearnerId');
    this.learnerServices.getlearner(learnerId).subscribe((data) => {
      this.learnerDetails = JSON.parse(JSON.stringify(data));
    });
  }

  updateLearner() {
    this.learnerServices.updateLearner(this.learnerDetails);
    alert('updated successfully');
    window.location.reload();
  }
}
