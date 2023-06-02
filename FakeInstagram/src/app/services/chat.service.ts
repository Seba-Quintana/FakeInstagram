import { Injectable } from '@angular/core';
import { Chat } from '../interfaces/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  chats:Chat[]=[{
    id: 1,
    image: 'https://imagesvc.meredithcorp.io/v3/jumpstartpure/image?url=https://static.onecms.io/wp-content/uploads/sites/6/2022/11/02/Evil-Dead-II-1110222.jpg&w=640&h=360&q=90&c=cc',
    name: 'James',
    lastMessage: 'Nostrud tempor do consequat ullamco labore voluptate non ut adipisicing. Magna anim esse adipisicing nulla aute est consectetur non. Aliqua consequat mollit tempor minim. Ea veniam laborum aliquip pariatur laboris nostrud irure.',
  },
  {
    id: 2,
    image: 'https://www.biografiasyvidas.com/monografia/chaplin/fotos/chaplin340a.jpg',
    name: 'Will',
    lastMessage: 'Deserunt culpa do consectetur ad occaecat nisi. Qui amet dolore reprehenderit non laborum cupidatat aliqua officia ea ut ea. Nisi id in consectetur sunt do labore adipisicing irure.',
  },{
    id: 3,
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Revenge_of_Frankenstein_%28trailer%29_-_Peter_Cushing_%28cropped%29.png',
    name: 'Beth',
    lastMessage: 'Qui nostrud qui sint laborum eiusmod reprehenderit incididunt sunt consequat ipsum adipisicing commodo cillum voluptate.',
  },{
    id: 4,
    image: 'https://ichef.bbci.co.uk/news/976/mcs/media/images/81300000/jpg/_81300586_81300585.jpg',
    name: 'Rev',
    lastMessage: 'Dolor est velit culpa ea Lorem in sint quis voluptate. Ex aute irure incididunt id. Consectetur deserunt adipisicing exercitation laborum. Voluptate aliquip consequat irure quis mollit ad est sit. Ex deserunt ipsum dolore do excepteur in cillum. Voluptate incididunt ullamco deserunt consequat in magna voluptate eu.',
  }

]
getAllChats(): Chat[] {
  return this.chats;
}


  constructor() {


   }
}
