import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './Pages/welcome-page/welcome-page.component';
import { Welcome2PageComponent } from './Pages/welcome2-page/welcome2-page.component';
import { ChooseRoleComponent } from './Components/choose-role/choose-role.component';
import { StudentRegisterFormComponent } from './Components/student-register-form/student-register-form.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  {
    path: 'SignUp', 
    component: Welcome2PageComponent, // Parent component
    children: [
      { path: 'role', component: ChooseRoleComponent },
      { path: 'student', component: StudentRegisterFormComponent } // Child route
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
