import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.styl']
})
export class DashboardComponent implements OnInit {
  public listUsers = []
  countF: number;
  countM: number;
  countO: number;
  countN:number;

  constructor() { }

  ngOnInit(): void {
  }

  public userCadastroEvent(event){
    console.log(event)
    this.listUsers = event
  }

  count(){
    return
    this.listUsers.map(user => {
      if(user.sexo === "F"){
        this.countF +=1;
      }
      else if (user.sexo === "M"){
        this.countM +=1;
      }
      else if (user.sexo === "O"){
        this.countO +=1;
      }
      else {
        this.countN +=1;
      }
    })
  }
}
