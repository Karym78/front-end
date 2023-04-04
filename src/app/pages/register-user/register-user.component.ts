import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent{
  
  registerForm:any = FormGroup; 
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
     // stop here if form is invalid
  if (this.registerForm.invalid) {
    return;
}
//True if all the fields are filled
if(this.submitted)
{
  alert("Great!!");
}
  }
}
