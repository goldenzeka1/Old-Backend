import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { query } from 'express';
import { User } from 'src/database/user.entity';
import { SignUpModel } from 'src/model/sign.up';
import { Repository } from 'typeorm'; query
@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, password: string): Promise<User | null> {
        const user = await this.userRepository.findOne({ where: { username } });

        if (user && user.password === password) {
            return user;
        } else {
            throw new NotFoundException();
        }
    }

    async login(user: User): Promise<{ accessToken: string; }> {
        const payload = { username: user.username, sub: user.id };
        const accessToken = this.jwtService.sign(payload);
        return { accessToken };
    }

    async registerUser(signupData: SignUpModel) {
        if (signupData.password !== signupData.confirm_password) {
            throw new BadRequestException();
        }

        const username = signupData.username;
        const dbUser = await this.userRepository.findOne({ where: { username } });
        if (dbUser) {
            throw new BadRequestException('User with this username does not exist');
        }

        return this.userRepository.save(signupData);
    }

}



