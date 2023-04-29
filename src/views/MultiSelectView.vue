<template>
  <div class="home">
    <div class="p-inputgroup flex-1">
      <MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" placeholder="Select Cities"
                   :class="{borderfix: !clearButtonShown}"
                   :maxSelectedLabels="3" :show-toggle-all="false">
      </MultiSelect>
      <Button v-show="clearButtonShown" class="mt" outlined icon="pi pi-times" severity="secondary" @click="clearSelection"></Button>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import MultiSelect from "primevue/multiselect";
import Button from "primevue/button";

const selectedCities = ref();
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
]);

function clearSelection() {
  selectedCities.value = []
}

const clearButtonShown = computed(() => {
  return selectedCities.value?.length
})
</script>

<style>
.borderfix {
  border-top-right-radius: 6px !important;
  border-bottom-right-radius: 6px !important;
}
</style>
