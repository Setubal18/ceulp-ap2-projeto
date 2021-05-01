import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.styl']
})
export class UserListsComponent implements OnInit {
  @Input() users:any
  public userList:any
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(typeof changes.users)
    if(changes.users)
    this.userList = changes.users
    this.userList = JSON.parse(this.userList)
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }

}
