import { Component } from '@angular/core';

@Component({
  selector: 'app-user-both',
  template: `
    <h3 class="blue">
      user-both works! (--inline-style and --inline-template)
    </h3>
  `,
  styles: [
    `
    .blue{
        color: blue;
      }
    `
  ]
})
export class UserBothComponent {

}
