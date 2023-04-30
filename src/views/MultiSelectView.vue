<template>
  <MultiSelClear :options="cities" v-model="selectedCities" />
</template>

<script setup>
import MultiSelClear from "@/components/MultiSelClear.vue";
import {ref} from "vue";

const selectedCities = ref([]);
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
]);
</script>
