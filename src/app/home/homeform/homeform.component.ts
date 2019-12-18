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

  Arr = Array; //Array type captured in a variable
  num: number = 20;
  projects: any;
  allProjects: Array<Projects>;
  searchTerm: string;
  activeIndex = 0;

  constructor(private projectService: ProjectService, private router: Router) { }

  chunk(array, size) {
    const chunkProjects = [];
    let index = 0;
    while (index < array.length) {
      chunkProjects.push(array.slice(index, size + index));
      index += size;
    }
    return chunkProjects;
  }
  
  ngOnInit() {
    // this.projectService.showProject().subscribe((data)=>{this.projects=data});

    this.projectService.showProjects().subscribe((data) => { 
      this.allProjects = data;
      this.projects = this.chunk(data, 3) 
    });

  }

  filterProjects() {
    const regExp = new RegExp(this.searchTerm, 'ig')
    const filteredProjects = this.allProjects.filter(it => {
      return it.title.search(regExp) >= 0
    });
    this.projects = this.chunk(filteredProjects, 3) 
  }
  goToProjectDetails(id: number) {
    this.router.navigate(['/projects', id])
  }
  nextItems() {
    this.activeIndex++;
  }

  previousItems() {
    this.activeIndex--;
  }


}

