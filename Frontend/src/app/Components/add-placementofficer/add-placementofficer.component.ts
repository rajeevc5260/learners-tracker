import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-add-placementofficer',
  templateUrl: './add-placementofficer.component.html',
  styleUrls: ['./add-placementofficer.component.css'],
})
export class AddPlacementofficerComponent implements OnInit {
  placementAuthDetail = {
    name: '',
    email: '',
    password: '',
  };
  constructor(private authServices: AuthService) {}

  ngOnInit(): void {}
  // add placement function
  addPlacementOfficer() {
    console.log(this.placementAuthDetail);
    this.authServices
      .addPlacementOfficer(this.placementAuthDetail)
      .subscribe((res) => {
        alert('Placement Officer details added Sucessfully');
      });
  }
}
