import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "../users/users.model";

@Entity({name: 'messages'})
export class Message{
    @PrimaryGeneratedColumn()
    id:number

    @Column({type:String})
    content: string

    @ManyToOne(() => Users)
    author: Users
}