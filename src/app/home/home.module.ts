import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeformComponent } from './homeform/homeform.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[]  = [
  
  {path: 'home', component: HomeformComponent}

]

@NgModule({
  declarations: [HomeformComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class HomeModule { }
