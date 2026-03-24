import { defineStore } from 'pinia';
import { enviarCurriculo } from 'src/Services/candidatoService';

export const useCandidatoStore = defineStore('candidato', {
  actions: {
    async curriculoEnviar(formData: FormData) {
      const data = await enviarCurriculo(formData);
      return data;
    },
  },
});
