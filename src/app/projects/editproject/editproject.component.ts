import { Component, OnInit } from '@angular/core';
import { Projects, ProjectService } from 'src/app/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'crowdo-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.scss']
})
export class EditprojectComponent implements OnInit {

  constructor(private projectService: ProjectService, private activatedRoute: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { }
  editProjectForm: FormGroup;
  project: Projects;
  ngOnInit() {
    this.editProjectForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      startDate: ['', [Validators.required]],
      endDate: ['', Validators.required]
    });
    const id = this.activatedRoute.snapshot.params['id']
    this.projectService.getProjectById(id).subscribe(data => { 
      this.editProjectForm.patchValue(
        {
          title: data.title, description: data.description,
          category: data.category, startDate: data.startDate,
          endDate: data.endDate
        })
    });
  }
  onSubmit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.projectService.editProject(id, this.editProjectForm.value).subscribe((i => this.router.navigate(['/user/projects'])));
  }

}
