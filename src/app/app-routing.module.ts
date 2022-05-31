
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { HomepageComponent } from './modules/public/components/homepage/homepage.component';
import {canActivate, redirectUnauthorizedTo, redirectLoggedInTo} from '@angular/fire/auth-guard'
import { LoginModule } from './public/auth/login/login.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';

const redirectToLogin = () => redirectUnauthorizedTo(['login'])
const redirectToHome = () => redirectLoggedInTo(['home'])


const routes: Routes = [

  {
    path : "",
    loadChildren : () => import("./public/auth/login/login.module").then(m=>m.LoginModule),
   // ...canActivate(redirectToHome)
  },


  {
    path : "",
    loadChildren : () => import("./public/auth/login/login.module").then(m=>m.LoginModule),
    //...canActivate(redirectToHome)
  },


  {
    path : '', component : DashboardComponent, children : [

  {


    path : "",
    loadChildren : () => import("./components/dashboard/dashboard.module").then(m=>m.DashboardModule)
  },

  {
    path : "home",
    loadChildren : () => import("./components/home/home.module").then(m=>m.HomeModule), component :  HomeComponent,
    //...canActivate(redirectToLogin)

  }


    ]
  },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],


exports: [RouterModule]
})
export class AppRoutingModule { }
