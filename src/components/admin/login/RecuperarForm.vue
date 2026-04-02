<template>
  <q-card class="p-7 rounded-lg" style="width: 100%; max-width: 400px">
    <q-card-section>
      <div class="text-h5 text-weight-bold text-center q-mb-md text-blue-500">Recuperar Senha</div>
      <div class="text-subtitle2 text-center text-grey-7">Esqueceu sua senha?</div>
    </q-card-section>

    <q-card-section>
      <q-form class="q-gutter-y-md">
        <q-input v-model="email" type="email" label="E-mail">
          <template v-slot:prepend>
            <q-icon name="mail" color="primary" />
          </template>
        </q-input>
      </q-form>
    </q-card-section>

    <q-card-actions align="center" class="q-px-md q-pb-lg">
      <q-btn
        label="Enviar link de recuperação"
        class="full-width text-sm rounded-md mb-3"
        color="primary"
      />

      <div class="q-mt-sm">
        <router-link to="login" class="cursor-pointer text-primary">Voltar ao login</router-link>
      </div>
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref();
</script>
