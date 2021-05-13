import { ListObservable } from '../observables/userList';
interface IUser{
  nome:string,
  email:String,
  birthday:Date,
  age?:number
}

export class UserSubject{
  public users:any
  public observables:any

  constructor(){
    this.users = []
    this.observables = []
  }

  public addObservable(observable:any){
    if(this.observables.includes(observable)) {
      console.error('Ja existe esse observable')
      return
    }
    console.log('Adicionou observable')
    this.observables.push(observable)
  }

  public removeObservable(observable:any){
    const index =this.observables.indexOf(observable)
    if(index === -1){
      console.error('Nao existe')
      return
    }
    console.log('removeu observable')
    this.observables.splice(index)
  }

  public addUser(user:IUser){
    this.users.push(user)
    console.log('adicionou user',this.users)
    this.notify()
  }

  public addUsers(users){
    if(users.length > 0){
      this.users = users
      this.notify()
    }
  }

  public removeUser(index:number){
    this.users.splice(
     index, 1
      );
      console.log('removeu user',this.users)
  }

  public notify(): void{
    console.log('esta notificando')
      for (let _observer of this.observables) {
          console.log(`esta notificando o observable`,_observer)
          _observer.update(this);
      }
  }

  public calcEstatisc(){
    const total = this.users.length
    this.users.forEach((user:IUser)=>{
      user.age =  this.calcAge(user.birthday)
    })
  }

  private calcAge(birthdate) {
    const ageDifMs = Date.now() - birthdate.getTime();
    const ageDate = new Date(ageDifMs); // miliseconds from epoch
    const year = new Date().getFullYear()
    return Math.abs(ageDate.getUTCFullYear() - year)
}
}
