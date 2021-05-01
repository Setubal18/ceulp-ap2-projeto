import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUsuarioComponent } from './form-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    FormUsuarioComponent
  ]
})
export class FormUsuarioModule { }
