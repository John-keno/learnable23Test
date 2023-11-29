import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupLoginComponent } from './pages/signup-login/signup-login.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
