import { defineStore } from 'pinia';
import { enviarCurriculo } from 'src/Services/candidatoService';
import { apiError } from 'src/composable/public/UseApiError';

export const useCandidatoStore = defineStore('candidato', {
  actions: {
    async curriculoEnviar(formData: FormData) {
      const { tratarErro } = apiError();

      try {
        const data = await enviarCurriculo(formData);
        return data;
      } catch (error) {
        tratarErro(error);
        throw error;
      }
    },
  },
});
