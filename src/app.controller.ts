import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { appService } from './app.service';

@Controller()
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  authService: any;
  constructor(private readonly appService: appService) { }
  @Post('login')
  async login(@Body() user: {
    username: any;
    id: any; name: string
  }): Promise<{ accessToken: string }> {
    // Check if the user exists (you should have your own logic for this)
    const authenticatedUser = /* Your user authentication logic */ user;

    if (!authenticatedUser) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    // Generate a token
    const accessToken = await this.authService.generateToken({
      sub: authenticatedUser.id,
      username: authenticatedUser.username,
    });

    return { accessToken };
  }
}
function getHello() {
  throw new Error('Function not implemented.');
}

