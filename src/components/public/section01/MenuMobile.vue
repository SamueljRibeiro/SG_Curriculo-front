<template>
  <q-drawer
    :model-value="modelValue"
    @update:model-value="(val: boolean) => emit('update:modelValue', val)"
    side="left"
    behavior="mobile"
    :width="300"
    class="bg-[#007AFF] text-white w-[100%] pt-5"
  >
    <div class="relative flex justify-end bg-transparent pr-3 pb-3">
      <q-btn
        icon="close"
        class="hover:scale-[0.95] transition-transform duration-300"
        lat
        flat
        round
        unelevated
        @click="emit('update:modelValue', false)"
      />
    </div>
    <nav class="flex gap-3 text-base flex-col items-center">
      <q-btn
        flat
        no-caps
        @click="click('Pinicio')"
        label="Início"
        class="text-base p-4 w-64 bg-slate-50 text-[#007AFF] rounded-md hover:scale-[0.95] transition-transform duration-300"
        :ripple="false"
      />
      <q-btn
        flat
        no-caps
        @click="click('Pbeneficio')"
        label="Benefícios"
        class="text-base p-4 w-64 hover:scale-[0.95] transition-transform duration-300"
      />
      <q-btn
        flat
        no-caps
        @click="click('Pvaga')"
        label="Currículo"
        class="text-base p-4 w-64 hover:scale-[0.95] transition-transform duration-300"
      />
    </nav>

    <q-separator dark inset class="mt-5" />

    <div class="flex items-center justify-center mt-6">
      <nav>
        <a href="https://www.instagram.com/sgbrsistemas/"
          ><q-btn
            icon="mdi-instagram"
            round
            class="mr-3 hover:scale-[0.95] transition-transform duration-300"
        /></a>
        <a href="https://www.facebook.com/sgbrsistemas/?locale=pt_BR"
          ><q-btn
            icon="mdi-facebook"
            round
            class="mr-3 hover:scale-[0.95] transition-transform duration-300"
        /></a>
        <a href="https://br.linkedin.com/company/sgbrsistemas"
          ><q-btn
            icon="mdi-linkedin"
            round
            class="mr-3 hover:scale-[0.95] transition-transform duration-300"
        /></a>
        <a href="https://www.youtube.com/sgbrsistemas"
          ><q-btn
            icon="mdi-youtube"
            round
            class="hover:scale-[0.95] transition-transform duration-300"
        /></a>
      </nav>
    </div>

    <div class="absolute bottom-2 left-1/2 -translate-x-1/2">
      <p>Deus seja louvado!</p>
    </div>
  </q-drawer>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (e: 'navigate', sectionId: string): void;
  (e: 'update:modelValue', value: boolean): void;
}>();

function click(sectionId: string) {
  emit('navigate', sectionId);
}
</script>
