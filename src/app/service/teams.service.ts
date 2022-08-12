import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, pipe, throwError } from 'rxjs';
import { Teams } from '../teams';


@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  teams:Teams | undefined
  constructor(private httpClient:HttpClient) { }
  private baseUrl = "http://localhost:8080/TeamsAPI/";

  public createTeams(teams:Teams):Observable<Teams> {
    return this.httpClient.post<Teams>(`${this.baseUrl}AddTeams`, teams);
    pipe(catchError(this.handleError));
  }
  public updateTeams(teams:Teams):Observable<Teams> {
    return this.httpClient.put<Teams>(`${this.baseUrl}ModifyTeams`, teams);
    pipe(catchError(this.handleError));
  }

  
  public deleteTeams(id:number):Observable<Teams> {
    return this.httpClient.delete<Teams>(`${this.baseUrl}Removeteams/` +id);
    pipe(catchError(this.handleError));
  }

  public getTeams():Observable<Teams[]> {
    return this.httpClient.get<Teams[]>(`${this.baseUrl}getTeams` );
    pipe(catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
     // A client-side or network error occurred. Handle it accordingly.
     console.error('An error occurred:', error.error);
   } else {
     // The backend returned an unsuccessful response code.
     // The response body may contain clues as to what went wrong.
     console.error(
       `Backend returned code ${error.status}, body was: `, error.error);
   }
   // Return an observable with a user-facing error message.
   return throwError(() => new Error('Something bad happened; please try again later.'));
 }
}
