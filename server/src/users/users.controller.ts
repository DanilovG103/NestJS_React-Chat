import { Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersService } from './users.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @Post()
    @UseGuards(JwtAuthGuard)
    @UsePipes(new ValidationPipe({transform:true}))
    async create(@Body() userDto:CreateUserDto) {
        return await this.usersService.createUser(userDto)
    }

    @Get()
    async getAll(){
        return await this.usersService.getAllUsers()
    }
    
}