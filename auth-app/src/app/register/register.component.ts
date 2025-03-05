import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onRegister() {
    console.log('Registration attempt:', this.username, this.password);
    alert(`Registration attempted with username: ${this.username}`);
    // In a real app, you would register with a service here
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}