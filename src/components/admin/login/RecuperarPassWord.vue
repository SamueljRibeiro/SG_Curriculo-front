<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="flex flex-center rounded-sm" padding>
        <q-card class="p-7 rounded-lg" style="width: 100%; max-width: 400px">
          <q-card-section>
            <div class="text-h5 text-weight-bold text-center q-mb-md">Recuperar Senha</div>
          </q-card-section>

          <q-card-section>
            <q-form class="q-gutter-y-md">
              <q-input v-model="email" type="email" label="E-mail">
                <template v-slot:prepend>
                  <q-icon name="mail" />
                </template>
              </q-input>
            </q-form>
          </q-card-section>

          <q-card-actions align="center" class="q-px-md q-pb-lg">
            <q-btn label="Enviar link de recuperação" class="full-width" />
            <div class="q-mt-sm">
              <a href="" class="text-primary">Voltar ao login</a>
            </div>
          </q-card-actions>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref();
</script>
