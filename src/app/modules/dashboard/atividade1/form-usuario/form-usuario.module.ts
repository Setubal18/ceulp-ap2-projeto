import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUsuarioComponent } from './form-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensagensErrosFormsDirective } from 'src/app/shared/directives/mensagens-erros-forms.directive';



@NgModule({
  declarations: [
    FormUsuarioComponent,
    MensagensErrosFormsDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    FormUsuarioComponent
  ]
})
export class FormUsuarioModule { }
