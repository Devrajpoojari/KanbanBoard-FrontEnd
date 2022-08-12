import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserservService {

  constructor(private http:HttpClient,private router:Router) { }

  baseUrl=""
}
