<template>
  <div class="home">
    Значение переменной директивы v-model: {{ time }}
    <TimePicker v-model="time" />
  </div>
</template>

<script setup>
import {ref} from "vue";
import TimePicker from "@/components/TimePicker.vue";

const time = ref();
</script>
