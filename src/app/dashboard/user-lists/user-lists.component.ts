import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { UsersManagerService } from '../../services/users-manager.service';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.styl'],
})
export class UserListsComponent implements OnInit {
  @Input() users!: any;
  public userList: any;
  public reloading = false
  constructor(private readonly usersManagerService: UsersManagerService) {}

  ngOnInit(): void {
    this.userList = this.usersManagerService.getLocalStorageItem();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.reloading = true
    this.userList = changes.users.currentValue;
    this.reloading = false
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }
}
