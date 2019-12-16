import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeformComponent } from './homeform/homeform.component';
import { Route, RouterModule } from '@angular/router';
import { ProjectFilterPipe } from './project-filter.pipe';
import { FormsModule } from '@angular/forms';



const routes: Route[]  = [
  
  {path: 'home', component: HomeformComponent}

]

@NgModule({
  declarations: [HomeformComponent, ProjectFilterPipe],
  imports: [
    CommonModule,
    FormsModule,
    
    
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class HomeModule { }
