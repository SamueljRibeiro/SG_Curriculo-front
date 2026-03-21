<template>
  <div class="relative flex justify-center items-center flex-col">
    <div
      class="text-center text-3xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text inline-block mt-24 lg:mt-40 mb-20">
      <p>Conheça os valores da SGBR</p>
      <p>que moldam a empressa</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 lg:mb-40">
      <div v-for="card in cardvalue" :key="card.text">
        <q-card
          class="max-w-[300px] lg:max-w-[400px] h-64 text-center flex justify-center items-center rounded-lg lg:hover:scale-105 transition-transform duration-300">
          <q-icon class="pt-5 text-blue-500 text-5xl" :name="card.icon" />

          <q-card-section>
            <div class="text-base font-bold text-gray-700">
              <p>{{ card.text }}</p>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
interface cards {
  text: string;
  icon: string;
}

const cardvalue = reactive<cards[]>([
  {
    text: 'Acreditamos no potencial das pessoas. Incentivamos o aprendizado contínuo e oferecemos oportunidades para que cada profissional evolua junto com a empresa.',
    icon: 'mdi-rocket-launch-outline',
  },
  {
    text: 'Valorizamos o trabalho em equipe, a troca de ideias e o respeito entre todos. Aqui, cada voz importa e cada talento contribui para construir algo maior.',
    icon: 'mdi-handshake-outline',
  },
  {
    text: 'Buscamos um ambiente saudável, acolhedor e motivador, onde as pessoas se sintam valorizadas e tenham orgulho de fazer parte da nossa história.',
    icon: 'mdi-lightbulb-on-outline',
  },
]);
</script>
