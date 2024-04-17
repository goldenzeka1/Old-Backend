import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './user.entity';
const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'goldenzeka',
    password: '',
    database: 'postgres',
    entities: [__dirname + '/**/*.entity{.ts,.js}', User],
    synchronize: true, // Set to false in production
};
export default config;
