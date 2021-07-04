import { TypeOrmModule } from '@nestjs/typeorm';
import { forwardRef, Module } from '@nestjs/common';
import { Users } from './users.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AuthModule } from './../auth/auth.module';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [TypeOrmModule.forFeature([Users]),
  forwardRef(() => AuthModule)],
  exports: [UsersService]
})
export class UsersModule {}