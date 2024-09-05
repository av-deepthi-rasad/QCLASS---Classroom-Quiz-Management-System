import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-role',
  templateUrl: './choose-role.component.html',
  styleUrl: './choose-role.component.css'
})
export class ChooseRoleComponent {
  constructor(private router: Router) { }

  studentSignInPage(): void {
    this.router.navigate(['/SignUp/student']); 
  }
}
