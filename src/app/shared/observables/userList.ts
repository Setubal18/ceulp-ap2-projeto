import { UserSubject } from '../subscribe/userSubscriber';


export class ListObservable {

  private  ListObservable = {
    event:false,
    list: []
  }

  constructor(){
    this.ListObservable.event = false
    this.ListObservable.list = []
  }

  get updated(){
    return this.ListObservable
  }
  public update(_Subject: any): void {
      if (_Subject instanceof UserSubject) {
          console.log("Atualizou listagem",_Subject)
          console.log(_Subject)
          this.ListObservable.list = _Subject.users
          this.ListObservable.event = true
      }
      setTimeout(()=>{
        this.ListObservable.event = false
      },150)
  }
}
