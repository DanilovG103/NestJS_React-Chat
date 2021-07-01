import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs'
import { Users } from '../users/users.entity';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class AuthService {

    constructor(private userService: UsersService, private jwtService: JwtService){}
    
    async login(userDto: CreateUserDto){
        const user = await this.validateUser(userDto)
        return this.generateToken(user)
    }

    async registration(userDto: CreateUserDto){
        const newUser = await this.userService.getUserByLogin(userDto.login)
        if (newUser) throw new HttpException('Пользователь с таким логином уже есть', HttpStatus.BAD_REQUEST)
        
        const hashPassword = await bcrypt.hash(userDto.password, 5)
        const user = await this.userService.createUser({...userDto,password:hashPassword})
        
        return this.generateToken(user)
    }
    
    private async generateToken(user: Users) {
        const payload = {login: user.login,id: user.id}
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(userDto: CreateUserDto) {
        const user = await this.userService.getUserByLogin(userDto.login)
        const confirm = await bcrypt.compare(userDto.password, user.password);

        if (user && confirm) {
            return user
        }

        throw new UnauthorizedException({message: 'Некорректный Логин или Пароль'})
    }
}
 