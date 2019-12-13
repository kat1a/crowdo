import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateprojectComponent } from './createproject/createproject.component';
import { EditprojectComponent } from './editproject/editproject.component';
import { DeleteprojectComponent } from './deleteproject/deleteproject.component';
import { ViewprojectComponent } from './viewproject/viewproject.component';



@NgModule({
  declarations: [CreateprojectComponent, EditprojectComponent, DeleteprojectComponent, ViewprojectComponent],
  imports: [
    CommonModule
  ]
})
export class ProjectsModule { }
