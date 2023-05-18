import { Injectable } from '@angular/core';
import { PostInterface } from '../interfaces/post-interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  listPost : PostInterface[] =[{
    url:"url",
    image : "image",
    name : "name",
    user : "user",
  },{
    url:"url",
    image : "image",
    name : "name",
    user : "user",
  }]
  
  getPosts(){
    return this.listPost;
  }
}

