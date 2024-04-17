import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/database/user.entity';
import { Repository } from 'typeorm';
@Injectable()
export class usersservice {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        private jwtService: JwtService
    ) { }
    async login(user: User): Promise<{ accessToken: string; }> {
        const payload = { username: user.username, sub: user.id };
        const accessToken = this.jwtService.sign(payload);
        return { accessToken };
    }



}
