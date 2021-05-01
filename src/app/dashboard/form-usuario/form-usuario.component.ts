import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.styl'],
})
export class FormUsuarioComponent implements OnInit {
  public userForm: FormGroup;
  constructor(private fb:FormBuilder) {}

  ngOnInit(): void {}

  initForm(){
    this.userForm = this.fb.group({
      name: new FormControl('', Validators.required),
      birthday: new FormControl(Date,Validators.required),
      email: new FormControl('',Validators.required),
      phone: new FormControl(''),
      address: new FormControl(''),
      id:new FormControl('')
    })
  }
}
