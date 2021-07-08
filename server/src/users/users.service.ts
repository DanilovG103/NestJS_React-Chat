import { CreateUserDto } from './../dto/create-user.dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs'
import { Users } from './users.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private userRepository: Repository<Users>){}

    async createUser(userDto: CreateUserDto) {
        const newUser = await this.getUserByLogin(userDto.login)
        const hashPassword = await bcrypt.hash(userDto.password, 5);
        if (!newUser) {
          const createdUser = this.userRepository.create({ ...userDto, password: hashPassword });
          return await this.userRepository.save(createdUser);
        }
        throw new BadRequestException('Пользователь с таким логином уже есть') 
    }

    async getUserByLogin(login: string) {
        return await this.userRepository.findOne({where: {login}})
    }

    async getAllUsers() {
        return await this.userRepository.find()
    }
}