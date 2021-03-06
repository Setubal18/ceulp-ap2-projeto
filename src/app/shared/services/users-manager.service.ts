import { Injectable } from '@angular/core';
import * as LogRocket from 'logrocket';

interface Iuser {
  name: string
  birthday: string
  email: string
  phone: string
  sexo: string,
  job: string,
  id: string
}

interface Iusers {
  users: []
}

@Injectable({
  providedIn: 'root'
})
export class UsersManagerService {

  constructor() { }
  private _users: any
  set setLocalStorageItem(user: Iuser){
    let users = JSON.parse(localStorage.getItem('users'))
    if(users != null){
      users.push(user)

      localStorage.setItem('users',JSON.stringify(users))
    }
    else{
      users = []
      users.push(user)
      localStorage.setItem('users',JSON.stringify(users))
    }
  }

  getLocalStorageItem(){
    LogRocket.info(localStorage.getItem('users'))
    return JSON.parse(localStorage.getItem('users'))
  }

}
