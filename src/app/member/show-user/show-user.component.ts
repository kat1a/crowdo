import { Component, OnInit } from '@angular/core';
import { Members, RegisterformService } from 'src/app/registerform.service';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'crowdo-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.scss']
})
export class ShowUserComponent implements OnInit {
  member: Members;
  constructor(private registerform: RegisterformService, private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    const memberId = localStorage.getItem('memberId');
    this.registerform.getUser(Number(memberId)).subscribe((data) => { this.member = data });
  }
  editUser() {
    const memberId = localStorage.getItem('memberId');
    this.router.navigate(['/edit/member', Number(memberId)])
  }
  showProject() {
    const memberId = localStorage.getItem('memberId');
    this.projectService.getUsersProjects(Number(memberId)).subscribe((i => this.router.navigate(['user/projects'])));
  }
  showFundings() {
    const memberId = localStorage.getItem('memberId');
    this.projectService.getFundedProjects(Number(memberId)).subscribe((i => this.router.navigate(['funded-projects'])));
  }
}
