<template>
  <div class="home">
    <Calendar
        id="time"
        timeOnly
        showIcon
        showButtonBar
        placeholder="Select Time"
        v-model="time"
        @blur="formatDate()"
    >
      <template v-slot:dropdownicon><i class="pi pi-calendar" /></template>
    </Calendar>
  </div>
</template>

<script setup>
import {ref, defineComponent} from "vue";
import Calendar from "primevue/calendar";

defineComponent({
    name: 'TimePicker',
    components: {
      Calendar
    }}
);
const time = ref();

function formatDate () {
  // после завершения выбора времени @blur форматируется переменная time согласно HH:mm
  if (!(time.value instanceof Date)) return
  time.value = `${String(time.value.getHours()).padStart(2, "0")}:${String(time.value.getMinutes()).padStart(2, "0")}`;
}

</script>
