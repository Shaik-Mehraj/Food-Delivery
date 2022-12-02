import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject ,Observable, tap} from 'rxjs';
import { USER_LOGIN_URL } from '../constants/urls';
import { IUserLogin } from '../models/IUserLogin';
import { user } from '../models/user';

const USER_KEY = 'User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
   private userSubject =
  new BehaviorSubject<user>(this.getUserFromLocalStorage());
  public userObservable:Observable<user>;

  constructor(private http:HttpClient) {
    this.userObservable = this.userSubject.asObservable();
   }

  login(userLogin:IUserLogin):Observable<user>{
    return this.http.post<user>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) =>{
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
        },
        error: (errorResponse) => {

        }
      })
    );
  }

  logout(){
    this.userSubject.next(new user());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  }

  private setUserToLocalStorage(user:user){
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage():user{
    const userJson = localStorage.getItem(USER_KEY);
    if(userJson) return JSON.parse(userJson) as user;
    return new user();
  }
}
