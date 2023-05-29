import { Injectable } from '@angular/core';
import { PostInterface } from '../interfaces/post-interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  listPost : PostInterface[] =[{
    url:"assets/escaleraMecanica.jpeg",
    image : "assets/personaPerfil.jpeg",
    name : "Santiago Varaldo",
    user : "@santivaraldo",
  },{
    url:"assets/autoVerde.jpeg",
    image : "assets/personaPerfil2.jpeg",
    name : "Pepito Perez",
    user : "@pperez",
  },{
    url:"assets/fusca.jpeg",
    image : "assets/personaperfil3.jpeg",
    name : "John Davis",
    user : "@jdavis",
  },{
    url:"assets/escaleraMecanica.jpeg",
    image : "assets/personaPerfil.jpeg",
    name : "William Smith",
    user : "@wsmith",
  },{
    url:"assets/escaleraMecanica.jpeg",
    image : "assets/personaPerfil2.jpeg",
    name : "Steve Fontarrosa",
    user : "@sfontarrosa",
  }]
  
  getPosts(){
    return this.listPost;
  }
}

