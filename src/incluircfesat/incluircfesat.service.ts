import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { vwLancamentos } from './entities/lancamento.entity';

@Injectable()
export class IncluircfesatService {
  constructor(private readonly httpService: HttpService) {}
  async buscaCupom() {
    const consulta = await vwLancamentos.find({
      order: {
        lancamentoId: 'DESC',
      },
      take: 10,
      skip: 0,
    });
    console.log(JSON.stringify(consulta));
    return consulta;
  }
}
