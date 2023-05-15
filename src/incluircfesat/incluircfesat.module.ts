import { Module } from '@nestjs/common';
import { IncluircfesatService } from './incluircfesat.service';
import { IncluircfesatController } from './incluircfesat.controller';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { vwLancamentos } from './entities/lancamento.entity';
import { Repository } from 'typeorm';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([vwLancamentos])],
  controllers: [IncluircfesatController],
  providers: [IncluircfesatService, Repository],
})
export class IncluircfesatModule {}
