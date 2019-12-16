import { Component, OnInit } from '@angular/core';
import { ProjectService, Projects } from 'src/app/project.service';

@Component({
  selector: 'crowdo-homeform',
  templateUrl: './homeform.component.html',
  styleUrls: ['./homeform.component.scss']
})
export class HomeformComponent implements OnInit {

  Arr = Array; //Array type captured in a variable
  num: number = 20;
  projects: Array<Projects>;
  searchTerm: string;

  constructor(private projectService: ProjectService) { }
  chunk(array, size) {
    const chunkProjects = [];
    let index = 0;
    while (index < array.length) {
      chunkProjects.push(array.slice(index, size + index));
      index += size;
    }
    return chunkProjects;
  }
  /*chunk(array, size) {
    let chunkProjects = [];
    chunkProjects = [];

    while (array.length) {
      chunkProjects.push(array.splice(0, size));

    }
    return chunkProjects;
  }
  chunk(array, size) {
    let chunkProjects = [];
    
    
    for (let i = 0; i < array.length; i++) {
      chunkProjects.push(array.splice(0, size));
    }

    return chunkProjects;
}*/
  ngOnInit() {
    // this.projectService.showProject().subscribe((data)=>{this.projects=data});

    this.projectService.showProject().subscribe((data) => { this.projects = this.chunk(data, 3) });

  }


}

