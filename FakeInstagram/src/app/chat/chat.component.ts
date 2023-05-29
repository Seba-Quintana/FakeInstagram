import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Chat} from '../chat';
import { ChatService } from '../chat.service';


@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule],
  template: `
    
  <section class="chat-window">
    <div class="callout" data-closable>
        <button class="close-button" aria-label="Close alert" type="button" data-close>
          <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <h1>Chats</h1>
    <section class="chat" *ngFor="let chat of chats; let i = index"> 
      <img class="chat-image" src="{{chat.image}}"   alt="image not found">
      <h2 class="chat-name">{{chat.name}}</h2>
      <p class="chat-last">{{chat.lastMessage}}</p>
    </section>
  </section> 

  `,
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  chatService:ChatService=inject(ChatService);
  chats: Chat[]=[]

  constructor(){
    this.chats=this.chatService.getAllChats()
  }
}
