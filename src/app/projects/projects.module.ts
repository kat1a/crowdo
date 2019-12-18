import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateprojectComponent } from './createproject/createproject.component';
import { EditprojectComponent } from './editproject/editproject.component';
import { ViewprojectComponent } from './viewproject/viewproject.component';
import { Route, RouterModule } from '@angular/router';
import { ViewprojectsofuserComponent } from './viewprojectsofuser/viewprojectsofuser.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FundedProjectsComponent } from './funded-projects/funded-projects.component';

const routes: Route[]  = [
  
  {path: 'projects/:id', component:ViewprojectComponent},
  {path: 'user/projects', component:ViewprojectsofuserComponent},
  {path: 'edit/project/:id',component:EditprojectComponent},
  {path: 'project/new',component:CreateprojectComponent},
  {path: 'funded-projects',component:FundedProjectsComponent}
 
]

@NgModule({
  declarations: [CreateprojectComponent, EditprojectComponent, ViewprojectComponent, ViewprojectsofuserComponent, FundedProjectsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class ProjectsModule { }
