import { Injectable } from '@angular/core';
import { PostInterface } from '../interfaces/post-interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  listPost : PostInterface[] =[{
    url:"url",
  },{
    url:"url"
  }]
  
  getPosts(){
    return this.listPost;
  }
}

