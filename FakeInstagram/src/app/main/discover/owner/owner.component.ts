import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostInterface } from 'src/app/interfaces/post-interface';

@Component({
  selector: 'app-owner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div id = "div-image">
      <img src={{owner.image}}>
    </div>
    <div id = "div-owner">
      <p>{{owner.name}}</p>
      <p>{{owner.user}}</p>
    </div>
  `,
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent {
  @Input() owner! : PostInterface;
}
