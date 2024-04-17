import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class appService {

}
export class AuthService {
  constructor(private readonly jwtService: JwtService) { }

  // Method to generate a JWT token
  async generateToken(payload: any): Promise<string> {
    return this.jwtService.sign(payload);
  }
}
