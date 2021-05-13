import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UsersManagerService } from '../../services/users-manager.service';
import { UserSubject } from '../../shared/subscribe/userSubscriber';
import { ListObservable } from '../../shared/observables/userList';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.styl'],
})
export class FormUsuarioComponent implements OnInit {
  public userForm: FormGroup;
  private userSubject: UserSubject = new UserSubject()
  // private listObservable: any
  //@Output() usersEvent = new EventEmitter()
  constructor(
    private fb:FormBuilder,
    private usersManagerService:UsersManagerService,
    ) {
      //this.userSubject =
      // this.listObservable = new ListObservable()
      // this.userSubject.addObservable(this.listObservable)
    }

  ngOnInit(): void {
    this.initForm()
    console.log('Ola',this.userSubject)
  }

  initForm(){
    this.userForm = this.fb.group({
      name: new FormControl('',Validators.required),
      birthday: new FormControl(0, [Validators.min(17),Validators.required]),
      email: new FormControl('',[Validators.email,Validators.required]),
      phone: new FormControl(''),
      sexo: new FormControl('Sexo'),
      job: new FormControl(''),
      id:new FormControl('')
    })
  }

  generateId(){
    this.userForm.controls.id.setValue(Math.random().toString())
  }

  save(){
    this.generateId()
    //this.userSubject.addUser(this.userForm.value)
    this.usersManagerService.setLocalStorageItem = this.userForm.value
    //this.usersEvent.emit(this.usersManagerService.getLocalStorageItem())
    this.ngOnInit()
  }

  get validSex(){
    return this.userForm.value.sexo !== 'Sexo' ? true : false
  }
}
