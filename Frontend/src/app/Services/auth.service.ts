import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router:Router) {}

  // Admin Login
  loginAdmin(admin: any) {
    return this.http.post<any>('http://localhost:3000/login', admin);
  }

  // placementOfficer Login
  loginPlacementOfficer(placementOfficer: any){
    return this.http.post<any>('http://localhost:3000/placementLogin', placementOfficer)
  }

  placementOfficerLoggedIn() {
    return !!localStorage.getItem('token');
  }
  // Trainer Login
  loginTrainerHead(trainerHead: any){
    return this.http.post<any>('http://localhost:3000/trainerLogin', trainerHead)
  }
  trainerHeadLoggedIn() {
    return !!localStorage.getItem('token');
  } 

  // Admin LoggedIn
  adminLoggedIn() {
    return !!localStorage.getItem('token');
  }

  logOut(){
    localStorage.removeItem('token')
    this.router.navigate([''])
  }

  // auth Get Token
  getToken() {
    return localStorage.getItem('token');
  }

  // Add placementOfficer auth data
  addPlacementOfficer(placementAuthData: any) {
    return this.http.post<any>(
      'http://localhost:3000/addPlacementData',
      placementAuthData
    );
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
    return this.http.post<any>(
      'http://localhost:3000/addTrainerHeadData',
      trainerAuthData
    );
  }

  // Delete Trainer Details
  deleteTrainer(id: any) {
    return this.http.delete('http://localhost:3000/trainerRemove/' + id);
  }

  // Delete placementOfficer Details
  deleteplacementOfficer(id: any) {
    return this.http.delete(
      'http://localhost:3000/placementOfficerRemove/' + id
    );
  }

  // get trainer auth details to update by ID
  getTrainerDetails(id: any) {
    return this.http.get('http://localhost:3000/trainerAuth/' + id);
  }
  // update tariner
  updateTrainer(trainer: any) {
    console.log('update');
    return this.http
      .put('http://localhost:3000/trainerAuthUpdate/', trainer)
      .subscribe((data) => {
        console.log(data);
      });
  }

  // get placement officer auth details to update by ID
  getPlacementOfficerDetails(id: any) {
    return this.http.get('http://localhost:3000/placementOfficerAuth/' + id);
  }
  // update tariner
  updatePlacementOfficer(placementOfficer: any) {
    console.log('update');
    return this.http
      .put('http://localhost:3000/placementAuthUpdate/', placementOfficer)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
