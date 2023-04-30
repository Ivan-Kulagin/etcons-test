<template>
  <Calendar
      id="time"
      timeOnly
      showIcon
      showButtonBar
      placeholder="Select Time"
      v-model="time"
      @update:modelValue="updateTime"
  >
    <template v-slot:dropdownicon><i class="pi pi-calendar" /></template>
  </Calendar>
</template>

<script setup>
import {computed, ref} from "vue";
import Calendar from "primevue/calendar";

const time = ref();

// eslint-disable-next-line no-undef
const props = defineProps({
  modelValue: null
});

// eslint-disable-next-line no-undef
const emit = defineEmits(['update:modelValue'])

function updateTime() {
  emit('update:modelValue', formatDate(time.value))
}

function formatDate(value) {
  // после завершения выбора времени @blur форматируется переменная time согласно HH:mm
  if (!(value instanceof Date)) return null
  return `${String(value.getHours()).padStart(2, "0")}:${String(value.getMinutes()).padStart(2, "0")}`;
}
</script>