import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Users } from "../users/users.entity";

interface MessageCreationAttr {
    content: string;
    author: Users;
}

@Table({tableName: 'messages'})
export class Message extends Model<Message, MessageCreationAttr>{
    @Column({type: DataType.INTEGER, unique:true , primaryKey: true, autoIncrement:true})
    id:number

    @Column({type: DataType.STRING})
    content: string

    @ForeignKey(() => Users)
    author: Users
}