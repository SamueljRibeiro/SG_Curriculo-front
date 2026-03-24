export interface FormCurriculo {
  nome: string;
  email: string;
  telefone: string;
  setor: string;
  conheceu: string;
  curriculo: File | null;
  termos: boolean;
}
