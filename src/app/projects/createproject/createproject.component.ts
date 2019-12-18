import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProjectService } from 'src/app/project.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'crowdo-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.scss']
})
export class CreateprojectComponent implements OnInit {
  createProjectForm: FormGroup;
  constructor(private projectService: ProjectService, private activatedRoute: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.createProjectForm= this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      startDate: ['', [Validators.required]],
      endDate: ['', Validators.required]
    });
  }
  
  onSubmit(){
    this.projectService.createProject(this.createProjectForm.value).subscribe((i=>this.router.navigate(['home'])));
  }

}
