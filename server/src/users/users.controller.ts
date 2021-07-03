import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersService } from './users.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}
    
    @UseGuards(JwtAuthGuard)
    
    @Post()
    create(@Body() userDto:CreateUserDto) {
        return this.usersService.createUser(userDto)
    }

}
