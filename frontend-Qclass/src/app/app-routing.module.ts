import { CreateQuizComponent } from './Components/Teacher-components/create-quiz/create-quiz.component';
import { CreateClasesComponent } from './Components/Teacher-components/create-clases/create-clases.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './Pages/welcome-page/welcome-page.component';
import { Welcome2PageComponent } from './Pages/welcome2-page/welcome2-page.component';
import { ChooseRoleComponent } from './Components/choose-role/choose-role.component';
import { StudentRegisterFormComponent } from './Components/student-register-form/student-register-form.component';
import { TeacherRegisterFormComponent } from './Components/teacher-register-form/teacher-register-form.component';
import { TeacherToolsComponent } from './Pages/teacher-tools/teacher-tools.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },

  {
    path: 'SignUp', 
    component: Welcome2PageComponent, // Parent component
    children: [
      { path: 'role', component: ChooseRoleComponent },
      { path: 'student', component: StudentRegisterFormComponent }, // Child route
      { path: 'teacher', component: TeacherRegisterFormComponent}
    ]
  },
  {
    path: 'welcome', 
    component: Welcome2PageComponent, // Parent component
    children: [
      { path: 'signIn', component: LoginComponent },

    ]
  },

  {
    path: 'Teacher',
    component: TeacherToolsComponent,
    children: [
    { path: 'class', component: CreateClasesComponent},
    { path: 'quiz', component: CreateQuizComponent},
    { path: 'manage', component: CreateQuizComponent},
    { path: 'reports', component: CreateQuizComponent},
    { path: 'settings', component: CreateQuizComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
