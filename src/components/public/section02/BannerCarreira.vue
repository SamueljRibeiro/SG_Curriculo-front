<template>
  <div class="flex items-center justify-center lg:mt-12">
    <div>
      <q-img class="h-auto w-80 md:w-[450px] lg:w-[550px] drop-shadow-lg" :src="image" />
    </div>
    <div class="max-w-[342px] md:max-w-[650px] lg:mr-0 lg:ml-14">
      <q-card class="rounded-lg">
        <q-card-section class="bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 px-6 py-6">
          <div class="leading-relaxed">
            <p class="text-green-50 text-base lg:text-xl mb-3">
              Com anos de experiência no desenvolvimento de soluções tecnológicas, a SGBR Sistemas
              cria ferramentas que impulsionam eficiência, inovação e resultados reais para empresas
              de diferentes segmentos.
            </p>

            <p class="text-gray-200 text-lg mb-4">
              Venha construir o futuro da tecnologia conosco, contribuindo para soluções
              inteligentes que conectam pessoas, processos e oportunidades.
            </p>
          </div>

          <q-btn label="Verificar vagas disponíveis"
            class="text-sm text-white p-4 px-6 bg-blue-700 hover:shadow-lg hover:bg-blue-600 hover:scale-[0.95] transition-transform duration-300 rounded-md"
            @click="click('Pvaga')" />
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import image from 'src/assets/IMG/Image-1.png';

const emit = defineEmits<{
  (e: 'navigate', sectionId: string): void;
}>();

function click(sectionId: string) {
  emit('navigate', sectionId);
}
</script>
