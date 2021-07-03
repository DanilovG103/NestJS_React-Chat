import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage, 
  WebSocketGateway, 
  WebSocketServer} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { Users } from "../users/users.entity";

@WebSocketGateway()
export class ChatGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server:Server

  private logger: Logger = new Logger('ChatGateway');

  @SubscribeMessage('message')
  handleMessage(client:Socket, payload: string):void {
    this.server.emit(`msgToClient ${payload} ${client.id}`);
  }
  
  @SubscribeMessage({ value: 'isWriting' })
  handleIsWriting (sender, user:Users) {
    sender.broadcast.emit(`${user} isWriting`);
  }
  
  afterInit(server: Server) {
    this.logger.log('Init');
  }

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }
}
