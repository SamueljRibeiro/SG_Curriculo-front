import * as yup from 'yup';

export const schema = yup.object({
  nome: yup
    .string()
    .required('O nome é obrigatório')
    .min(5, 'O nome deve conter no mínimo 5 caracteres'),

  email: yup.string().required('E-mail é obrigatório').email('E-mail inválido'),

  telefone: yup.string().required('O telefone é obrigatório').matches(/^\d+$/, 'Apenas números'),

  area: yup.string().required('Selecione uma área'),

  conheceu: yup.string().required('Selecione aonde você conheceu a SGBR'),

  curriculo: yup
    .mixed<File>()
    .required('Currículo é obrigatório')
    .test('fileType', 'Apenas PDF é permitido', (value?: File) => {
      return !!value && value.type === 'application/pdf';
    })
    .test('fileType', 'Máximo 2MB', (value?: File) => {
      return value ? value.size <= 2 * 1024 * 1024 : false;
    }),
  termos: yup.boolean().default(false).oneOf([true]),
});
