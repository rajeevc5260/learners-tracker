import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  adminLogs = {
    email: '',
    password: '',
  };

  constructor(private _auth: AuthService, private router:Router) {}

  ngOnInit(): void {}

  loginAdmin() {
    this._auth.loginAdmin(this.adminLogs)
    .subscribe(
      res  => { 
        console.log(res)
        localStorage.setItem('token', res.token)
        this.router.navigate(['/dashboard']);
      },
      err  => alert('Invalid credentials, enter valid credential')
    );
  }

  loginPlacementOfficer() {
    this._auth.loginPlacementOfficer(this.adminLogs)
    .subscribe(
      res  => { 
        console.log(res)
        localStorage.setItem('token', res.token)
        this.router.navigate(['/dashboard']);
      },
      err  => alert('Invalid credentials, enter valid credential')
    );
  }
  
  loginTrainerHead(){
    this._auth.loginTrainerHead(this.adminLogs)
    .subscribe(
      res  => { 
        console.log(res)
        localStorage.setItem('token', res.token)
        this.router.navigate(['/dashboard']);
      },
      err  => alert('Invalid credentials, enter valid credential')
    );
  }
}
