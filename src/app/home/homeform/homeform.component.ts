import { Component, OnInit } from '@angular/core';
import { ProjectService, Projects } from 'src/app/project.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'crowdo-homeform',
  templateUrl: './homeform.component.html',
  styleUrls: ['./homeform.component.scss']
})
export class HomeformComponent implements OnInit {
  projects: Array<Projects>;
  constructor(private projectService: ProjectService, private router: Router) {
  }

  ngOnInit() {
    this.projectService.showProjects().subscribe((data) => { this.projects = data });
  }

  goToProjectDetails(id: number) {
    this.router.navigate(['/projects', id])
  }

}
