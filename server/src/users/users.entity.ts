import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Message } from '../chat/message.entity';

@Entity({name: 'Users'})
export class Users {
    @PrimaryGeneratedColumn()
    id:number

    @Column('text')
    login:string

    @Column('text')
    password:string

    @OneToMany(() => Message,(message:Message) => message.author)
    message: Message
}