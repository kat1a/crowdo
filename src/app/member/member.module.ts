import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditmemberComponent } from './editmember/editmember.component';
import { ShowUserComponent } from './show-user/show-user.component';



@NgModule({
  declarations: [EditmemberComponent, ShowUserComponent],
  imports: [
    CommonModule
  ]
})
export class MemberModule { }
