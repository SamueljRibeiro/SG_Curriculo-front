<template>
  <div class="q-px-lg q-py-md">
    <q-timeline :layout="layout" color="primary">
      <q-timeline-entry heading class="text-3xl lg:text-6xl font-bold">
        Nossos <strong class="text-blue-500">Benefícios</strong></q-timeline-entry
      >
      <q-timeline-entry
        subtitle="Cuidando de você e da sua família!"
        icon="mdi-heart-pulse"
        side="left"
      >
        <template #title>
          <div
            class="text-2xl font-extrabold bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text inline-block"
          >
            Auxílio saúde
          </div>
        </template>

        <div class="flex items-center lg:justify-end gap-8">
          <div class="lg:w-1/2 flex items-center text-gray-700 leading-relaxed max-w-md">
            Oferecemos auxílio saúde para garantir mais segurança e tranquilidade a você e sua
            família. Nosso objetivo é proporcionar acesso a atendimento médico de qualidade,
            promovendo prevenção, cuidado e bem-estar em todas as fases da vida.
          </div>

          <div class="w-1/2 mb-2 max-xl:hidden lg:flex">
            <q-img class="rounded-xl hover:scale-105 transition-all duration-300" :src="imgFundo" />
          </div>
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        subtitle="Facilitando seu deslocamento com conforto e praticidade!"
        icon="mdi-bus"
        side="right"
      >
        <template #title>
          <div
            class="text-2xl font-extrabold bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text inline-block"
          >
            Transporte
          </div>
        </template>
        <div class="flex gap-8">
          <div class="lg:w-1/2 text-gray-700">
            Pensando na sua comodidade, oferecemos auxílio transporte para facilitar o deslocamento
            entre sua casa e o trabalho. Mais praticidade, economia e tranquilidade no seu dia a
            dia.
          </div>

          <div class="w-1/2 mb-2 max-xl:hidden lg:flex">
            <q-img
              class="rounded-xl hover:scale-105 transition-all duration-300 h-64"
              fit="cover"
              :src="imgOnibus"
            />
          </div>
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        subtitle="Refeições de qualidade para mais energia no seu dia!"
        icon="mdi-silverware-fork-knife"
        side="left"
      >
        <template #title>
          <div
            class="text-2xl font-extrabold bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text inline-block"
          >
            Almoço
          </div>
        </template>
        <div class="flex items-center lg:justify-end gap-8">
          <div class="lg:w-1/2 flex items-center text-gray-700 leading-relaxed max-w-md">
            Disponibilizamos benefício de alimentação para que você tenha refeições equilibradas e
            de qualidade durante sua jornada de trabalho. Mais energia, disposição e foco para
            desempenhar suas atividades com excelência.
          </div>

          <div class="w-1/2 mb-2 max-xl:hidden lg:flex">
            <q-img
              class="rounded-xl hover:scale-105 transition-all duration-300 h-64"
              fit="cover"
              :src="imgComida"
            />
          </div>
        </div>
      </q-timeline-entry>

      <q-timeline-entry subtitle="Conforto e descanso ao seu alcance!" icon="mdi-pool" side="right">
        <template #title>
          <div
            class="text-2xl font-extrabold bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text inline-block"
          >
            Piscina e hidromassagem
          </div>
        </template>
        <div class="flex gap-8">
          <div class="lg:w-1/2 text-gray-700">
            Um espaço dedicado ao relaxamento e à qualidade de vida. A piscina e a hidromassagem
            proporcionam momentos de descanso, ajudando a reduzir o estresse e renovar as energias.
          </div>

          <div class="w-1/2 mb-2 max-xl:hidden lg:flex">
            <q-img
              class="rounded-xl hover:scale-105 transition-all duration-300 h-64"
              fit="cover"
              :src="imgPiscina"
            />
          </div>
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        subtitle="Em breve, mais qualidade de vida para você!"
        icon="mdi-dumbbell"
        side="left"
      >
        <template #title>
          <div
            class="text-2xl font-extrabold bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text inline-block"
          >
            Academia
          </div>
        </template>
        <div class="flex items-center lg:justify-end gap-8">
          <div class="w-1/2 flex items-center text-gray-700 leading-relaxed max-w-md">
            Em breve, você contará com um espaço completo para a prática de atividades físicas.
            Acreditamos que investir na saúde física é essencial para o equilíbrio, a produtividade
            e o bem-estar.
          </div>

          <div class="lg:w-1/2 mb-2 max-xl:hidden lg:flex">
            <q-img class="rounded-xl hover:scale-105 transition-all duration-300" :src="imgFundo" />
          </div>
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        subtitle="Atividades esportivas para saúde e lazer!"
        icon="mdi-basketball"
        side="right"
      >
        <template #title>
          <div
            class="text-2xl font-extrabold bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text inline-block"
          >
            Quadra de futebol, beach tennis e paddel
          </div>
        </template>
        <div class="flex gap-8">
          <div class="lg:w-1/2 text-gray-700">
            Incentivamos a prática esportiva como forma de promover saúde, integração e espírito de
            equipe. Nossas quadras oferecem um ambiente ideal para momentos de lazer e convivência
            entre colaboradores.
          </div>

          <div class="lg:w-1/2 mb-2 max-xl:hidden lg:flex">
            <q-img
              class="rounded-xl hover:scale-105 transition-all duration-300 h-64"
              fit="cover"
              :src="imgQuadras"
            />
          </div>
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        subtitle="Um ambiente descontraído para relaxar e socializar!"
        icon="mdi-gamepad-variant"
        side="left"
      >
        <template #title>
          <div
            class="text-2xl font-extrabold bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text inline-block"
          >
            Espaço de jogos com videogames
          </div>
        </template>
        <div class="flex items-center lg:justify-end gap-8">
          <div class="lg:w-1/2 flex items-center text-gray-700 leading-relaxed max-w-md">
            Um ambiente descontraído para pausas estratégicas e momentos de diversão. O espaço de
            jogos estimula a criatividade, reduz o estresse e fortalece o relacionamento entre a
            equipe.
          </div>

          <div class="w-1/2 mb-2 max-xl:hidden lg:flex">
            <q-img
              class="rounded-xl hover:scale-105 transition-all duration-300 h-64"
              fit="cover"
              :src="imgPlay"
            />
          </div>
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        subtitle="Cuidado e relaxamento para o seu dia a dia!"
        icon="mdi-spa"
        side="right"
      >
        <template #title>
          <div
            class="text-2xl text-gray-800 transition-colors duration-300 font-extrabold bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text inline-block"
          >
            Massagista
          </div>
        </template>
        <div class="flex gap-8">
          <div class="lg:w-1/2 mb-10 lg:mb-2 text-gray-700">
            Disponibilizamos atendimento com massagista para proporcionar alívio de tensões e
            relaxamento durante a rotina de trabalho. Um cuidado especial com a sua saúde física e
            mental.
          </div>

          <div class="w-1/2 mb-32 max-xl:hidden lg:flex">
            <q-img
              class="rounded-xl hover:scale-105 transition-all duration-300 h-64"
              fit="cover"
              :src="imgMassagem"
            />
          </div>
        </div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script setup lang="ts">
import imgFundo from 'src/assets/IMG/ImagecardFundo.png';
import imgOnibus from 'src/assets/IMG/img-beneficios/DJI_0803.jpg.jpeg';
import imgPiscina from 'src/assets/IMG/img-beneficios/IMG_2100-2.jpg.jpeg';
import imgComida from 'src/assets/IMG/img-beneficios/IMG_4539.jpg.jpeg';
import imgPlay from 'src/assets/IMG/img-beneficios/IMG_4549.jpg.jpeg';
import imgMassagem from 'src/assets/IMG/img-beneficios/IMG_4132.jpg.jpeg';
import imgQuadras from 'src/assets/IMG/img-beneficios/DJI_0802.jpg (1).jpeg';

import { useQuasar } from 'quasar';
import { computed } from 'vue';

const $q = useQuasar();

const layout = computed(() => {
  return $q.screen.lt.sm ? 'dense' : $q.screen.lt.md ? 'comfortable' : 'loose';
});
</script>
