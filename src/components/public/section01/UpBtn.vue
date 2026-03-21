<template>
    <q-btn v-show="showBtn" icon="keyboard_double_arrow_up" color="primary" round unelevated
        class="fixed bottom-6 right-6 z-50 shadow-md" @click="RiseTop" />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';


const showBtn = ref(false);
const observeScroll = ref(0);

const handleScroll = () => {
    showBtn.value = window.scrollY > observeScroll.value
}


function RiseTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

onMounted(() => {
    const section = document.getElementById('#Pinicio');
    observeScroll.value = section?.offsetHeight || 100;


    window.addEventListener('scroll', handleScroll);
});


onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
})


</script>