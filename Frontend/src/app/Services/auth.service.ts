import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

   // Add placementOfficer auth data 
   addPlacementOfficer(placementAuthData: any) {
    return this.http.post<any>('http://localhost:3000/addPlacementData', placementAuthData);
  }
 
  // Read Placement officer Auth Data
  getPlacementAuthData() {
    return this.http.get<any>('http://localhost:3000/placementAuthDetails');
  }

  // Read Placement officer Auth Data
  getTrainerAuthData() {
    return this.http.get<any>('http://localhost:3000/trainerAuthDetails');
  }

  // Add trainer head auth data 
  addTrainerHead(trainerAuthData: any) {
    return this.http.post<any>('http://localhost:3000/addTrainerHeadData', trainerAuthData);
  }

  // Delete Trainer Details
  deleteTrainer(id: any) {
    return this.http.delete('http://localhost:3000/trainerRemove/' + id);
  }
  
   // Delete placementOfficer Details
   deleteplacementOfficer(id: any) {
    return this.http.delete('http://localhost:3000/placementOfficerRemove/' + id);
  }
}
