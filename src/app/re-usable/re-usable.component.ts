import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-re-usable',
  templateUrl: './re-usable.component.html',
  styleUrls: ['./re-usable.component.scss']
})
export class ReUsableComponent {
  
  @Input() itemreuse:{name:string, email:string, ph:string}={name:"", email:"", ph:""}
  
}
