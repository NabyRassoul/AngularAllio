import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {AbstractControl, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import { first } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: UntypedFormGroup;
  errorMessage:any;
  submitted = false;
  isRegisterFailed = false;
  errorPassword = false;
  errorMessagePassword: string;

  constructor(private authService: AuthService, private _router:Router, private formBuilder: UntypedFormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'firstName' : ['', Validators.required],
      'lastName' : ['', Validators.required],
      'phone' : ['', Validators.required],
      'adresse' : ['', Validators.required],
      'email' : ['', Validators.required],
      'name' : [''],
      'groupe' : [''],
      'sousGroupe' : [''],
      'contactRef' : ['',],
      'ninea' : ['', Validators.required],
      'password' : ['', Validators.required],
      'password_confirmation' : ['', Validators.required],

    })
  }
  getErrorMessage(control: AbstractControl): string {
    if (!control || control.valid) {
      return '';
    }
    // Required always comes first
    if (control.hasError('required')) {
      return "Cannot be empty";
    }
    if (control.hasError('password')) {
      return "Must be a valid password";
    }
    if (control.hasError("password_confirmation")) {
      return "Must be a valid password confirmation";
    }
  }

  get password(): AbstractControl {
    return this.registerForm.get('password');
  }
  get password_conf(): AbstractControl {
    return this.registerForm.get('password_confirmation');
  }

 get errorPasswordMesssage(){
    this.errorMessagePassword = "Les mots de passe ne correspondent pas !";
    return this.errorMessagePassword;
  }
  register(){
    console.log(this.registerForm.value)
    this.submitted = true;
    this.authService.registerPartner(this.registerForm.value).pipe(first()).
    subscribe({
      next: (response:any) => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Inscription réussie, votre compte est en cours d\'activation !',
          timer: 5000
        });
        console.log('user', response);
        this._router.navigateByUrl('/login');
        },
        error: (err) => {
          this.isRegisterFailed = true;
          this.errorMessage = err.error.email;
          console.error(err);
        }
    })
  }

}
