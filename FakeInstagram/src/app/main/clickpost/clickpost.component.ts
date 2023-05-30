import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { PostComponent } from '../discover/post/post.component';
import { PostInterface } from 'src/app/interfaces/post-interface';

@Component({
  selector: 'app-clickpost',
  standalone: true,
  imports: [CommonModule,PostComponent],
  template: `
    <img class= "zoomed photo" src= "clickcomponent?.url">
  `,
  styleUrls: ['./clickpost.component.css']
})
export class ClickpostComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  imageurl = -1;
  PostService= inject (PostService);

  constructor() {
      this.imageurl = this.route.snapshot.params['url'];

  }

}



