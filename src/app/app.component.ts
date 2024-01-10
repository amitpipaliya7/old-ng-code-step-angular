import { Component } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { FormGroup, FormControl ,Validator} from '@angular/forms'

//for service
import { UserdataserviceService } from './service/userdataservice.service'

//API service
import { UserapiService } from './APIservice/userapi.service'
import { UserpostapiService } from './APIpostservice/userpostapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'old-ng-code-step';
  name5:string=""

  fun() {
    return 'data by function';
  }

  funTitle = 'function title';
  data = 'hello';
  num = 100;

  getName(name: any, secondname: any) {
    alert(name + secondname);
  }

  keyUpval: string = '';
  keyUp(val: any) {
    this.keyUpval = val;
  }

  displayByClick: string = '';
  clickFun(val: any) {
    this.displayByClick = val;
  }

  countShow: string = '';
  count = 0;
  alert = '';
  counterFun(type: string) {
    // this.count++;
    // this.count=val;

    // type == "add" ? this.count++ : this.count--;

    if (type == 'add') {
      this.count++;
    } else if (this.count <= 0) {
      // alert("minus is not allowed")
      this.alert = 'minus is not allowed';
    } else {
      this.count--;
    }
  }

  show: string = 'amit';

  color = 'red';

  // counterMinFun(val:any)    {
  //   // this.countShow=val;
  //   this.count--;
  // if(this.count<0){
  //   alert("minus is not allowed")
  // }else {
  //   this.count = val;
  // }

  // }

  colorSwitch = 'green';

  user = ['amit', 'aaa', 'bbb', 'ccc'];

  userDetails = [
    { name: 'amit', email: 'amit@test.com', password: '1234' },
    { name: 'abc', email: 'amit@test.com', password: '1234' },
    { name: 'bbc', email: 'amit@test.com', password: '1234' },
    { name: 'cbc', email: 'amit@test.com', password: '1234' },
  ];

  userDetSec = [
    {
      name: 'amit',
      email: 'amit@test.com',
      socialAcounts: ['instagram', 'facebook', 'linkedin'],
    },
    {
      name: 'abc',
      email: 'amit@test.com',
      socialAcounts: ['instagram', 'facebook', 'linkedin'],
    },
    {
      name: 'bbc',
      email: 'amit@test.com',
      socialAcounts: ['instagram', 'facebook', 'linkedin'],
    },
    {
      name: 'cbc',
      email: 'amit@test.com',
      socialAcounts: ['instagram', 'facebook', 'linkedin'],
    },
  ];

  colors = 'red';
  bgColor = 'blue';

  updareColor() {
    this.colors = 'green';
    this.bgColor = 'yellow'; 
  }

  userData: any = {};
  submitForm(data: NgForm) {
    this.userData = data;
  }

  display = true;
  toggle() {
    this.display = !this.display;
  }

  toDoList: any[] = [];
  addItem(data: any) {
    // this.toDoList.push(data);
    this.toDoList.push({ id: this.toDoList.length, data });
  }

  remove(id: number) {
    console.log(id);
    this.toDoList = this.toDoList.filter((ele) => ele.id !== id);
  }

  toDoSec: any[] = [];
  addItem2(data: any) {
    this.toDoSec.push({ id: this.toDoSec.length, data });
    console.log(data);
  }

  remove2(id: number) {
    this.toDoSec = this.toDoSec.filter((ele) => ele.id !== id);
  }


  dataForChild = 10;
  secDataForChild = 20;

  updateChildComponent(){
    this.dataForChild= Math.floor(Math.random()*100)
    this.secDataForChild= Math.floor(Math.random()*100)
  }


  dataForPar="x"
updateParentData(events:string){
  // console.log(events);
  this.dataForPar=events;
  
}


userDetailReuse=[
  {name:"amit", email:"amit@gmail", ph:"12345"},
  {name:"aaa", email:"amit@gmail", ph:"12345"},
  {name:"bbb", email:"amit@gmail", ph:"12345"},
  {name:"ccc", email:"amit@gmail", ph:"12345"},
]

  
  today = Date();

  capStr(val:string){
    return val.toUpperCase()
  }


  //template form
  loginUse(item:any){
    console.log(item);
  }


  //reactive form
  reactiveform = new FormGroup({
    user: new FormControl('aa'),
    password : new FormControl('aa')
  })

  loginReactive(){
    console.log(this.reactiveform.value);
  }

  
  //reactive form validation
  reactiveformValidation = new FormGroup({
    names : new FormControl('' ,[Validators.required, Validators.minLength(3),Validators.pattern('[a-zA-z]+$')]),
    emails : new FormControl('',[Validators.required, Validators.email]),
    passwords : new FormControl('',[Validators.required, Validators.minLength(4)])
  })


  loginReactiveValidation(){
    console.log(this.reactiveformValidation.value);
    
  }

  get nameVali(){
    return this.reactiveformValidation.get('names') 
  }

  get emailVali(){
    return this.reactiveformValidation.get('emails')
  }

  get passVali(){
    return this.reactiveformValidation.get('passwords')
  }



  //service

  users:any;
  userforapi:any;
  userforpostapi:any;

  constructor(private userdata :UserdataserviceService,   private userdataapi :UserapiService, private userpostapiser:UserpostapiService){
    console.log("userdata", userdata.users());
    this.users=userdata.users()

    
    //API service
    userdataapi.usersapi().subscribe((data)=>{
      this.userforapi=data  
      this.userforapi=this.userforapi.products
      console.log("userforapi", this.userforapi.products);
    
    })
    
    
    //API post 
    userpostapiser.userpostapi().subscribe((data)=>{
      this.userforpostapi=data;
      // this.userforpostapi=this.userforpostapi
      console.log("aaaaaaaaaaa",this.userforpostapi);
      
      
    })
  }



  postapimethod(data:any){
    console.log(data);

    this.userpostapiser.savepostapi(data).subscribe((result)=>{
      console.log(result);
      
    })
  } 
  



}
