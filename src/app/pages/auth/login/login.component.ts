import { Component, OnInit } from '@angular/core';
import {AbstractControl, UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : UntypedFormGroup;
  submitted: boolean;
  isLoginFailed: boolean;
  isLoggedIn = false;
  errorMessage: string;
  returnUrl : string;

  constructor(
    private _router:Router,
    private _formBuilder: UntypedFormBuilder,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
  ) {

  }
  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
    this.loginForm = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    console.log(this.returnUrl);
  }

   get f() {
    return this.loginForm.controls;
  }

  getErrorMessage(control: AbstractControl): string {
    if (!control || control.valid) {
      return '';
    }
    // Required always comes first
    if (control.hasError('required')) {
      return "Cannot be empty";
    }
    if (control.hasError('email')) {
      return "Must be a valid email";
    }
    if (control.hasError("password")) {
      return "Must be a valid password";
    }
  }

  get email(): AbstractControl {
    return this.loginForm.get('email');
  }
  get password(): AbstractControl {
    return this.loginForm.get('password');
  }

  login(){
    this.submitted = true;
    if (!this.loginForm.valid)
      return null;

    const payload = Object.assign({}, this.loginForm.value);
    console.log(payload)
    this.authService.loginPartner(payload?.email, payload?.password).pipe(first()).
      subscribe(
        {
          next: (response:any) => {
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Connexion réussie avec succès',
              timer: 1000
            });
            console.log('user', response);
            this._router.navigateByUrl('/home/dashboard');
            },
            error: (err) => {
              this.errorMessage = err.error.message;
              this.isLoginFailed = true;
              console.error(err);
            }
        }
      );
  }

}
