import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength, MinLength, isString, minLength } from "class-validator";
export class SigninModel {
    @ApiProperty()
    @IsString()
    @MaxLength(10)
    @MinLength(4)
    username: string;
    @ApiProperty()
    @MaxLength(10)
    @MinLength(4)
    password: string;
}
