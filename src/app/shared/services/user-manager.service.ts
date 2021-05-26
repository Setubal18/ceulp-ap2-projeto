import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserManagerService {

  set user(user:any){
    delete user.pass
    localStorage.setItem("user",JSON.stringify(user))
  }

  get user(){
    return JSON.parse(localStorage.getItem('user'))
  }

  limpar(){
    localStorage.removeItem('user')
  }
}
