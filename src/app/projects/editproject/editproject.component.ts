import { Component, OnInit } from '@angular/core';
import { Projects, ProjectService } from 'src/app/project.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'crowdo-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.scss']
})
export class EditprojectComponent implements OnInit {

  constructor(private projectService:ProjectService, private activatedRoute: ActivatedRoute, private router:Router) { }
  project:Projects;
  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id']
    this.projectService.editProject(id,this.project).subscribe(data => this.project=data)
    this.router.navigate(['user/projects']);
  }

}
