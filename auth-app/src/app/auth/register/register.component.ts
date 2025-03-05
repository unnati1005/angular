
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = '';
  password = '';
  confirmPassword = '';
  error = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  onSubmit(): void {
    this.error = '';
    
    if (!this.username || !this.password) {
      this.error = 'Username and password are required';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.error = 'Passwords do not match';
      return;
    }

    const success = this.authService.register(this.username, this.password);
    
    if (success) {
      this.router.navigate(['/login'], { queryParams: { registered: true } });
    } else {
      this.error = 'Username already exists';
    }
  }
}
