import { api } from 'src/boot/axios';

export const enviarCurriculo = async (formData: FormData) => {
  try {
    const res = await api.post('/candidatos', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return res.data;
    
  } catch (error) {
    console.error(error);
  }
};
