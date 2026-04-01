<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="flex flex-center rounded-sm" padding>
        <q-card class="p-7 rounded-lg" style="width: 100%; max-width: 400px">
          <q-card-section>
            <div class="text-h5 text-weight-bold text-center q-mb-md">SG Currículo</div>
            <div class="text-subtitle2 text-center text-grey-7">Faça login para continuar</div>
          </q-card-section>

          <q-card-section>
            <q-form class="q-gutter-y-md">
              <q-input v-model="email" type="email" label="E-mail">
                <template v-slot:prepend>
                  <q-icon name="mail" />
                </template>
              </q-input>

              <q-input v-model="password" :type="isPwd ? 'password' : 'text'" label="Senha">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
              <div class="q-mt-sm">
                <a href="" class="text-primary">Esqueceu sua senha?</a>
              </div>
            </q-form>
          </q-card-section>

          <q-card-actions align="center" class="q-px-md q-pb-lg">
            <q-btn label="Entrar" class="full-width" />
          </q-card-actions>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref();
const password = ref();
const isPwd = ref(true);
</script>
