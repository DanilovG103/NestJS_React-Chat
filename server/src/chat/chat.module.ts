import { Module } from '@nestjs/common';
import { Message } from './message.model';
import { ChatGateway } from './chat.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  providers: [ChatGateway]
})
export class ChatModule {}
