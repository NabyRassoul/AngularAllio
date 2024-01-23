import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpXsrfTokenExtractor} from "@angular/common/http";
import { environment } from 'src/environments/environment';
import {BehaviorSubject, Observable, map} from "rxjs";
import { UserToken } from '../models/user-token';
import { Partner } from '../models/partner';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  private tokenSubject: BehaviorSubject<UserToken>;
  private token : Observable<UserToken>;
  private currentPartnerSubject: BehaviorSubject<Partner | null>;
  public currentUser: Observable<Partner | null>;
  userLoggedIn: any;
  private tokenPasswordSubject: BehaviorSubject<UserToken>;



  constructor(private httpClient: HttpClient, private router: Router, private tokenExtractor: HttpXsrfTokenExtractor) {
    this.currentPartnerSubject = new BehaviorSubject<Partner | null>(
      JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentPartnerSubject.asObservable();
    this.tokenSubject = new BehaviorSubject<UserToken>(JSON.parse(localStorage.getItem('user-token')));
    this.tokenPasswordSubject = new BehaviorSubject<UserToken>(JSON.parse(localStorage.getItem('userPassword-token')));
    this.token = this.tokenSubject.asObservable();
   }

  ngOnInit() {
  }

  registerPartner(data: any){
   return this.httpClient.post<any>(`${environment.apiUrl}/partenaires`,data).pipe(
      map(
        response => {
          console.log('response ',response);
          return response;
        }
      )
    )
  }

  loginPartner(email: string, password: string){
   return this.httpClient.post<any>(`${environment.apiUrl}/login/`,{ email, password }).pipe(
      map(
        response => {
          const userToken: UserToken = response.token.token;
          // const xsrfToken: string = response.headers.get('X-CSRFToken');
          console.log('Http Response', userToken);
          console.log('headers', response.headers )

          if (response) {
            localStorage.setItem('user-token', JSON.stringify(userToken));
            localStorage.setItem('currentUser', JSON.stringify(response));
            this.tokenSubject.next(userToken);
          }
         this.userLoggedIn = response;
          return response;
        }
      )
    )
  }

  public get tokenVal(): UserToken {
    return this.tokenSubject.value;
  }

  public get firstName(): string {
    return this.currentPartnerSubject.value.firstName ;
  }

  public get lastName(): string {
    return this.currentPartnerSubject.value.lastName ;
  }

  public getUserName(): string {
    return this.firstName + ' ' + this.lastName  ;
  }


  logout() {
    this.httpClient.get(`${environment.apiUrl}/logout/`).pipe(
      map(response => {
        console.log(response);
      })
    );
    localStorage.removeItem('user-token');
    this.router.navigate(['/auth/login']);
    this.tokenSubject.next(null);
    window.location.reload();
  }

}
