import { Component, OnInit } from '@angular/core';
import LogRocket from 'logrocket';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
})
export class AppComponent implements OnInit {
  title = 'ceulp-api2-projeto';

  ngOnInit(): void {

  }

  initLog(){
    LogRocket.identify(environment.LOGROCKET)
  }
}
