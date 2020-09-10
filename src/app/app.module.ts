import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HelloComponent } from './hello.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { DialogComponent } from './dialog/dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';






@NgModule({
  imports:[ BrowserModule,BrowserAnimationsModule, FormsModule,ReactiveFormsModule,MatCardModule,MatButtonModule,MatGridListModule,MatDialogModule,MatToolbarModule,MatIconModule,MatFormFieldModule,MatInputModule ,MatDialogModule],

  declarations: [ AppComponent, DialogComponent, HelloComponent, EmployeeComponent, DepartmentComponent],
   entryComponents:[DialogComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
