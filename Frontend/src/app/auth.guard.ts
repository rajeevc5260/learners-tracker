import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanActivate, Router } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { AuthService } from './Services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private router: Router, private dialogePopUp:MatDialog ) {}

  canActivate(): boolean {
    if (this._authService.adminLoggedIn()) {
      return true;
    } else {
      this.dialogePopUp.open(LoginComponent);
      return false;
    }
  }
}
