import { Component, OnInit } from '@angular/core';
import { ProjectService, Projects } from 'src/app/project.service';

@Component({
  selector: 'crowdo-homeform',
  templateUrl: './homeform.component.html',
  styleUrls: ['./homeform.component.scss']
})
export class HomeformComponent implements OnInit {
  Arr = Array; //Array type captured in a variable
  num:number = 20;
  projects: Array<Projects>;
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.showProject().subscribe((data)=>{this.projects=data});
  }

}
