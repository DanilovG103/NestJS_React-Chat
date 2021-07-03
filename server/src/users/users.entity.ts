import { Column, Entity, Generated, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Message } from '../chat/message.entity';

@Entity({name: 'Users'})
export class Users {
    @PrimaryGeneratedColumn()
    id:number

    @PrimaryColumn('text')
    login:string

    @PrimaryColumn('text')
    password:string

    @OneToMany(() => Message,(message:Message) => message.author)
    message: Message
}

