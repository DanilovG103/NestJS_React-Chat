import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './../dto/create-user.dto';
import { Users } from './users.model';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private userRepository: Repository<Users>){}

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto)
        return user;
    }

    async getUserByLogin(login: string) {
        const user = await this.userRepository.findOne({where: {login}})
        return user
    }

}
