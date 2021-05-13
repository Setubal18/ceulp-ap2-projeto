import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ListObservable } from 'src/app/shared/observables/userList';
import { UserSubject } from 'src/app/shared/subscribe/userSubscriber';
import { UsersManagerService } from '../../services/users-manager.service';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.styl'],
})
export class UserListsComponent implements OnInit,OnChanges {
  @Input() users!: any;
  private userList: any;
  private listObservable: ListObservable
  public reloading = false
  userSubject: typeof UserSubject;
  constructor(private readonly usersManagerService: UsersManagerService) {
    //this.userSubject
    console.log(`user subject`,UserSubject)
    this.listObservable =  new ListObservable()

  }

  ngOnInit(): void {
    this.userList = this.usersManagerService.getLocalStorageItem();
    console.log('list_obsevable',this.listObservable)
  }
  ngOnChanges(changes: SimpleChanges): void {
  //   this.reloading = true
  //   this.userList = changes.users.currentValue;
  //   this.reloading = false
  //   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //   //Add '${implements OnChanges}' to the class.
  }

  set listUpdated(lista){
    this.userList = lista
  }

  get listUpdated(){
    if(this.listObservable?.updated?.event){
      this.userList = this.listObservable?.updated?.list
      return this.listObservable?.updated?.list
    }
    else {
      return this.userList
    }
  }
}
