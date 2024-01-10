import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  constructor(private rout: ActivatedRoute){

  }
  userId:any;
  ngOnInit():void {

    console.log("user id is ", this.rout.snapshot.paramMap.get('id'));
    this.userId=this.rout.snapshot.paramMap.get('id');
  }

  
}
