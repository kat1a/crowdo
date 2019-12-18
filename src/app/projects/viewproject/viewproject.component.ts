import { Component, OnInit } from '@angular/core';
import { ProjectService, Projects } from 'src/app/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Funding, FundingsService } from 'src/app/fundings.service';
import { PackageService, Package } from 'src/app/package.service';

@Component({
  selector: 'crowdo-viewproject',
  templateUrl: './viewproject.component.html',
  styleUrls: ['./viewproject.component.scss']
})
export class ViewprojectComponent implements OnInit {
  fundForm: FormGroup;
  project: Projects;
  packages: Array<Package>;
  funding: Funding;
  public show: boolean = false;
  constructor(private projectService: ProjectService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private fundingsService: FundingsService, private packageService: PackageService, private router:Router) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id']
    this.projectService.getProjectById(id).subscribe(data => this.project = data)
    this.fundForm = this.formBuilder.group({
      package: ['', Validators.required],
      number: ['', Validators.required]
    });
  }
  viewFund() {
    this.show = !this.show;
    this.packageService.getPackages().subscribe(data => this.packages = data);
  }
  fundAproject(){
    const memberId= localStorage.getItem('memberId');
    //this.funding.backer = Number(memberId);
    const id = this.activatedRoute.snapshot.params['id'];
    // this.funding.project = id;
    // this.funding.package = this.fundForm.get('packageName').value;
    // this.funding.numberReq = this.fundForm.get('numberReq').value;
    this.funding = {
      BackerId: Number(memberId), 
      ProjectId: id, 
      Package : this.fundForm.get('package').value,
      Number:this.fundForm.get('number').value}
    this.fundingsService.fundProject(this.funding).subscribe((data)=>this.funding=data);
    this.router.navigate(['home']);
  }

}
