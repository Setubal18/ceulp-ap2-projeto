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
      name: new FormControl('Leonardo'),
      birthday: new FormControl(Date),
      email: new FormControl('user@email'),
      phone: new FormControl('63984185515'),
      sexo: new FormControl('Sexo'),
      address: new FormControl('207 sul alameda 8 lote 34'),
      id:new FormControl('')
    })
  }

  generateId(){
    this.userForm.controls.id.setValue(Math.random().toString())
  }

  save(){
    console.log(this.userForm.controls)
    this.generateId()
    this.usersManagerService.setLocalStorageItem = this.userForm.value
    console.log(this.usersManagerService.getLocalStorageItem())
    this.usersEvent.emit(this.usersManagerService.getLocalStorageItem())
  }
}
