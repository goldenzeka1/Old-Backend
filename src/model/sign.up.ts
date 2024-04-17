import { ApiProperty } from "@nestjs/swagger";
import { MaxLength, MinLength } from "class-validator";

export class SignUpModel {
    @ApiProperty()
    @MaxLength(10)
    @MinLength(4)
    username: string;
    @ApiProperty()
    @MaxLength(10)
    @MinLength(4)
    password: string;
    @ApiProperty()
    @MaxLength(10)
    @MinLength(4)
    confirm_password: string;
}
export class signUpModel {
    @ApiProperty()
    @MaxLength(10)
    @MinLength(4)
    username: string;
    @ApiProperty()
    @MaxLength(10)
    @MinLength(4)
    password: string;
}