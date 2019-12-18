import { Component, OnInit } from '@angular/core';
import { ProjectService, Projects } from 'src/app/project.service';
import { Router } from '@angular/router';
import { Funding } from 'src/app/fundings.service';

@Component({
  selector: 'crowdo-funded-projects',
  templateUrl: './funded-projects.component.html',
  styleUrls: ['./funded-projects.component.scss']
})
export class FundedProjectsComponent implements OnInit {
  fundings: Array<Funding>;
  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    const memberId = localStorage.getItem('memberId');
    this.projectService.getFundedProjects(Number(memberId)).subscribe((data) => { this.fundings = data });
  }
  goToProjectDetails(id: number) {
    this.router.navigate(['/projects', id])
  }

}
