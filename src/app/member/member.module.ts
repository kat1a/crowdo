import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditmemberComponent } from './editmember/editmember.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Route[]  = [
  
  {path: 'member', component: ShowUserComponent}

]

@NgModule({
  declarations: [EditmemberComponent, ShowUserComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class MemberModule { }
