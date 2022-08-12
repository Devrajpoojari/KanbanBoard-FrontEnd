import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, pipe, throwError } from 'rxjs';
import { Project } from 'src/app/project';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
     project:Project | undefined;

  constructor(private httpClient:HttpClient) { }

  private baseUrl = "http://localhost:8080/ProjectAPI/";

  public createProject(project:Project):Observable<Project> {
    return this.httpClient.post<Project>(`${this.baseUrl}AddProject`, project);
    //pipe(catchError(this.handleError));
  }

  public updateProject(project:Project):Observable<Project> {
    return this.httpClient.put<Project>(`${this.baseUrl}ModifyProject`, project);
    //pipe(catchError(this.handleError));
  }

  public deleteProject(id:number):Observable<Project> {
    return this.httpClient.delete<Project>(`${this.baseUrl}RemoveProject/` +id);
    //pipe(catchError(this.handleError));
  }

  public getProject():Observable<Project[]> {
    return this.httpClient.get<Project[]>(`${this.baseUrl}getProjects` );
    //pipe(catchError(this.handleError));
  }

  /* handleError(error: HttpErrorResponse) {
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



 } */
}
