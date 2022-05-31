import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
//import { ProfileComponent } from './..//profile/profile.component';
import {MatDialogModule} from '@angular/material/dialog';
import { getStorage, provideStorage } from '@angular/fire/storage';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CommonModule,
   // RouterModule.forChild(routes),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatMenuModule,
    MatDialogModule,
    provideStorage(() => getStorage()),
  ],


})
export class DashboardModule { }
