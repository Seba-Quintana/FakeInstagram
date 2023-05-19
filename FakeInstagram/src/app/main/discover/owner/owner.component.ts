import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostInterface } from 'src/app/interfaces/post-interface';

@Component({
  selector: 'app-owner',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class = "div-owner">
    <div class = "div-image">
      <img src={{owner.image}}>
    </div>
    <div class = "div-ownerInfo">
      <p>{{owner.name}}</p>
      <p>{{owner.user}}</p>
    </div>
  </div>
  `,
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent {
  @Input() owner! : PostInterface;
}
