import { Module } from '@nestjs/common';
import { Message } from './message.entity';
import { ChatGateway } from './chat.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatService } from './chat.service';

@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  controllers:[],
  providers: [ChatGateway, ChatService]
})
export class ChatModule {}
