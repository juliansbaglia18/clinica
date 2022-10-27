import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CompletePatientComponent } from './components/register/complete-register/complete-patient/complete-patient.component';
import { CompleteRegisterComponent } from './components/register/complete-register/complete-register.component';
import { CompleteSpecialistComponent } from './components/register/complete-register/complete-specialist/complete-specialist.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'register/complete', component:CompleteRegisterComponent},
  {path: 'register/complete/patient', component:CompletePatientComponent},
  {path: 'register/complete/specialist', component:CompleteSpecialistComponent},
  {path: 'about-me', component:AboutMeComponent},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
