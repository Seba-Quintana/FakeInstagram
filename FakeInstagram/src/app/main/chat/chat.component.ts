import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Chat} from '../../interfaces/chat';
import { ChatService } from '../../services/chat.service';
import { NavbarComponent } from "../discover/navbar/navbar.component";



@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  template: `
  <p>
      <app-navbar></app-navbar>
  </p>  
  <section class="chat-window">
    <div class="callout" data-closable>
        <button class="close-button" aria-label="Close alert" type="button" data-close>
          <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <h1>Chats</h1>
    <section class="chat" *ngFor="let chat of chats; let i = index"> 
      <div>
        <img class="chat-image" src="{{chat.image}}"   alt="image not found">
      </div>
      <div class="text-container">
        <p class="chat-name">{{chat.name}}</p>
        <p class="chat-last">{{ ((chat.lastMessage).length>30)? (chat.lastMessage | slice:0:30)+'...':(chat.lastMessage) }}</p> 
      </div>

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
