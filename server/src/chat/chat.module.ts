import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { Message } from './message.entity';
import { ChatService } from './chat.service';
import { ChatGateway } from './chat.gateway';

@Module({
  imports: [SequelizeModule.forFeature([Message])],
  providers: [ChatService, ChatGateway]
})
export class ChatModule {}
