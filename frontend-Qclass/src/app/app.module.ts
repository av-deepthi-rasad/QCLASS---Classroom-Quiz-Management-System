import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './Pages/welcome-page/welcome-page.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { Welcome2PageComponent } from './Pages/welcome2-page/welcome2-page.component';
import { ChooseRoleComponent } from './Components/choose-role/choose-role.component';
import { StudentRegisterFormComponent } from './Components/student-register-form/student-register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    NavBarComponent,
    Welcome2PageComponent,
    ChooseRoleComponent,
    StudentRegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
