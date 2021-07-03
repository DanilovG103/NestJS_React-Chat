import { Module } from '@nestjs/common';
import { Message } from './message.entity';
import { ChatGateway } from './chat.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Message])],
  providers: [ChatGateway]
})
export class ChatModule {}
