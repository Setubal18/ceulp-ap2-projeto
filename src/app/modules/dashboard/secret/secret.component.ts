import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.styl']
})
export class SecretComponent implements OnInit {

  private array
  private objeto: any
  constructor() { }

  ngOnInit(): void {
    this.iniciandoAlgo()
    this.percorreArray()
  }

  iniciandoAlgo(){
    throw new Error("Algo deu errado")
  }


  percorreArray(){
    var numero = 3.14
    console.log(numero.toPrecision(0));
    Math.max(2, 42,);
    console.log(this.objeto.nome)
    this.array.pop()
    this.array.forEach((item)=>{
      console.log(item)
    })
  }

  fazAlgo(event){
    console.log(event)
  }

}
