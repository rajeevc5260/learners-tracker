import { Component, OnInit } from '@angular/core';
import { LearnersDataService } from 'src/app/Services/learners-data.service';

@Component({
  selector: 'app-add-candidates',
  templateUrl: './add-candidates.component.html',
  styleUrls: ['./add-candidates.component.css'],
})
export class AddCandidatesComponent implements OnInit {
  learnerDetails = {
    learnerId: '',
    name: '',
    project: 'Project',
    batch: 'Batch',
    courseStatus: 'Course Status',
  };
  constructor(private addLearnerServices: LearnersDataService) {}

  ngOnInit(): void {}

  // add learner function
  addLearner() {
    console.log(this.learnerDetails);
    this.addLearnerServices.addLearner(this.learnerDetails).subscribe((res) => {
      alert('Candidate details added Sucessfully');
      window.location.reload();
    });
  }
}
