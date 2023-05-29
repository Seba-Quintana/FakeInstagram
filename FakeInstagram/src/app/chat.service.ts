import { Injectable } from '@angular/core';
import { Chat } from './chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  chats:Chat[]=[{
    id: 1,
    image: '',
    name: 'James',
    lastMessage: 'string',
  },
  {
    id: 2,
    image: '',
    name: 'Will',
    lastMessage: 'string',
  },{
    id: 3,
    image: '',
    name: 'Beth',
    lastMessage: 'string',
  },{
    id: 4,
    image: '',
    name: 'Rev',
    lastMessage: 'string',
  }

]
getAllChats(): Chat[] {
  return this.chats;
}


  constructor() {


   }
}
