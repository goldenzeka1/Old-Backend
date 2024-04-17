import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { usersservice } from './users/users.service';
import { User } from "./database/user.entity"
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      // Your TypeORM configuration here
    }),
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      // Your JWT configuration here
    }),
    JwtModule.register({
      secret: '',
      signOptions: { expiresIn: '1h' }, // Adjust expiration as needed
    }),
  ],
  controllers: [],
  providers: [usersservice],
})
export class appModule { }
