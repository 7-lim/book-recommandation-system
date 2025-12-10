import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) { }

  signup() {
    this.authService.signup(this.email, this.password);
  }
}
