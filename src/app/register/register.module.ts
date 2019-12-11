import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterformComponent } from './registerform/registerform.component';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginformComponent } from './loginform/loginform.component';

const routes: Route[]  = [
  
    {path: 'register', component: RegisterformComponent},
    {path: 'login', component: LoginformComponent}
  
]

@NgModule({
  declarations: [RegisterformComponent, LoginformComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class RegisterModule { }
