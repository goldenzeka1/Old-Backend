import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './ormconfig';
import { User } from './user.entity';
@Module({
    imports: [TypeOrmModule.forRoot(config), TypeOrmModule.forFeature([User])]
})
export class DatabaseModule { }
