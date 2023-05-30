import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostInterface } from 'src/app/interfaces/post-interface';

@Component({
  selector: 'app-owner',
  standalone: true,
  imports: [CommonModule],
  template: ` <a href="/profile/{{owner.user}}">
  <div class = "div-owner">
    <div class = "div-image">
      <img  class = "image" src={{owner.image}}>
    </div>
    <div class = "div-ownerInfo">
      <p class = "owner-name">{{owner.name}}</p>
      <p class = "owner-user">{{owner.user}}</p>
    </div>
  </div>
  </a>
  `,
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent {
  @Input() owner! : PostInterface;
}
