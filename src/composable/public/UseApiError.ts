import axios from 'axios';
import { Notify } from 'quasar';

/* Tratamento de erros da API */

export function apiError() {
  function tratarErro(error: unknown) {
    if (axios.isAxiosError(error)) {
      if (!error.response) {
        Notify.create({
          type: 'negative',
          message: 'Verifique sua conexão com a internet e tente novamente.',
          position: 'top-right',
        });
        return;
      }

      const status = error.response.status;

      switch (status) {
        case 400:
          Notify.create({
            type: 'warning',
            message: 'Requisição inválida.',
            position: 'top-right',
          });
          break;

        case 401:
          Notify.create({
            type: 'negative',
            message: 'Não autorizado.',
            position: 'top-right',
          });
          break;

        case 403:
          Notify.create({
            type: 'negative',
            message: 'Acesso negado.',
            position: 'top-right',
          });
          break;

        case 404:
          Notify.create({
            type: 'info',
            message: 'Não foi possível encontrar.',
            position: 'top-right',
          });
          break;

        case 429:
          Notify.create({
            type: 'warning',
            message: 'Muitas requisições, tente novamente mais tarde.',
            position: 'top-right',
          });
          break;

        case 500:
          Notify.create({
            type: 'negative',
            message: 'Erro interno do servidor, tente novamente mais tarde.',
            position: 'top-right',
          });
          break;

        default:
          Notify.create({
            type: 'negative',
            message: 'Erro inesperado, tente novamente mais tarde.',
            position: 'top-right',
          });
      }
    } else {
      Notify.create({
        type: 'negative',
        message: 'Erro desconhecido, tente novamente mais tarde.',
        position: 'top-right',
      });
    }
  }
  return { tratarErro };
}
