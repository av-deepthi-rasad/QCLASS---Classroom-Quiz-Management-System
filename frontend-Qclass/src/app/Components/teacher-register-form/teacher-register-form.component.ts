import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-register-form',
  templateUrl: './teacher-register-form.component.html',
  styleUrl: './teacher-register-form.component.css'
})
export class TeacherRegisterFormComponent {



  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    if (this.validateForm()) {
      console.log('Form Submitted', this.user);

      this.router.navigate(['/Teacher']); 
    } else {
      alert('Please fill all fields correctly.');
    }
  }


  validateForm(): boolean {
    return this.user.name !== '' && 
           this.user.email !== '' && 
           this.user.password !== '' && 
           this.user.password === this.user.confirmPassword &&
           this.user.gender !== '';
  }


}
