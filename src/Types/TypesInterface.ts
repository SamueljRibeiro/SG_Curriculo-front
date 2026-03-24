export interface FormCurriculo {
  nome: string;
  email: string;
  telefone: string;
  setor: string;
  conheceu: string;
  documento: File | null;
  termos: boolean;
}
