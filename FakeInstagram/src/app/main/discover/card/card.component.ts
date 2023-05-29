import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerComponent } from '../owner/owner.component';
import { PostComponent } from '../post/post.component';
import { PostInterface } from 'src/app/interfaces/post-interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,OwnerComponent,PostComponent],
  template: `
    <div class = "card-content">
      <app-post [post]="cardData"></app-post>
      <app-owner [owner]="cardData"></app-owner>
    </div>
  `,
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() cardData! : PostInterface;
}
