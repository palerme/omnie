export interface Root {
  caixa: Caixa;
  cfeSat: CfeSat;
  cupomIdent: CupomIdent;
  emissor: Emissor;
  formasPag: FormasPag[];
  sat: Sat;
}

export interface Caixa {
  lCxAberto: boolean;
  seqCaixa: number;
  seqCupom: number;
}

export interface CfeSat {
  chCFe: string;
  dEmi: string;
  det: Det[];
  hEmi: string;
  lCanc: boolean;
  nCFe: string;
  total: Total;
  tpAmb: string;
}

export interface Det {
  imposto: Imposto;
  lCanc: boolean;
  prod: Prod;
  prodIdent: ProdIdent;
  seqItem: number;
}

export interface Imposto {
  ICMS: Icms;
  vTotTrib: number;
}

export interface Icms {
  CST: string;
}

export interface Prod {
  cUn: string;
  vAcresc: number;
  vDesc: number;
  vItem: number;
  vProd: number;
  vUnit: number;
}

export interface ProdIdent {
  emiProduto: string;
  idLocalEstoque: number;
  idProduto: number;
}

export interface Total {
  vAcresc: number;
  vCF: number;
  vDesc: number;
  vItem: number;
  vTotTrib: number;
}

export interface CupomIdent {
  idCliente: number;
}

export interface Emissor {
  emiId: string;
  emiNome: string;
  emiSerial: string;
  emiVersao: string;
}

export interface FormasPag {
  lCanc: boolean;
  pag: Pag;
  pagIdent: PagIdent;
  parcelas: Parcela[];
  seqPag: number;
}

export interface Pag {
  pTaxa: number;
  vLiq: number;
  vPag: number;
  vTaxa: number;
  vTroco: number;
}

export interface PagIdent {
  cCategoria: string;
  cTipoPag: string;
  idConta: number;
}

export interface Parcela {
  dVenc: string;
  nParc: number;
  vParc: number;
}

export interface Sat {
  satMd5: string;
  satModelo: string;
  satProt: string;
  satSerie: string;
  satSessao: string;
  satXml: string;
}
