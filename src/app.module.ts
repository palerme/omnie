import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IncluircfesatModule } from './incluircfesat/incluircfesat.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './database/database.config';
import { ConfigModule } from '@nestjs/config';
import { vwLancamentos } from './incluircfesat/entities/lancamento.entity';

@Module({
  imports: [
    IncluircfesatModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    TypeOrmModule.forFeature([vwLancamentos]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
