import { forwardRef, Module } from '@nestjs/common';
import { Users } from './users.model';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AuthModule } from './../auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [TypeOrmModule.forFeature([Users]),
  forwardRef(() => AuthModule)],
  exports: [UsersService]
})
export class UsersModule {}
