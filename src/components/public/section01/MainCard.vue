<template>
  <div v-if="layout.isDesktop" class="relative items-center justify-center max-xl:hidden lg:flex xl:mt-10">
    <div class="shadow-2xl z-20 rounded-xl">
      <q-card class="w-[100%] max-w-[600px] xl:max-w-[360px] rounded-xl">
        <q-img :src="trabalheConosco">
          <div class="absolute-bottom text-h6">CONHEÇA A EMPRESA</div>
        </q-img>

        <q-card-section>
          <div class="text-black">
            <p>
              “S” de Sistema, “G” de gerencial e “Br” de Brasil, o significado das letras fazem jus
              ao nosso compromisso em atender todo o país. O projeto surge em 2010 com um sistema
              capaz de atender todos os estados brasileiros e devidamente homologado nas secretarias
              estaduais da fazenda. Ao término de 2012 a SGBr® finaliza sua primeira solução em
              software, o SG Master, e inicia o processo de homologação, obtendo seu laudo técnico
              em conformidade com a legislação fiscal brasileira.
            </p>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div
      class="absolute rounded-xl translate-x-8 translate-y-2 rotate-6 z-10 shadow-2xl "
    >
      <q-card class="w-[360px] h-[510px] rounded-x rounded-xl bg-slate-300">
        <q-img :src="imgFundo" class="">
          <div class="absolute-bottom text-h6">CONHEÇA A EMPRESA</div>
        </q-img>

        <q-card-section>
          <div class="text-black">
            <p>
              “S” de Sistema, “G” de gerencial e “Br” de Brasil, o significado das letras fazem jus
              ao nosso compromisso em atender todo o país. O projeto surge em 2010 com um sistema
              capaz de atender todos os estados brasileiros e devidamente homologado nas secretarias
              estaduais da fazenda. Ao término de 2012 a SGBr® finaliza sua primeira solução em
              software, o SG Master, e inicia o processo de homologação, obtendo seu laudo técnico
              em conformidade com a legislação fiscal brasileira.
            </p>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import trabalheConosco from 'src/assets/IMG/Trabalhar-conosco.png';
import imgFundo from 'src/assets/IMG/ImagecardFundo.png';
import { useLayout } from 'src/composable/public/useLayout'

const { layout } = useLayout();
</script>
