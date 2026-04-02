<template>
  <q-card class="p-7 rounded-lg" style="width: 100%; max-width: 400px">
    <q-card-section>
      <div class="text-h5 text-weight-bold text-center q-mb-md text-blue-500" color="primary">SG Currículo</div>
      <div class="text-subtitle2 text-center text-grey-7">Faça login para continuar</div>
    </q-card-section>

    <q-card-section>
      <q-form class="q-gutter-y-md">
        <q-input v-model="email" type="email" label="E-mail">
          <template v-slot:prepend>
            <q-icon name="mail" color="primary" />
          </template>
        </q-input>

        <q-input v-model="password" :type="isPwd ? 'password' : 'text'" label="Senha">
          <template v-slot:prepend>
            <q-icon name="lock" color="primary" />
          </template>
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer "
              color="primary"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
        <div class="q-mt-sm">
          <router-link to="recuperar" class="cursor-pointer text-primary"
            >Esqueceu sua senha?</router-link
          >
        </div>
      </q-form>
    </q-card-section>

    <q-card-actions align="center" class="q-px-md q-pb-lg mt-4">
    <q-btn label="Entrar" class="full-width text-sm rounded-md" color="primary"  />
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref();
const password = ref();
const isPwd = ref(true);
</script>
