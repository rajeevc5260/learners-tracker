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
 
  // Add trainer head auth data 
  addTrainerHead(trainerAuthData: any) {
    return this.http.post<any>('http://localhost:3000/addTrainerHeadData', trainerAuthData);
  }
}
