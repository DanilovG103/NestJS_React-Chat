import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Message } from '../chat/message.model';

@Entity({name: 'Users'})
export class Users {
    @PrimaryGeneratedColumn()
    id:number

    @Column({type:String, unique:true})
    login:string

    @Column({type:String, unique:false})
    password:string

    @OneToMany(() => Message,(message:Message) => message.author)
    message: Message
}

