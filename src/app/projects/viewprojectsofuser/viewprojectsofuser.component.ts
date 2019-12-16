import { Component, OnInit } from '@angular/core';
import { Projects, ProjectService } from 'src/app/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'crowdo-viewprojectsofuser',
  templateUrl: './viewprojectsofuser.component.html',
  styleUrls: ['./viewprojectsofuser.component.scss']
})
export class ViewprojectsofuserComponent implements OnInit {
  projects: Array<Projects>;
  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    const memberId = localStorage.getItem('memberId');
    this.projectService.getUsersProjects(Number(memberId)).subscribe((data) => { this.projects = data });
  }
  goToProjectDetails(id: number) {
    this.router.navigate(['/projects', id])
  }
  editProject(id: number) {
    this.router.navigate(['/edit/project', id])
  }

}
