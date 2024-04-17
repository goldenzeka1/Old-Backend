// auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/database/user.entity';
import { UsersController } from './users.controller';
import { usersservice } from './users.service';
import { Repository } from 'typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            secret: 'njnjkvndkjsdvnjk',
            signOptions: { expiresIn: '1h' },
        })
    ],
    controllers: [UsersController],
    providers: [usersservice, Repository<User>,],
    exports: [usersservice],
})
export class usersmodule { }

