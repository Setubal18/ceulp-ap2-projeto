import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.styl']
})
export class SecretComponent implements OnInit {

  private array = []
  constructor() { }

  ngOnInit(): void {
    this.iniciandoAlgo()
    this.percorreArray()
  }

  iniciandoAlgo(){
    throw new Error("Algo deu errado")
  }


  percorreArray(){
    console.log(`1`)
    this.array.forEach((item)=>{
      console.log(item)
    })
  }

}
