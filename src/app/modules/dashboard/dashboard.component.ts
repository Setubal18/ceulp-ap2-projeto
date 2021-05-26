import { Component, OnInit } from '@angular/core';
import { UsersManagerService } from '../../shared/services/users-manager.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.styl']
})
export class DashboardComponent implements OnInit {
  public listUsers = []

  constructor() { }

  ngOnInit(): void {
  }
}
