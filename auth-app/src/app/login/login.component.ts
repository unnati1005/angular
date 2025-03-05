import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    console.log('Login attempt:', this.username, this.password);
    alert(`Login attempted with username: ${this.username}`);
    // In a real app, you would authenticate with a service here
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}