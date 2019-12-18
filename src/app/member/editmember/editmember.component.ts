import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Members, RegisterformService } from 'src/app/registerform.service';
import { Router } from '@angular/router';

@Component({
  selector: 'crowdo-editmember',
  templateUrl: './editmember.component.html',
  styleUrls: ['./editmember.component.scss']
})
export class EditmemberComponent implements OnInit {
  editForm: FormGroup;
  submitted = false;
  member: Members;
  constructor(private formBuilder: FormBuilder, private registerform: RegisterformService, private router: Router) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    const memberId = localStorage.getItem('memberId');
    this.registerform.getUser(Number(memberId)).subscribe((data) => {
      this.editForm.patchValue(
        {
          firstName: data.firstName, lastName: data.lastName,
          username: data.username, password: data.password,
          email: data.email, address: data.address
        })
    });
  }
  get f() { return this.editForm.controls; }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.editForm.invalid) {
      return;
    }
    const memberId = localStorage.getItem('memberId');
    this.registerform.editUser(Number(memberId), this.editForm.value).subscribe((i => this.router.navigate(['member'])));
  }
}
