<template>
  <div class="flex justify-center items-center mt-44">
    <div
      class="bg-gradient-to-r text-white from-blue-700 to-blue-500 shadow-md rounded-xl p-16 lg:flex justify-between items-center w-[342px] md:w-[80%]"
    >
      <div>
        <h2 class="text-lg lg:text-4xl font-semibold mb-2 text-center lg:text-left">
          Fique conectado com a gente!
        </h2>

        <p class="text-gray-50 text-xs lg:text-sm text-center md:text-left">
          Acompanhe nossas redes sociais e fique por dentro de novidades, projetos e futuras
          oportunidades para fazer parte do nosso time.
        </p>
      </div>

      <div class="flex items-center justify-center mt-6">
        <nav class="grid grid-cols-4 gap-5">
          <a href="https://www.instagram.com/sgbrsistemas/" target="_blank"
            ><q-btn
              icon="mdi-instagram"
              round
              class="lg:text-lg hover:scale-[0.95] transition-transform duration-300"
          /></a>
          <a href="https://www.facebook.com/sgbrsistemas/?locale=pt_BR" target="_blank"
            ><q-btn
              icon="mdi-facebook"
              round
              class="lg:text-lg hover:scale-[0.95] transition-transform duration-300"
          /></a>
          <a href="https://br.linkedin.com/company/sgbrsistemas" target="_blank"
            ><q-btn
              icon="mdi-linkedin"
              round
              class="lg:text-lg hover:scale-[0.95] transition-transform duration-300"
          /></a>
          <a href="https://www.youtube.com/sgbrsistemas" target="_blank"
            ><q-btn
              icon="mdi-youtube"
              round
              class="hover:scale-[0.95] lg:text-lg transition-transform duration-300"
          /></a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
