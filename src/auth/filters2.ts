import { ArgumentsHost, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { MyCustomException } from './exeption.lang';

function validateCyrillicLetters(str: string): boolean {
    const cyrillicRegex = /[а-яА-Я]/;
    return !cyrillicRegex.test(str);
}

export class MyCustomFilter2 extends BaseExceptionFilter {
    catch(_exception: MyCustomException, host: ArgumentsHost) {
        console.log("MyCustomFilter2 is called")
        const response = host.switchToHttp().getResponse();
        const status = HttpStatus.BAD_REQUEST;
        const request = host.switchToHttp().getRequest();

        if (validateCyrillicLetters(request.body.someProperty)) {
            response.status(status).json({
                statusCode: 400,
                message: 'English language is required for this operation.',
            });
        }
    }
}