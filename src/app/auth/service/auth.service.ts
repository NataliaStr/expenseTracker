import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export const TOKEN = 'token'
export const AUTHENTICATED_USER= 'authenticatedUser'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthToken(){
    if(this.getAuthenticatedUser()){
      return sessionStorage.getItem(TOKEN)
    }
    return null
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }

  authorize(username: string, password: string){
    sessionStorage.setItem(AUTHENTICATED_USER, username);
    sessionStorage.setItem(TOKEN, `Bearer ${password}`)
    console.log(username + ' logged in')
  }

  logout(username: string | null){
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
    console.log(username + ' logged out')
  }
}

export class AuthBean{
  constructor(public token:string){}
}
