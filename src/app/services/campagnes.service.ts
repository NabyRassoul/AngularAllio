import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CampagnesService {

  constructor(private http: HttpClient) { }

  createCampagne(data:any){
     return this.http.post<any>(`${environment.apiUrl}/campagnes/`,data).pipe(
      map(
          response => {
          console.log('reponse http',response)
          return response;
        }
    ))
  }

  getCampagneById(id:any){
     return this.http.get<any>(`${environment.apiUrl}/campagnes/`+id).pipe(
      map(
        response => {
          console.log('service response',response);
          return response;
        }))
  }

  getAllCampagnes(){
    return this.http.get<any>(`${environment.apiUrl}/campagnes/`).pipe(
      map(
        response => {
          console.log('service response',response);
          return response;
        }))
  }
}
