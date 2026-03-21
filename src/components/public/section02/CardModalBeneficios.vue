<template>
  <div
    class="absolute -top-28 left-1/2 -translate-x-1/2 bg-gradient-to-b border border-blue-100 from-gray-50 to-gray-200 rounded-md shadow-md w-[93%] lg:w-[80%] text-center"
  >
    <div class="py-16">
      <p class="text-lg md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">
        Gostou do que viu? <br />
        <span class="text-blue-500">Descubra outros benefícios preparados para você.</span>
      </p>
      <div class="pt-4">
        <q-btn
          color="primary"
          class="rounded-md p-4 lg:w-[20%] hover:scale-[0.95] transition-transform duration-300"
          label="Outros benefícios"
          @click="modalBeneficio = true"
        />
      </div>
    </div>

    <q-dialog v-model="modalBeneficio" persistent>
      <q-card class="max-w-lg px-6 py-6">
        <q-card-section class="row items-center q-pb-none">
          <div
            class="text-h6 font-extrabold bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text inline-block"
          >
            Benefícios
          </div>
          <q-space />
          <q-btn icon="mdi-close" flat round dense v-close-popup color="primary" />
        </q-card-section>
        <q-separator dark inset class="mt-5 bg-gray-300" />

        <q-card-section class="grid grid-cols-1 lg:grid-cols-2">
          <div
            v-for="cards in card"
            :key="cards.title"
            class="p-2 gap-4  transition-all duration-300 rounded-md"
          >
            <div
              :class="cards.bgColor"
              class="flex items-center justify-center w-[30%] bg-blue-400 mb-1 p-4 rounded-xl text-cyan-50"
            >
              <q-icon class="text-4xl" :name="cards.icon"></q-icon>
            </div>
            <div class="pb-4">
              <p class="font-bold">{{ cards.title }}</p>
              <q-separator dark class="bg-gray-300 w-48 my-2" />
              <P class="text-gray-700">{{ cards.text }}</P>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

const modalBeneficio = ref(false);

interface CardBenficios {
  title: string;
  icon: string;
  bgColor: string;
  text: string;
}

const card = reactive<CardBenficios[]>([
  {
    title: 'Máquina italiana de café',
    icon: 'mdi-coffee-maker',
    bgColor: 'bg-gradient-to-r from-amber-700 to-amber-500',
    text: 'Café disponível durante todo expediente para você.',
  },
  {
    title: 'Manicure',
    icon: 'mdi-face-woman-shimmer',
    bgColor: 'bg-gradient-to-r from-purple-700 to-purple-500',
    text: 'Cuidados especiais para elevar sua autoestima e bem-estar.',
  },
  {
    title: 'Ginástica laboral',
    icon: 'mdi-yoga',
    bgColor: 'bg-gradient-to-r from-green-700 to-green-400',
    text: 'Exercícios guiados para mais saúde, disposição e qualidade no trabalho.',
  },
  {
    title: 'Espaço de descanso',
    icon: 'mdi-sofa',
    bgColor: 'bg-gradient-to-r from-blue-700 to-blue-400',
    text: 'Um ambiente confortável para relaxar e renovar as energias.',
  },
  {
    title: 'Quiosque com churrasqueira',
    icon: 'mdi-grill',
    bgColor: 'bg-gradient-to-r from-red-700 to-red-400',
    text: 'Espaço ideal para confraternizações.',
  },
  {
    title: 'Espaço Integrado',
    icon: 'mdi-account-group',
    bgColor: 'bg-gradient-to-r from-sky-700 to-sky-400',
    text: 'Área pensada para conexão, colaboração e troca de ideias.',
  },
]);
</script>
