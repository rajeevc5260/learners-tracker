import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LearnersDataService {
  static getLearnerDetails: any;
  constructor(private http: HttpClient) {}

  // Read Learner Analytics Details
  getLearnerDetails() {
    return this.http.get<any>('http://localhost:3000/learnerAnalytics');
  }

  // Add single Candidate
  addLearner(learnersData: any) {
    return this.http.post<any>('http://localhost:3000/addData', learnersData);
  }

    // Add multiple Candidate
    addMultipleLearner(learnersData: any) {
      return this.http.post<any>('http://localhost:3000/addMultipleData', learnersData);
    }

  // get learner details to update by ID 
  getlearner(id: any) {
    return this.http.get('http://localhost:3000/learnerAnalytics/' + id);
  }
  // update learner
  updateLearner(learner: any) {
    console.log('update');
    return this.http
      .put('http://localhost:3000/learnerUpdate/', learner)
      .subscribe((data) => {
        console.log(data);
      });
  }

  // update learner
  updateLearnerPlacement(learnerPlacement: any) {
    console.log('update');
    return this.http
      .put('http://localhost:3000/learnerUpdate/', learnerPlacement)
      .subscribe((data) => {
        console.log(data);
      });
  }

  // Delete learners Details
  deleteLearner(id: any) {
    return this.http.delete('http://localhost:3000/remove/' + id);
  }
}
