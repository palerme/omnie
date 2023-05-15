import { TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist';
import { vwLancamentos } from 'src/incluircfesat/entities/lancamento.entity';

export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mssql',
      host: process.env.MSSQL_HOST,
      port: +process.env.MSSQL_PORT,
      username: process.env.MSSQL_USER,
      password: process.env.MSSQL_PASSWORD,
      database: process.env.MSSQL_DATABASE,
      entities: [vwLancamentos],
      options: {
        cryptoCredentialsDetails: {
          minVersion: 'TLSv1',
        },
      },
      extra: {
        trustServerCertificate: true,
      },
      synchronize: false,
    };
  }
}
