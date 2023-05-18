import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostInterface } from 'src/app/interfaces/post-interface';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class = "div-post">
      <img src={{post.url}}>
    </div>
  `,
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post!:PostInterface;

}
