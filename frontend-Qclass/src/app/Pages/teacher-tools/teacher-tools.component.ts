import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-tools',
  templateUrl: './teacher-tools.component.html',
  styleUrl: './teacher-tools.component.css'
})
export class TeacherToolsComponent {

  constructor(private router: Router) {}
  
  navigateToCreateClass() {
    this.router.navigate(['/Teacher/class']); 
  }

  navigateToCreateQuiz() {
    this.router.navigate(['/Teacher/quiz']); 
  }
 
  navigateToManageClasses() {
    this.router.navigate(['/Teacher/manage']); 
  }

  navigateToViewReports() {
    this.router.navigate(['/Teacher/reports']); 
  }

  navigateToSettings() {
    this.router.navigate(['/Teacher/settings']); 
  }



}
