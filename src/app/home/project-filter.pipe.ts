import { Pipe, PipeTransform } from '@angular/core';
import { Projects } from '../project.service';


@Pipe({
  name: 'projectFilter'
})
export class ProjectFilterPipe implements PipeTransform {

  transform(projects: Array<Projects>,searchTerm:string): Array<Projects> {
    if(!projects || !searchTerm){
      return projects;
    }
    return projects.filter(project=>
      project.title.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1);
    
  }

}
