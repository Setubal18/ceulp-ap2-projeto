import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { UsersManagerService } from '../../services/users-manager.service';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.styl']
})
export class UserListsComponent implements OnInit {
  @Input() users:any
  public userList:any
  constructor(
    private readonly usersManagerService:UsersManagerService

    ) { }

  ngOnInit(): void {
    this.userList = this.usersManagerService.getLocalStorageItem()
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(typeof changes.users)
    if(changes.users){
      if(this.userList && this.userList.length > 0){
        this.userList = changes.users.currentValue
      }
    }
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }

}
