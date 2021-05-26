import { Component, OnInit } from '@angular/core';
import { UsersManagerService } from 'src/app/shared/services/users-manager.service';

@Component({
  selector: 'app-atividade1',
  templateUrl: './atividade1.component.html',
  styleUrls: ['./atividade1.component.styl']
})
export class Atividade1Component implements OnInit {
  public listUsers = []

  constructor(private usersManagerService:UsersManagerService) { }

  ngOnInit(): void {
    this.listUsers = this.usersManagerService.getLocalStorageItem()
    console.log('atividade 1')
  }

  public userCadastroEvent(event){
    this.listUsers = event
  }
}


