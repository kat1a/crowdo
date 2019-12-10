import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterformComponent } from './registerform/registerform.component';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Route[]  = [
  {
    path: 'register', component: RegisterformComponent
  }
]

@NgModule({
  declarations: [RegisterformComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class RegisterModule { }
