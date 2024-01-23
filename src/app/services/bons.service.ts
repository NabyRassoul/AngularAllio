import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BonsService {

  constructor(private readonly http: HttpClient) {

   }

   createBon(data:any){
    return this.http.post<any>(`${environment.apiUrl}/bon/`,data).pipe(
      map(
          response => {
          return response;
        }
    ))
   }
   getAllBons(){
    return this.http.get<any>(`${environment.apiUrl}/bon/`).pipe(
      map(
        response => {
          return response;
        }))
   }

   getBonById(id:any){
    return this.http.get<any>(`${environment.apiUrl}/bon/`+id).pipe(
      map(
        response => {
          console.log('service response',response);
          return response;
        }))
   }
}
