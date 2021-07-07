import { CreateUserDto } from './../dto/create-user.dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs'
import { Users } from './users.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private userRepository: Repository<Users>){}

    async createUser(user: CreateUserDto) {
        const { login, password } = user;
        const hashPassword = await bcrypt.hashSync(password, 5);
        const oldUser = await this.userRepository.findOne({ login });
        if (!oldUser) {
          const createdUser = this.userRepository.create({ login, password: hashPassword });
          return this.userRepository.save(createdUser);
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