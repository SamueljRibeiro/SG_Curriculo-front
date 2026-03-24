<template>
  <div class="flex justify-center mt-96">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
      <div class="flex flex-col items-center lg:items-baseline gap-5">
        <div
          class="flex items-center justify-center shadow-md gap-2 mt-10 md:text-2xl font-semibold rounded-full bg-gradient-to-r text-white from-blue-700 to-blue-500 p-3 w-[60%]"
        >
          <q-icon class="text-2xl md:text-4xl" name="mdi-briefcase-outline" />
          <p>Trabalhe conosco</p>
        </div>

        <div class="flex items-center justify-center flex-col lg:block">
          <p
            class="font-semibold items-center mb-4 text-5xl md:text-6xl bg-gradient-to-r text-white from-blue-700 to-blue-800 text-transparent bg-clip-text inline-block"
          >
            Envie seu <br />
            currículo
          </p>
          <p class="text-gray-700 lg:text-base text-center lg:text-left">
            Faça parte da nossa equipe! Estamos sempre em busca <br />
            de talentos para juntos construirmos soluções inovadoras <br />
            e transformarmos o mercado.
          </p>
        </div>
      </div>
      <div>
        <div class="bg-white p-6 sm:p-10 rounded-2xl w-[342px] md:w-[450px] mx-auto shadow-md">
          <q-form @submit.prevent="onSubmit" class="w-full">
            <label class="text-blue-600">Nome <strong class="text-red-600">*</strong></label>
            <q-input
              v-model="nome"
              :error="!!errors.nome"
              :error-message="errors.nome"
              outlined
              label="Nome completo"
              class="w-full mb-2"
            />
            <label class="text-blue-600">Telefone <strong class="text-red-600">*</strong></label>
            <q-input
              v-model="telefone"
              :error="!!errors.telefone"
              :error-message="errors.telefone"
              outlined
              label="Telefone"
              color="blue-8"
              class="w-full mb-2"
            />
            <label class="text-blue-600">E-mail <strong class="text-red-600">*</strong></label>
            <q-input
              v-model="email"
              :error="!!errors.email"
              :error-message="errors.email"
              outlined
              label="E-mail"
              class="w-full mb-2"
            />
            <label class="text-blue-600">Aréa<strong class="text-red-600">*</strong></label>
            <q-select
              v-model="setor"
              :options="areas"
              outlined
              emit-value
              map-options
              :error="!!errors.setor"
              :error-message="errors.setor"
              label="Selecione uma aréa"
              class="w-full mb-2"
            />
            <label class="text-blue-600"
              >Como nos conheceu? <strong class="text-red-600">*</strong></label
            >
            <q-select
              v-model="conheceu"
              :options="conheceuS"
              outlined
              emit-value
              map-options
              :error="!!errors.conheceu"
              :error-message="errors.conheceu"
              label="Como conheceu a SGBR?"
              class="bg-white w-full mb-2"
            />
            <label class="text-blue-600"
              >Insira aqui seu currículo <strong class="text-red-600">*</strong></label
            >
            <br />
            <label class="text-xs"
              ><strong class="text-blue-500">Formatos suporados:</strong> PDF |
              <strong class="text-blue-500">Max:</strong> 2MB</label
            >
            <div class="flex justify-center">
              <q-file
                v-model="documento"
                label="Arraste ou clique para adicionar um arquivo"
                color="primary"
                accept=".pdf"
                rounded
                outlined
                dense
                :error="!!errors.documento"
                :error-message="errors.documento"
                class="bg-white w-full items-center"
              >
                <template v-slot:prepend>
                  <q-icon name="attach_file" />
                </template>
              </q-file>
            </div>

            <q-checkbox
              v-model="termos"
              :toggle-termos="false"
              :error="!!errors.termos"
              :error-message="errors.termos"
              class="mb-5"
            >
              <span class="text-[12px] text-zinc-800">
                Eu aceito os
                <a
                  class="text-blue-600 underline"
                  href="https://sgbr.com.br/"
                  target="_blank"
                  @click.stop
                  >termos de uso</a
                >
                e o compartilhamento de dados conforme estabelecido na
                <a
                  class="text-blue-600 underline"
                  href="https://sgbr.com.br/"
                  target="_blank"
                  @click.stop
                  >legislação da LGPD</a
                >.
              </span>
            </q-checkbox>

            <div class="flex justify-center">
              <q-btn
                type="submit"
                label="Enviar"
                color="primary"
                :loading="isSubmitting"
                class="w-[90%] text-blue-600 p-2 rounded-lg hover:scale-[0.95] transition-transform duration-300"
              />
            </div>
          </q-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import { schema } from 'src/composable/public/useCurriculo.schemas';
import { useCandidatoStore } from 'src/stores/public/canditadoStrore';
import type * as typesInterface from 'src/Types/TypesInterface';

const store = useCandidatoStore();

const { handleSubmit, errors, defineField, resetForm, isSubmitting } =
  useForm<typesInterface.FormCurriculo>({
    validationSchema: schema,
    initialValues: {
      nome: '',
      email: '',
      telefone: '',
      setor: '',
      conheceu: '',
      documento: null,
      termos: false,
    },
  });

const [nome] = defineField('nome');
const [email] = defineField('email');
const [telefone] = defineField('telefone');
const [setor] = defineField('setor');
const [conheceu] = defineField('conheceu');
const [documento] = defineField('documento');
const [termos] = defineField('termos');

// teste

const onSubmit = handleSubmit(async (values: typesInterface.FormCurriculo) => {
  try {
    const formData = new FormData();

    formData.append('nome', values.nome);
    formData.append('email', values.email);
    formData.append('telefone', values.telefone);
    formData.append('setor', values.setor);
    formData.append('como_conheceu', values.conheceu);

    if (values.documento) {
      formData.append('documento', 'documento.pdf');
    }

    await store.curriculoEnviar(formData);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    alert('deu certo');

    resetForm();
  } catch (error) {
    console.error(error);
  }
});

const areas = [
  { label: 'Front-End', value: 'frontend' },
  { label: 'Back-End', value: 'backend' },
  { label: 'Suporte', value: 'suporte' },
];

const conheceuS = [
  { label: 'Front-End', value: 'frontend' },
  { label: 'Back-End', value: 'backend' },
  { label: 'Suporte', value: 'suporte' },
];
</script>
