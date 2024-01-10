import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataserviceService {

  constructor() { }

  users(){
    return [
      {name:"amit", age:1, email:"amit@gmail"},
      {name:"aaa", age:25, email:"aaa@gmail"},
      {name:"bbb", age:34, email:"bbb@gmail"},
      {name:"ccc", age:46, email:"ccc@gmail"}
    ]
  }
}
