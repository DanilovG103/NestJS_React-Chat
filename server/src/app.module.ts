import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { Users } from './users/users.model';
import { AuthModule } from './auth/auth.module';
import { Message } from './chat/message.model';
import { ChatModule } from './chat/chat.module';

@Module({
  imports:[
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'my_database',
      synchronize: true,
      entities: [Users, Message],
    }),
    UsersModule,
    AuthModule,
    ChatModule],
})
export class AppModule {}
