<template>
  <q-layout>
    <header
      :class="[layout.MenuMargin]"
      class="absolute top-6 left-1/2 -translate-x-1/2 h-16 w-[90%] max-w-6xl bg-transparent text-white flex items-center px-6 rounded-full shadow-[0_4px_12px_rgba(255,255,255,0.15)] z-[1000]"
    >
      <div class="flex justify-between items-center w-[100%] lg:w-[90%]">
        <div class="lg:ml-14 cursor-pointer">
          <a href="https://sgbr.com.br/"
            ><img class="h-auto w-24" src="/src/assets/IMG/logo-sgbr.png" alt=""
          /></a>
        </div>

        <nav v-if="layout.deskMenu" class="flex gap-10 text-base">
          <q-btn
            flat
            no-caps
            @click="scroll('Pinicio')"
            label="Início"
            class="hover:scale-105 transition-transform duration-300 cursor-pointer rounded-xl"
          />
          <q-btn
            flat
            no-caps
            @click="scroll('Pbeneficio')"
            label="Benefícios"
            class="hover:scale-105 transition-transform duration-300 cursor-pointer rounded-xl"
          />
          <q-btn
            flat
            no-caps
            @click="scroll('Pvaga')"
            label="Currículo"
            class="hover:scale-105 transition-transform duration-300 cursor-pointer rounded-xl"
          />
        </nav>

        <q-btn
          v-else
          icon="menu"
          class="hover:scale-[0.95] transition-transform duration-300"
          @click="menuOpen"
          flat
          dense
          round
        />
      </div>
    </header>
    <div>
      <MenuMobile v-model="openMenu" @navigate="scrollMobile" />
    </div>
    <q-page-container class="flex-1 overflow-x-hidden" :layout="layout">
      <q-page>
        <!-- Section 01-->
        <section
          class="h-[500px] md:h-h-screen lg:min-h-screen py-20 shadow-lg flex items-center text-white z-10 bg-cover bg-center bg-slate-700 bg-[url('src/assets/IMG/image.png')]"
          id="Pinicio"
        >
          <div
            :class="[layout.sectiGridCol, layout.gap, layout.sectiPadding]"
            class="max-w-7xl mx-auto w-full grid pl-4 lg:items-center"
          >
            <div class="sm:space-y-6">
              <h1 class="text-4xl sm:text-5xl lg:text-[4.1rem] leading-tight font-bold">
                Venha fazer <br />
                parte <br />do <strong class="text-blue-500">nosso time!</strong>
              </h1>
              <p
                class="mt-4 max-w-xl text-gray-300 sm:text-xl lg:text-base tracking-widest sm:tracking-normal w-[90%] sm:w-[100%]"
              >
                Somos uma empresa em constante crescimento, valorizamos pessoas e acreditamos no
                desenvolvimento profissional.
              </p>
            </div>

            <card />
          </div>
        </section>

        <!-- Section 02-->
        <section
          class="bg-gray-50 flex items-center justify-center flex-col min-h-screen py-20"
          id="Pbeneficio"
        >
          <BannerCarreira @navigate="scrollver" />

          <ValueSGBR />

          <MainCardBeneficios />
        </section>

        <!-- Section 03-->

        <section class="bg-gray-100 min-h-screen py-20 relative" id="Pvaga">
          <CardModalBeneficios />

          <Vagas />

          <FiqueConnected />
        </section>

        <UpBtn />
      </q-page>
    </q-page-container>
    <LayoutFooter />
  </q-layout>
</template>

<script setup lang="ts">
import card from 'src/components/public/section01/MainCard.vue';
import MainCardBeneficios from 'src/components/public/section02/MainCardBeneficios.vue';
import CardModalBeneficios from 'src/components/public/section02/CardModalBeneficios.vue';
import ValueSGBR from 'src/components/public/section02/ValueSGBR.vue';
import BannerCarreira from 'src/components/public/section02/BannerCarreira.vue';
import UpBtn from 'src/components/public/section01/UpBtn.vue';
import MenuMobile from 'src/components/public/section01/MenuMobile.vue';
import Vagas from 'src/components/public/section03/EntregaCurriculo.vue';
import LayoutFooter from 'src/components/public/footer/LayoutFooter.vue';
import FiqueConnected from 'src/components/public/section03/FiqueConnected.vue';
import { useLayout } from 'src/composable/public/useLayout';

import { ref } from 'vue';

const { layout } = useLayout();

const openMenu = ref(false);

function menuOpen() {
  openMenu.value = !openMenu.value;
}

/// scroll Menu desktop

const scroll = (id: string) => {
  const ids = document.getElementById(id);
  if (!ids) return;

  ids.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

/// Scroll BannerCarreira

const scrollver = (sectionId: string) => {
  const ids = document.getElementById(sectionId);
  if (!ids) return;

  ids.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
  console.log('tesda');
};

/// Scroll Menu mobile

const scrollMobile = (sectionId: string) => {
  openMenu.value = false;

  setTimeout(() => {
    const sM = document.getElementById(sectionId);
    if (!sM) return;

    sM.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, 300);
};
</script>
