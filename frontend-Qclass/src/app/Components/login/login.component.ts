import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user = {
    email: '',
    password: '',
  };

  constructor(private router: Router) {}
  onSubmit() {
    if (this.validateForm()) {
      console.log('Form Submitted', this.user);

      this.router.navigate(['/welcome/logIn']); 
    } else {
      alert('Please fill all fields correctly.');
    }
  }



  validateForm(): boolean {
    return (
      this.user.email !== '' && 
      this.user.password !== ''
    );
  }
  
}
