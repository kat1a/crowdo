import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeformComponent } from './homeform/homeform.component';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

const routes: Route[]  = [
  
  {path: 'home', component: HomeformComponent}

]

@NgModule({
  declarations: [HomeformComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class HomeModule { }
