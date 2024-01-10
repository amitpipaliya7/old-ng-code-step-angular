import { Component } from '@angular/core';
import { UserdataserviceService } from '../service/userdataservice.service';


//for service

@Component({
  selector: 'app-databyservice',
  templateUrl: './databyservice.component.html',
  styleUrls: ['./databyservice.component.scss']
})
export class DatabyserviceComponent {


  users:any;
  constructor(private userdata : UserdataserviceService){
    console.log(userdata.users());
    this.users=userdata.users()    
  }
  
  

}
