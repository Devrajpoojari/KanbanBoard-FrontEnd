import { Injectable } from '@angular/core';
import { Tasks } from '../tasks';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks:Tasks;
  constructor(
    private httpClient:HttpClient
  ) { }
  private baseUrl="http://localhost:8080/KanbanApi/";

  public getTasksList():Observable<Tasks[]>{
    return this.httpClient.get<Tasks[]>(`${this.baseUrl}getTasks`);
  }
  public createTask(tasks:Tasks):Observable<Tasks>
  {
   return this.httpClient.post<Tasks>(`${this.baseUrl}addTask`,tasks);
  }
}
