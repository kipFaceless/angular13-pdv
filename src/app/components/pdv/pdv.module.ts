import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdvRoutingModule } from './pdv-routing.module';
import { PdvComponent } from './pdv.component';
import {MatTableModule} from '@angular/material/table';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    PdvComponent
  ],
  imports: [
    CommonModule,
    PdvRoutingModule,
    MatTableModule,

    CommonModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class PdvModule { }
