// auth.controller.ts
import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/database/user.entity';
import { SignUpModel } from 'src/model/sign.up';
import { SigninModel } from 'src/model/Sign.in';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }


    @Post("signup")
    async signUp(@Body() signUpModel: SignUpModel): Promise<User> {
        return this.authService.registerUser(signUpModel);
    }

    @Post('login')
    async login(@Body() loginDto: SigninModel): Promise<{ accessToken: string }> {
        const user = await this.authService.validateUser(loginDto.username, loginDto.password);

        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        return this.authService.login(user);
    }
}

