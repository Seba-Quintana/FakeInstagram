import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Chat} from '../chat';


@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule],
  template: `
    
    <div class=header-chat>Chats</div>
    <div class=body-chat><section class="chats-containers" *ngFor="let Chat of Chat"></section>
      <img class='person-image' src="{{Chat.image}}">
      <p class='person-name'>{{Chat.name}}</p>
      <p class ='person-lastMessage'>{{Chat.lastMessage}}</p>
    </div>

    
  `,
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  chatContainer: Chat[]=[{
    id: 1,
    image: '',
    name: 'James',
    lastMessage: 'string',
  },{
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
  }]
}
