import { Logger } from '@nestjs/common';
import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage, 
  WebSocketGateway, 
  WebSocketServer} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { MessageRepository } from './message.repository';
import { Message } from './message.entity';

@WebSocketGateway(8081, { transports: ["websocket"] })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private messageRepository: MessageRepository){}
  @WebSocketServer() server:Server

  private logger: Logger = new Logger('ChatGateway');
  
  @SubscribeMessage("message")
  async createMessage( @MessageBody() data: Message) {
    await this.messageRepository.createMessage(data)
    const messages = await this.getMessages()
    this.logger.log('received_message', `${messages}`)
    this.server.emit("init", messages)
  }

  async handleConnection(client: Socket) {
    const messages = await this.getMessages();
    this.server.emit("init", messages);
    this.logger.log(`Client connected: ${client.id}`);
  }

  async handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`)
  }

  async getMessages() {
    return await this.messageRepository.find();
  }
}
