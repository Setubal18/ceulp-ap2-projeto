import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as LogRocket from 'logrocket';
import { UserManagerService } from '../../shared/services/user-manager.service';

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.styl']
})
export class AutenticacaoComponent implements OnInit {

  public loginForm = new FormGroup({});
  public resp: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userManagerService:UserManagerService,

    ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.loginForm = this.fb.group({
      login: new FormControl('', Validators.required),
      pass: new FormControl('', Validators.required),
      id: new FormControl('')
    });
  }

  isPass(){
    if (this.loginForm.value.pass === '123456'){
      this.resp = {
        message: 'Voce logou !',
        status: 200
      };
      LogRocket.info(this.resp)
    }
    else{
      this.resp = {
        message: 'Senha errada, Tente 123456',
        status:  400
      };
      LogRocket.error(this.resp)
    }
  }


  entrar(){
    this.isPass();
    if (this.resp.status === 200){
      LogRocket.identify(this.loginForm.value.email)
      this.userManagerService.user = this.loginForm.value
      this.router.navigate(['./dashboard']);
    }
  }

}
