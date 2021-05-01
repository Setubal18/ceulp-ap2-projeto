import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListsComponent } from './user-lists.component';



@NgModule({
  declarations: [
    UserListsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UserListsComponent
  ]
})
export class UserListsModule { }
