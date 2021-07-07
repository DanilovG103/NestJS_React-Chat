import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'user'})
export class Users {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    login:string

    @Column()
    password:string
}