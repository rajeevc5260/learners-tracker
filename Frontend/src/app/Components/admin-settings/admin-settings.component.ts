import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  constructor(private dialogePopUp: MatDialog) {}

  ngOnInit(): void {}

  // trainer head add popup form
  trainerFrmOpen() {
    this.dialogePopUp.open(AddTrainerheadComponent);
  }
  // trainer head update popup form
  trainerUpdateFrmOpen() {
    this.dialogePopUp.open(UpdateTrainerheadComponent);
  }
  // placement officer add popup form
  placementOfficerFrmOpen() {
    this.dialogePopUp.open(AddPlacementofficerComponent);
  }
  // placement officer update popup form
  placementOfficerUpdateFrmOpen() {
    this.dialogePopUp.open(UpdatePlacementofficerComponent);
  }
}
