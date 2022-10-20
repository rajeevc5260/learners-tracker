import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-update-placementofficer',
  templateUrl: './update-placementofficer.component.html',
  styleUrls: ['./update-placementofficer.component.css']
})
export class UpdatePlacementofficerComponent implements OnInit {
  placementOfficerAuthDetails = {
    name: '',
    email: '',
    password: '',
  };
  constructor(private router:Router, private authservices: AuthService) {}
  ngOnInit(): void {
    let placementOfficerId = localStorage.getItem('editPlacementOfficerId');
    this.authservices.getPlacementOfficerDetails(placementOfficerId).subscribe((data) => {
      this.placementOfficerAuthDetails = JSON.parse(JSON.stringify(data));
    });
  }

  updatePlacementOfficer(){
    this.authservices.updatePlacementOfficer(this.placementOfficerAuthDetails);
    alert('updated successfully');
    window.location.reload();
  }

}
