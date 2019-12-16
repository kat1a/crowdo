import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterformService } from 'src/app/registerform.service';
import { Router } from '@angular/router';

@Component({
  selector: 'crowdo-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.scss']
})
export class RegisterformComponent implements OnInit {
  signUpForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private registerform: RegisterformService,private router:Router) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  // convenience getter for easy access to form fields
  get f() { return this.signUpForm.controls; }

  onSubmit() {
      this.submitted = true;
      
      // stop here if form is invalid
      if (this.signUpForm.invalid) {
          return;
      }
      this.registerform.createMember(this.signUpForm.value).subscribe((i=>this.router.navigate(['home'])));
      //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signUpForm.value))
  }

}
