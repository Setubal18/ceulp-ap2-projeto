import { Component, OnInit } from '@angular/core';
import { UsersManagerService } from '../shared/services/users-manager.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.styl']
})
export class DashboardComponent implements OnInit {
  public listUsers = []

  constructor(private usersManagerService:UsersManagerService) { }

  ngOnInit(): void {
    this.listUsers = this.usersManagerService.getLocalStorageItem()

  }

  public userCadastroEvent(event){
    this.listUsers = event
  }

}
