import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { AddStudentComponent } from './add-student/add-student.component';

const routes: Routes = [
  {
    path:'',
   component: HomeComponent,
   canActivate:[AuthGuard]
   },
   {
    path:'dashboard',
   component: DashboardComponent,
   canActivate:[AuthGuard,RoleGuard]
   },
   {
    path:'dashboard/add/dashboard',
   component: DashboardComponent,
   canActivate:[AuthGuard,RoleGuard]
   },
   {
    path:'dashboard/add',
   component: AddStudentComponent,
   canActivate:[AuthGuard,RoleGuard]
   },
   {
    path:'about',
   component: AboutComponent,
   canActivate:[AuthGuard]
   },
  {
    path:'register',
   component: RegisterComponent
   },
   {
    path:'login',
   component: LoginComponent
   },
   {
    path:'register/login',
   component: LoginComponent
   },
   {
    path:'login/register',
   component: RegisterComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
