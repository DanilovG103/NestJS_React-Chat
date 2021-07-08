import {
  MessageBody,
  OnGatewayConnection,
  SubscribeMessage, 
  WebSocketGateway, 
  WebSocketServer} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { MessageRepository } from './message.repository';
import { Message } from './message.entity';

@WebSocketGateway(8081, {transports: ["websocket"]})
export class ChatGateway implements OnGatewayConnection {
  constructor(private messageRepository: MessageRepository){}
  @WebSocketServer() server:Server;
  
  @SubscribeMessage("message")
  async createMessage(@MessageBody() data: Message) {
    await this.messageRepository.createMessage(data)
    const messages = await this.getMessages()
    this.server.emit("init", messages)
  }
  
  async handleConnection() {
    const messages = await this.getMessages();
    this.server.emit("init", messages)
  }

  async getMessages() {
    return await this.messageRepository.find();
  }
}
