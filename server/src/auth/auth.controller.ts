import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './../dto/create-user.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService:AuthService){}

    @Post('/login')
    @UsePipes(new ValidationPipe({transform:true}))
    async login(@Body() userDto: CreateUserDto){
        return await this.authService.login(userDto)
    }

    @Post('/registration')
    @UsePipes(new ValidationPipe({transform:true}))
    async registration(@Body() userDto: CreateUserDto){
        return await this.authService.registration(userDto)
    }

}
