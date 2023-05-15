import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ViewColumn,
  ViewEntity,
} from 'typeorm';

@ViewEntity({
  name: 'vwLancamentos',
  expression: `
  SELECT
  lancamentoId,
  inclusao,
  conexaoId,
  status,
  tipo,
  unidadeId,
  emissao, 
  emissaoconexaoId
  FROM
    vwLancamentos
  `,
})
@Entity('vwLancamentos')
export class vwLancamentos extends BaseEntity {
  @Column()
  @ViewColumn()
  @PrimaryGeneratedColumn()
  lancamentoId: number;

  @ViewColumn()
  @Column({ type: 'datetime2' })
  inclusao: Date;

  @ViewColumn()
  @Column({ type: 'integer' })
  conexaoId: number;

  @ViewColumn()
  @Column({ type: 'integer' })
  status: number;

  @ViewColumn()
  @Column({ type: 'integer' })
  tipo: Tipo;

  @ViewColumn()
  @Column({ type: 'integer' })
  unidadeId: number;

  @ViewColumn()
  @Column({ type: 'datetime2' })
  emissao: Date;

  @ViewColumn()
  @Column({ type: 'integer' })
  emissaoConexaoId: number;
}

export enum Tipo {
  'Balcão' = 16,
  'Mesa' = 17,
  'Cartão' = 21,
  'Delivery' = 22,
  'Encomenda' = 23,
  'NF-e' = 25,
}
