import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { baseurl } from 'src/environments/environment.prod';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import { User } from './models/user';

// import 'rxjs/add/operator/map';
import { BehaviorSubject, Subject, Observable, of, map } from 'rxjs';
// import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  oldUserId:any;
  redirectUrl!: string;

//  usersUrl: 'https://bookcart.azurewebsites.net/api/login';
  

  user: any;
  constructor(private http: HttpClient,private router: Router) { }

  login(username: string, password: string):Observable<any> {
    return this.http.post(`${baseurl}api/login`, {username: username, password: password}).pipe(
      map((response: any) => {
        if (response && response.token) {
          localStorage.setItem('currentUser', JSON.stringify(response));
             // console.log(response.token,"token")
          // this.oldUserId = localStorage.getItem('userId');
          // localStorage.setItem('authToken', response.token);
        // const user = response;
        // console.log('response',"-->");
        }
        // return response;

        // }
      })
    )
  }
  isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      // this.router.navigate(['/bookcart'])
      return true;
    }
    return false;
  }
  getAuthorizationToken() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')|| "{}");
    return currentUser.token;
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
  // logout() {
  //   localStorage.clear();
  //   localStorage.removeItem('token');

  // //   this.resetSubscription();
  // //   this.setTempUserId();
  // }
}
