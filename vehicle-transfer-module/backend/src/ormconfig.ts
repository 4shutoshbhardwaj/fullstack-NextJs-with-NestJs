import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const ormconfig: TypeOrmModuleOptions = {
  type: 'mysql', // Ensure the type is exactly 'mysql'
  host: 'sql12.freesqldatabase.com',
  port: 3306,
  username: 'sql12728040',
  password: '6teES33BYT',
  database: 'sql12728040',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};

export default ormconfig;
