import { Component, OnInit } from '@angular/core';
import { UserManagerService } from '../../services/user-manager.service';
import { Router } from '@angular/router';
import * as faker from 'faker'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {
  public foto =''
  constructor(
    private router:Router,
    private userManagerService:UserManagerService) { }

  ngOnInit(): void {
    this.getFoto()
  }

  getFoto(){
    this.foto = faker.image.animals()
  }

  get userName(){
    return this.userManagerService.user.login
  }

  atividade1(){
    this.router.navigate(['/dashboard/atividade1'])
  }

  secret(){
    this.router.navigate(['/dashboard/secret'])
  }

  config(){
    this.router.navigate(['/404'])
  }

  sair(){
    this.userManagerService.limpar()
    this.router.navigate(['/public/autenticacao'])
  }
}
