import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'Users'})
export class Users {
    @PrimaryGeneratedColumn()
    id:number

    @Column('text')
    login:string

    @Column('text')
    password:string
}