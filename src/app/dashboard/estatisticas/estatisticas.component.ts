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
    averageAge:0,
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
      this.listUsers = changes.users.currentValue
      this.do()
  }

  do() {
    this.reloading = true;
    setTimeout(() => {
      this.resetCount();
      this.count();
      this.averageAge()
    }, 50);
    this.reloading = false;
  }

  averageAge(){
    let totalAges = 0
    if (this.listUsers) {
      this.listUsers.map((user) => {
        totalAges += user?.birthday ? user.birthday : 0
      });

      this.counts.averageAge = Math.round(totalAges/this.listUsers.length)
    }
  }

  count() {
    if (this.listUsers) {
      this.counts.total = this.listUsers.length > 0 ? this.listUsers.length : 0;
      this.listUsers.map((user) => {
        if (user.sexo !== 'Sexo') {
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
