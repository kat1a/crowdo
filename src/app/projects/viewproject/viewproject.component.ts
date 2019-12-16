import { Component, OnInit } from '@angular/core';
import { ProjectService, Projects } from 'src/app/project.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'crowdo-viewproject',
  templateUrl: './viewproject.component.html',
  styleUrls: ['./viewproject.component.scss']
})
export class ViewprojectComponent implements OnInit {
  d:string;
  project: Projects;
  constructor(private projectService:ProjectService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id']
    this.projectService.getProjectById(id).subscribe(data => this.project=data)
  }

}
