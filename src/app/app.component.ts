import { Component, OnInit } from '@angular/core';
import  LogRocket from 'logrocket';
import { environment } from 'src/environments/environment';
import { UserManagerService } from './shared/services/user-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
})
export class AppComponent implements OnInit {
  title = 'ceulp-api2-projeto';

  constructor(private readonly userManagerService:UserManagerService){}

  ngOnInit(): void {
    this.initLog()
  }

  initLog() {
    LogRocket.init(environment.LOGROCKET)
    if(this.userManagerService.user){
      LogRocket.identify(this.userManagerService.user.app)
    }
  }
}
