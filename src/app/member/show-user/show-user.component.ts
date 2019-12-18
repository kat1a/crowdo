import { Component, OnInit } from '@angular/core';
import { Members, RegisterformService } from 'src/app/registerform.service';
import { Router } from '@angular/router';

@Component({
  selector: 'crowdo-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.scss']
})
export class ShowUserComponent implements OnInit {
  member: Members;
  constructor(private registerform: RegisterformService, private router: Router) { }

  ngOnInit() {
    const memberId = localStorage.getItem('memberId');
    this.registerform.getUser(Number(memberId)).subscribe((data) => { this.member = data });
  }
  editUser(){
    const memberId = localStorage.getItem('memberId');
    this.router.navigate(['/edit/member', Number(memberId)])
  }
}
