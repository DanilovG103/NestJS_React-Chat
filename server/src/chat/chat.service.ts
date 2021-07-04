import { Repository } from 'typeorm';
import { Injectable } from "@nestjs/common";
import { Users } from './../users/users.entity';
import { Message } from './message.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ChatService {
    constructor (@InjectRepository(Message) private messageRepository: Repository<Message>){}

    async saveMessage(content: string, author: Users) {
        const newMessage = await this.messageRepository.create({
          content,
          author
        });
        await this.messageRepository.save(newMessage);
        return newMessage;
    }
}