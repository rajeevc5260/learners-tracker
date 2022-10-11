import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-update-trainerhead',
  templateUrl: './update-trainerhead.component.html',
  styleUrls: ['./update-trainerhead.component.css'],
})
export class UpdateTrainerheadComponent implements OnInit {
  trainerAuthDetails = {
    name: '',
    email: '',
    password: '',
  };
  constructor(private router:Router, private authservices: AuthService) {}
  ngOnInit(): void {
    let trainerId = localStorage.getItem('editTrainerId');
    this.authservices.getTrainerDetails(trainerId).subscribe((data) => {
      this.trainerAuthDetails = JSON.parse(JSON.stringify(data));
    });
  }

  updateTrainer(){
    this.authservices.updateTrainer(this.trainerAuthDetails);
    alert('updated successfully');
    this.router.navigate(['adminSettings'])
  }

}
