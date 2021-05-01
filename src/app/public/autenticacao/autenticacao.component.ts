import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.styl']
})
export class AutenticacaoComponent implements OnInit {

  public loginForm = new FormGroup({});
  public resp: any;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.loginForm = this.fb.group({
      login: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required)
    });
  }

  isPass(){
    if (this.loginForm.value.pass === '123456'){
      this.resp = {
        message: 'Voce logou !',
        status: 200
      };
    }
    else{
      this.resp = {
        message: 'Senha errada, Tente 123456',
        status:  400
      };
    }
  }

  entrar(){
    this.isPass();
    if (this.resp.status === 200){
      this.router.navigate(['./dashboard']);
    }
  }

}
