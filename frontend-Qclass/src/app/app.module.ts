import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './Pages/welcome-page/welcome-page.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { Welcome2PageComponent } from './Pages/welcome2-page/welcome2-page.component';
import { ChooseRoleComponent } from './Components/choose-role/choose-role.component';
import { StudentRegisterFormComponent } from './Components/student-register-form/student-register-form.component';
import { TeacherRegisterFormComponent } from './Components/teacher-register-form/teacher-register-form.component';
import { TeacherToolsComponent } from './Pages/teacher-tools/teacher-tools.component';
import { CreateClasesComponent } from './Components/Teacher-components/create-clases/create-clases.component';
import { CreateQuizComponent } from './Components/Teacher-components/create-quiz/create-quiz.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './Components/login/login.component'; 
@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    NavBarComponent,
    Welcome2PageComponent,
    ChooseRoleComponent,
    StudentRegisterFormComponent,
    TeacherRegisterFormComponent,
    TeacherToolsComponent,
    CreateClasesComponent,
    CreateQuizComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
