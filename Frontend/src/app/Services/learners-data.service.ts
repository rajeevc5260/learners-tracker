import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LearnersDataService {
  constructor(private http: HttpClient) {}

  // Add single Candidate
  addLearner(learnersData: any) {
    return this.http.post<any>('http://localhost:3000/addData', learnersData);
  }
}
