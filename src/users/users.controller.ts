// users.controller.ts
import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { SystemGuard } from './system.guard';


@Controller()
export class UsersController {

    @Post()
    @UseGuards(SystemGuard)
    createUser(@Body() _userDto: any): string {
        // Your logic to create the user goes here
        return 'User created successfully';
    }
}
