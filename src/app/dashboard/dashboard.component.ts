import { Component, OnInit } from '@angular/core';
import { UsersManagerService } from '../services/users-manager.service';
import { ListObservable } from '../shared/observables/userList';
import { UserSubject } from '../shared/subscribe/userSubscriber';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.styl']
})
export class DashboardComponent implements OnInit {
  public listUsers = []
  private userSubject : any
  private listObservable: any
  constructor(private usersManagerService:UsersManagerService) {
    this.listUsers = this.usersManagerService.getLocalStorageItem()
    this.userSubject =  new UserSubject()
    this.listObservable = new ListObservable()
    this.userSubject.addObservable(this.listObservable)
    this.userSubject.addUsers(this.listUsers)
  }

  ngOnInit(): void {

  }

  public userCadastroEvent(event){
    this.listUsers = event
  }

}
