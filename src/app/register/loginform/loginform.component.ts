import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterformService, Members } from 'src/app/registerform.service';
import { Router } from '@angular/router';


@Component({
  selector: 'crowdo-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {
  
    loginForm: FormGroup;
    loading = false;
    submitted = false;

  constructor(private formBuilder: FormBuilder,private registerform: RegisterformService,private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    //this.alertService.clear();

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    this.registerform.login(this.loginForm.value).subscribe((i=>this.router.navigate(['home'])));
  }
}
