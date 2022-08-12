import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  PATH_OF_API = 'http://localhost:8080';

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService
  ) {}

  public login(loginData: any) {
    return this.httpclient.post(this.PATH_OF_API + '/authenticate', loginData, {
      headers: this.requestHeader,
    });
  }

  //add User
  public doRegister(user:User):Observable<User>{
    return this.httpclient.post<User>(this.PATH_OF_API +'/registerNewUser',user, {
      headers: this.requestHeader,
    });}

  //delete user
  // public deleteUser(userName:string):Observable<any>
  // {
  //   return this.httpclient.delete(`${this.PATH_OF_API}/deleteById/${userName}`);
  // }

  // public updateUser(userid):Observable<any>
  // {
  //   return this.httpclient.put(`${this.PATH_OF_API}/updateUserById/${userid}`{Response});
  // }

  // public getUsersList():Observable<User[]>
  // {
  //   return this.httpclient.get(`${this.PATH_OF_API}/getAllUsers`);
  // }

  public forUser() {
    return this.httpclient.get(this.PATH_OF_API + '/forUser', {
      responseType: 'text',
    });
  }


  public forAdmin() {
    return this.httpclient.get(this.PATH_OF_API + '/forAdmin', {
      responseType: 'text',
    });
  }

  public roleMatch(allowedRoles: string | any[]): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch ;
          } else {
            return isMatch;
          }
        }
      }
    }
    return isMatch;
  }
}
