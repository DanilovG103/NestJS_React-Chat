import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { Users } from './users/users.entity';
import { AuthModule } from './auth/auth.module';
import { Message } from './chat/message.entity';
import { ChatModule } from './chat/chat.module';

@Module({
  imports:[
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'my_database',
      autoLoadModels: true,
      models: [Users, Message],
    }),
    UsersModule,
    AuthModule,
    ChatModule],
})
export class AppModule {}
