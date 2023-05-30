import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostInterface } from 'src/app/interfaces/post-interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: `
    <div class = "div-post">
    <a [routerLink]="['clickpost', post.url]"> <img class= "image-post" src={{post.url}}></a>
    </div>
  `,
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post!:PostInterface;
  
}
