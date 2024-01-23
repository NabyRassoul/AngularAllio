import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserToken } from '../models/user-token';
import { Partner } from '../models/partner';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ProspectusService implements OnInit {

  private httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

  private tokenSubject: BehaviorSubject<UserToken>;
  private token : Observable<UserToken>;
  private currentPartnerSubject: BehaviorSubject<Partner | null>;
  public currentUser: Observable<Partner | null>;
  userLoggedIn: any;

  constructor(private http:HttpClient, private cookieService: CookieService) {
    this.currentPartnerSubject = new BehaviorSubject<Partner | null>(
      JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentPartnerSubject.asObservable();
    this.tokenSubject = new BehaviorSubject<UserToken>(JSON.parse(localStorage.getItem('user-token')));
    this.token = this.tokenSubject.asObservable();
    let csrf = this.cookieService.get("csrftoken");
      if (typeof(csrf) === 'undefined') {
        csrf = '';
      }
      this.httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json','X-CSRFToken': csrf}),
      };
   }

   ngOnInit() {
   }

   createProspectus(data:any){
    return this.http.post<any>(`${environment.apiUrl}/articles/`,data).pipe(
      map(
          response => {
          return response;
        }
    ))
  }

  getAllProspectus(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-CSRFToken': 'O5dfcE1d8NfQPR9GvaEF2sdMvJJ5L1FngMYwhBnqOSSfEqKmovKtC9PEzjxAo4eK',  // Replace with actual CSRF token
    });
    return this.http.get<any>(`${environment.apiUrl}/articles/`, { withCredentials: true }).pipe(
      map(
        (response) => {
          console.log('prospects', response)
          return response;
        },
        (error) => {
            console.error('Erreur lors de la récupération des données :', error);
          }
        ))
   }

   getBonById(id:any){
    return this.http.get<any>(`${environment.apiUrl}/articles/`+id).pipe(
      map(
        response => {
          console.log('service response',response);
          return response;
        }))
   }

   deleteProspectusById(id:any){
    return this.http.delete<any>(`${environment.apiUrl}/articles/`+id).pipe(
      map(
        response => {
          console.log('service response',response);
          return response;
        }))
   }


}
