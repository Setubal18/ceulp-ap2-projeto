import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { UsersManagerService } from '../../services/users-manager.service';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.styl'],
})
export class EstatisticasComponent implements OnInit {
  @Input() users: any;
  private listUsers: any;
  public reloading = false;
  public counts = {
    total: 0,
    totalF: 0,
    totalM: 0,
    totalO: 0,
    totalN: 0,
  };

  private countsTotal = {
    F: () => {
      this.counts.totalF += 1;
    },
    M: () => {
      this.counts.totalM += 1;
    },
    N: () => {
      this.counts.totalN += 1;
    },
    O: () => {
      this.counts.totalO += 1;
    },
  };
  constructor(
    private readonly usersManagerService: UsersManagerService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.listUsers = this.usersManagerService.getLocalStorageItem();
    this.do();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.listUsers && this.listUsers.length > 0) {
      this.listUsers = changes.users.currentValue
      this.do()
    }
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

  }

  ngAfterViewChecked(): void {
    this.do();
    //this.cd.detectChanges();
  }

  do() {
    this.reloading = true;
    setTimeout(() => {
      this.count();
    }, 50);
    this.reloading = false;
  }

  count() {
    this.resetCount();
    if (this.listUsers) {
      this.counts.total = this.listUsers.length > 0 ? this.listUsers.length : 0;
      this.listUsers.map((user) => {
        if (user.sexo) {
          const reckon = this.countsTotal[user.sexo];
          reckon();
        }
      });
    }
  }

  resetCount() {
    this.counts.total = 0;
    this.counts.totalF = 0;
    this.counts.totalM = 0;
    this.counts.totalN = 0;
    this.counts.totalO = 0;
  }
}
