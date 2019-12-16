import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/register/confirmpass/must-match.validator';
import { Members } from 'src/app/registerform.service';

@Component({
  selector: 'crowdo-editmember',
  templateUrl: './editmember.component.html',
  styleUrls: ['./editmember.component.scss']
})
export class EditmemberComponent implements OnInit {
  editForm: FormGroup;
  submitted = false;
  member : Members;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      firstName: ['', Validators.required,Validators.pattern('^[a-zA-Z]+$')],
      lastName: ['', Validators.required,Validators.pattern('^[a-zA-Z]+$')],
      address: ['', Validators.required,Validators.pattern('^[a-zA-Z]+$')],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
  },{
    validator: MustMatch('password', 'confirmPassword')
});
}
get f() { return this.editForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.editForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.editForm.value))
  }
}
