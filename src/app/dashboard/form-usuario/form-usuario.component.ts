import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UsersManagerService } from '../../services/users-manager.service';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.styl'],
})
export class FormUsuarioComponent implements OnInit {
  public userForm: FormGroup;
  @Output() usersEvent = new EventEmitter()
  constructor(
    private fb:FormBuilder,
    private usersManagerService:UsersManagerService

    ) {}

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.userForm = this.fb.group({
      name: new FormControl(''),
      birthday: new FormControl(Date),
      email: new FormControl(''),
      phone: new FormControl(''),
      sexo: new FormControl(''),
      address: new FormControl(''),
      id:new FormControl('')
    })
  }

  generateId(){
    this.userForm.controls.id.setValue(Math.random().toString())
  }

  save(){
    this.generateId()
    this.usersManagerService.setLocalStorageItem = this.userForm.value
    console.log(this.usersManagerService.getLocalStorageItem())
    this.usersEvent.emit(this.usersManagerService.getLocalStorageItem())
  }
}
