import { Column, DataType, Table, Model, HasMany } from "sequelize-typescript";
import { Message } from '../chat/message.entity';

interface UsersCreationAttr {
    login: string;
    password: string;
}

@Table({tableName:'users'})
export class Users extends Model<Users,UsersCreationAttr> {
    @Column({type: DataType.INTEGER, unique:true , primaryKey: true, autoIncrement:true})
    id:number

    @Column({type: DataType.STRING, unique:true})
    login:string

    @Column({type:DataType.STRING, unique:false})
    password:string

    @HasMany(() => Message)
    message: Message
}