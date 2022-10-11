import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { authDataModel } from 'src/app/DataModel/authData.Model';
import { trainerAuthDataModel } from 'src/app/DataModel/trainerAuth.Model';
import { AuthService } from 'src/app/Services/auth.service';
import { AddPlacementofficerComponent } from '../add-placementofficer/add-placementofficer.component';
import { AddTrainerheadComponent } from '../add-trainerhead/add-trainerhead.component';
import { UpdatePlacementofficerComponent } from '../update-placementofficer/update-placementofficer.component';
import { UpdateTrainerheadComponent } from '../update-trainerhead/update-trainerhead.component';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.css'],
})
export class AdminSettingsComponent implements OnInit {
  adminAuthDatas: authDataModel[]= [ ]
  trainerAuthDatas: trainerAuthDataModel[]= [ ]
  constructor(private dialogePopUp: MatDialog, private authServices: AuthService) {}

  ngOnInit(): void {

    // getPlacement Officer Auth Details
    this.authServices.getPlacementAuthData().subscribe((data) => {
      this.adminAuthDatas = JSON.parse(JSON.stringify(data));
    });

    // get Trainer head Auth Details
    this.authServices.getTrainerAuthData().subscribe((data) => {
      this.trainerAuthDatas = JSON.parse(JSON.stringify(data));
    });
  }

  // trainer head add popup form
  trainerFrmOpen() {
    this.dialogePopUp.open(AddTrainerheadComponent);
  }
  // placement officer add popup form
  placementOfficerFrmOpen() {
    this.dialogePopUp.open(AddPlacementofficerComponent);
  }

  // Update a trainer Details
  updatePlacementOfficer(placementOfficerData: any) {
    localStorage.setItem('editPlacementOfficerId', placementOfficerData._id.toString());
    this.dialogePopUp.open(UpdatePlacementofficerComponent);
  }

  // Update a placement officer Details
  updateTrainer(trainerData: any) {
    localStorage.setItem('editTrainerId', trainerData._id.toString());
    this.dialogePopUp.open(UpdateTrainerheadComponent);
  }

  // delete a Trainer
  deleteTrainer(trainerData: any) {
    this.authServices.deleteTrainer(trainerData._id).subscribe((data) => {
      this.trainerAuthDatas = this.trainerAuthDatas.filter((trainer) => trainer !== trainerData);
    });
  }

   // delete a placementOfficer
   deletePlacementOfficer(placementOfficerData: any) {
    this.authServices.deleteplacementOfficer(placementOfficerData._id).subscribe((data) => {
      this.adminAuthDatas = this.adminAuthDatas.filter((placementOfficer) => placementOfficer !== placementOfficerData);
    });
  }



}
