export type CompetitorDTO = {
  id: number;
  insertUserId: number;
  insertDate: string;
  updateUserId: number;
  updateDate: string;
  nome: string;
  endereco: {
    logradouro: string;
    numero: number;
    cidade: string;
    CEP: string;
    UF: string;
  };
  regiao: string;
};
