import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-add-trainerhead',
  templateUrl: './add-trainerhead.component.html',
  styleUrls: ['./add-trainerhead.component.css'],
})
export class AddTrainerheadComponent implements OnInit {
  trainerAuthDetail = {
    name: '',
    email: '',
    password: '',
  };
  constructor(private authServices: AuthService) {}

  ngOnInit(): void {}
  // add trainer function
  addTrainerHead() {
    console.log(this.trainerAuthDetail);
    this.authServices
      .addTrainerHead(this.trainerAuthDetail)
      .subscribe((res) => {
        alert('Trainer head details added Sucessfully');
        window.location.reload();
      });
  }
}
